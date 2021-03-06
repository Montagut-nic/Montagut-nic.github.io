/*global IdeasArray*/
/*global toastr*/
/*global AdmIdeasArray*/
/*global DipIdeasArray*/
/*global MilIdeasArray*/
/*global costModifierByOrder*/
/*global compare*/
/*global $*/
/*global jQuery*/

var imgPlaceholders = [],
	ideaSelects = [],
	costValues = [],
	modifierValues = [],
	levelButtons = [],

	ideas = [],
	ideaCurrentLevels = [];

var initComplete = false;

toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": true,
  "onclick": null,
  "showDuration": "200",
  "hideDuration": "700",
  "timeOut": "4000",
  "extendedTimeOut": "300",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

function updateURLString(){
	if(initComplete) {
		var ideaHash = "#";
		ideaHash += "sp=" + $("#starting-points-input").val();
		ideaHash += "&rp=" + $("#reserved-points-input").val();
		for (var i=1 ; i<=10 ; i++) {
			ideaHash += "&id"+i+"=" + ideas[i-1].id;
			ideaHash += "&lv"+i+"=" + ideaCurrentLevels[i-1];
			if(i<10) ideaHash+= "&";
		}
		
		//update URL hash
		window.history.pushState(null, null, ideaHash);
	}
	return;
}

function getHashVariable(variable){
       var hash = window.location.hash.substring(1);
       var vars = hash.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

function getIdeasFromURL(){
	var ideaId, ideaLv, selectedIdea;
	$("#starting-points-input").val( getHashVariable("sp") != false ?  getHashVariable("sp") : 200 );
	$("#reserved-points-input").val( getHashVariable("rp") != false ?  getHashVariable("rp") : 0 );
	for (var i = 0; i < 10; i++) {
		if(i==9)
			initComplete = true;	
		ideaId = getHashVariable("id"+(i+1));
		ideaLv = getHashVariable("lv"+(i+1));
		if(ideaId == false || ideaLv == false){
			randomizeIdea(i);
		}else{
			selectedIdea = IdeasArray.filter(function(obj){
				return obj.id == ideaId;
			});
			ideas[i] = selectedIdea[0];

			ideaSelects[i].val(ideas[i].name);
			ideaSelects[i].change();
			//changeIdeaLevel(i, parseInt(ideaLv));
			levelButtons[i][ideaLv-1].prop("checked", true);
			levelButtons[i][ideaLv-1].button("refresh");
			levelButtons[i][ideaLv-1].change();
		}
	}
}

function randomizeIdea(ideaIndex){
	var randomIdea;
	do {
		randomIdea = IdeasArray[Math.floor(Math.random()*IdeasArray.length)];

		/*SHOULD RE-ROLL ONCE IF IDEA IS OF THE SAME GROUP THAN PREVIOUS (to promote varied ideas) */

	} while(ideas.indexOf(randomIdea) != -1);
	ideas[ideaIndex] = randomIdea;
	ideaSelects[ideaIndex].val(randomIdea.name).change();
}

function addSignToValues(value){
	if(value > 0)
		return "+"+value;
	else
		return value;
}

function getMaxIdeaLevel(idea){
	if(idea.cost4 != null)
		return 4;
	else if (idea.cost3 != null)
		return 3;
	else if (idea.cost2 != null)
		return 2;
	else
		return 1;
}

function getFloatFromPercentage(value){
	return Math.round(parseFloat(value.replace("%", ""))*100)/100;
}

function evaluateExcessIdeasInGroup(groupPercentage, groupValueSelectorString){
	var warningMessage = "Si m??s del 50% de los niveles de ideas pertenecen al mismo grupo, esas ideas costar??n m??s!";
	if(initComplete){
		if(groupPercentage > 50){
			$(groupValueSelectorString).css("background-color", "#ffa8a8");
			$(groupValueSelectorString).css("color", "#000000");
			$(groupValueSelectorString).attr("title", warningMessage);
			toastr["warning"](warningMessage, "M??s del 50% en un mismo grupo de ideas");
		}else{
			$(groupValueSelectorString).css("background-color", "#201913");
			$(groupValueSelectorString).css("color", "#f9f6da");
			$(groupValueSelectorString).attr("title", "");
		}
	}
}

function evaluateExcessMultiplier(){
	var adm = parseInt($("#total-idea-levels-adm").text()),
		dip = parseInt($("#total-idea-levels-dip").text()),
		mil = parseInt($("#total-idea-levels-mil").text());

	var excess = Math.max(adm, dip, mil) / (adm + dip + mil);

	if(excess > 0.5)
		return 5 * (excess - 0.5);
	else
		return 0;
}

function updateAvailablePoints(){
	var totalCostForIdeas = 0;
	for (var i = 0; i < 10; i++) {
		totalCostForIdeas += parseFloat(costValues[i].val());
	};
	$("#available-points-value").val(Math.floor($("#starting-points-input").val() - $("#reserved-points-input").val() - totalCostForIdeas));

	if($("#available-points-value").val() < 0){
		$("#available-points-value").css("background-color", "#ffa8a8");
		toastr["error"]("Has gastado m??s puntos que los que hay disponibles", "Puntos Negativos")
	}else{	
		$("#available-points-value").css("background-color", "#f9f6da");
	}
}

function updateIdeaGroupLevels(){
	var admTotalLevels = 0,
		dipTotalLevels = 0,
		milTotalLevels = 0,
		totalLevels = 0;

	for (var i = 0; i < ideas.length; i++) {
		var value =  Math.floor(10 * ideaCurrentLevels[i] / getMaxIdeaLevel(ideas[i]));
		if(ideas[i].group == "adm"){
			admTotalLevels += value;
		}else if(ideas[i].group == "dip"){
			dipTotalLevels += value;
		}else if(ideas[i].group == "mil"){
			milTotalLevels += value;
		}
		totalLevels += value;
	};

	var admPercentage = Math.round((admTotalLevels/totalLevels)*1000)/10,
		dipPercentage = Math.round((dipTotalLevels/totalLevels)*1000)/10,
		milPercentage = Math.round((milTotalLevels/totalLevels)*1000)/10;
	$("#total-idea-levels-adm").text(admPercentage+"%");
	$("#total-idea-levels-dip").text(dipPercentage+"%");
	$("#total-idea-levels-mil").text(milPercentage+"%");

	evaluateExcessIdeasInGroup(admPercentage, "#total-idea-levels-adm");
	evaluateExcessIdeasInGroup(dipPercentage, "#total-idea-levels-dip");
	evaluateExcessIdeasInGroup(milPercentage, "#total-idea-levels-mil");
}

function changeIdeaLevel(ideaIndex, ideaLevel){
	ideaCurrentLevels[ideaIndex] = ideaLevel;
	updateIdeaGroupLevels();

	if(ideas[ideaIndex].valuePerLevel != null){
		if(isNaN(ideas[ideaIndex].valuePerLevel))
			modifierValues[ideaIndex].val(addSignToValues(ideas[ideaIndex].valuePerLevel));
		else
			modifierValues[ideaIndex].val(addSignToValues(ideas[ideaIndex].valuePerLevel*ideaCurrentLevels[ideaIndex]));
	}else{
		modifierValues[ideaIndex].val(addSignToValues(ideas[ideaIndex].percentagePerLevel*ideaCurrentLevels[ideaIndex])+"%");
	}

	adjustIdeaCosts();
	updateAvailablePoints();
	updateURLString();
}

function adjustIdeaCosts(){
	var baseCost, finalCost;
	var excessMultipler = evaluateExcessMultiplier();

	for (var i = 0; i < 10; i++) {
		switch(ideaCurrentLevels[i]){
			case 1: baseCost = ideas[i].cost1;	break;
			case 2:	baseCost = ideas[i].cost2;	break;
			case 3:	baseCost = ideas[i].cost3;	break;
			case 4:	baseCost = ideas[i].cost4;	break;
		}
		finalCost = (baseCost * costModifierByOrder[i]) + (baseCost * excessMultipler);

		costValues[i].val((Math.round(finalCost*10)/10)+" points");
	}
}

jQuery(function($){
//jquery UI settings
	$("#accordion").accordion({
		collapsible: true
	});
	$(".ideaLvlRadioButtons").buttonset();

	$(".ideaRandomizer").button({
      icons: {
        primary: "ui-icon-shuffle"
      },
      text: false
    });
    
    $(".hashRefresher").button({
      /*icons: {
        primary: "ui-icon-shuffle"
      },*/
      //text: false
    });

//Sort ideas
	AdmIdeasArray.sort(compare);
	DipIdeasArray.sort(compare);
	MilIdeasArray.sort(compare);
	IdeasArray = AdmIdeasArray.concat(DipIdeasArray).concat(MilIdeasArray);

//initializing arrays for handling components
	for (var i = 0; i < 10; i++) {
		imgPlaceholders.push($("#img-placeholder-"+(i+1)));
		ideaSelects.push($("#idea-"+(i+1)+"-selector"));
		modifierValues.push($("#value-modifier-idea-"+(i+1)));
		costValues.push($("#value-cost-idea-"+(i+1)));
		levelButtons.push([]);
		for (var j = 1; j <= 4; j++) {
			levelButtons[i].push($("#radio-idea-"+(i+1)+"-lv"+(j)));
		};
		ideas.push(IdeasArray[0]); //initialized ideas array with the first idea
		ideaCurrentLevels.push(1); //all ideas start at lv1
	};

//onChange functions
	$(".ideaRandomizer").click(function(){
		var id = this.id.split("-");
		randomizeIdea(id[1]-1);
    })
    
    $(".hashRefresher").click(function(){
		updateURLString();
    })

	$("#points-selector").change(function(){
		$("#starting-points-input").val($(this).val().substring(0,3));
		updateAvailablePoints();
	});

	$("#starting-points-input,#reserved-points-input").change(function(){
		updateAvailablePoints();
	});

	$(".idea-row .ideaLvlRadioButtons input").change(function(){
		var id = this.id.split("-");
		changeIdeaLevel(id[2]-1, parseInt(id[3].replace("lv","")));
	});

	$("[id^=idea-]").each(function(index, element) {
		//Add all ideas to select
		var previousGroup = null;
		IdeasArray.forEach(function(idea, indexB, array){
			if(idea.id.substring(0, 3) != previousGroup){
				if(idea.id.indexOf("adm") != -1)
					ideaSelects[index].append("<optgroup class=\"select-group-label\" label=\"Administrative\">")
				else if(idea.id.indexOf("dip") != -1)
					ideaSelects[index].append("<optgroup class=\"select-group-label\" label=\"Diplomatic\">")
				else if(idea.id.indexOf("mil") != -1)
					ideaSelects[index].append("<optgroup class=\"select-group-label\" label=\"Military\">")
			}
			previousGroup = idea.id.substring(0, 3);
			var optionHTMLString = "<option val=\x22"+idea.id+"\x22>"+idea.name+"</option>"
			ideaSelects[index].append(optionHTMLString);
		});

		ideaSelects[index].change(function(){
			var index = ($(this).attr("id").split("-")[1]) - 1;
			var selectedVal = $(this).find(':selected').attr('val');

			/* CHECK IF IDEA IS SELECTED SOMEWHERE ELSE, IF SO, SWAP THEM */

			var selectedIdea = IdeasArray.filter(function(obj){
				return obj.id == selectedVal;
			});
			ideas[index] = selectedIdea[0];

			for (var j = 0; j < 4; j++) {
				if(ideas[index]["cost"+(j+1)] != null){
					levelButtons[index][j].button("enable");
					levelButtons[index][j].css("color", "#000000");
				}else{
					levelButtons[index][j].button("disable");
					levelButtons[index][j].css("color", "#dddddd");
				}
			};
			levelButtons[index][0].prop("checked", true);
			levelButtons[index][0].button("refresh");

			if (ideas[index].group == "adm")
				imgPlaceholders[index].attr("src", "img/adm-point-bg.png");
			else if (ideas[index].group == "dip")
				imgPlaceholders[index].attr("src", "img/dip-point-bg.png");
			else
				imgPlaceholders[index].attr("src", "img/mil-point-bg.png");

			changeIdeaLevel(index, parseInt(1));
		});
	});

		$("#points-selector").change();
	getIdeasFromURL();

});