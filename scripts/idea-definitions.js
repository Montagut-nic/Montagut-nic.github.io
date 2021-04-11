/*Idea Definitions:
Ideas are defined here for use in the code; for each idea, the following values are included:
 
* id: a unique identifier, formed by the idea group (adm/dip/mil), followed by a sequential integer.
If new ideas are to be added, they'll have the biggest integers regardless of where they are shown ingame.
* name: the name displayed in-game in english.
* description: the description shown ingame; will be used for a floating tooltip in the future.
* group: the group this idea belongs to AKA the type of monarch point that takes to learn this idea. It's used to calculate the % of ideas in each group.
* valuePerLevel: if the idea has a flat value (like giving +1 of something), that value is shown here with an float. Negative values are acceptable.
If the idea grants a percentage bonus, this should be "null".
* percentagePerLevel: if the idea has a percentage value (like giving +12.5% of something), that value is shown here with an float. Negative values are acceptable.
If the idea grants a flat bonus, this should be "null".
* cost1, cost2, cost3, cost4: the base cost in monarch points for each level of the idea. If the idea has fewer than 4 levels, all unused values should be set to "null".
 
*/
 
var costModifierByOrder = [
    2,      //Tradition 1
    2,      //Tradition 2
    2,      //Idea 1
    1.8,    //Idea 2
    1.6,    //Idea 3
    1.4,    //Idea 4
    1.2,    //Idea 5
    1,      //Idea 6
    1,      //Idea 7
    1       //Ambition
];
 
function compare(a,b) {
  if (a.name < b.name)
    return -1;
  else if (a.name > b.name)
    return 1;
  else
    return 0;
}
 
var IdeasArray = [];
 
var AdmIdeasArray = [
//Administrative Ideas
    {
id:"adm1",
name:"National Tax Modifier",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:5,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"adm2",
name:"Production Efficiency",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:5,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"adm3",
name:"National Unrest",
description:"tbd",
group:"adm",
valuePerLevel:-0.5,
percentagePerLevel:null,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"adm4",
name:"Stability Cost Modifier",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:-5,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"adm5",
name:"Missionaries",
description:"tbd",
group:"adm",
valuePerLevel:1,
percentagePerLevel:null,
cost1:15, cost2:50, cost3:null, cost4:null
    },
    {
id:"adm6",
name:"Yearly Inflation Reduction",
description:"tbd",
group:"adm",
valuePerLevel:-0.05,
percentagePerLevel:null,
cost1:0, cost2:5, cost3:15, cost4:30
    },
    {
id:"adm7",
name:"Reduce Inflation Cost",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:-5,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"adm8",
name:"Interest per annum",
description:"tbd",
group:"adm",
valuePerLevel:-0.5,
percentagePerLevel:null,
cost1:5, cost2:30, cost3:null, cost4:null
    },
    {
id:"adm9",
name:"Build Cost",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:-5,
cost1:0, cost2:5, cost3:15, cost4:30
    },
    {
id:"adm10",
name:"Development Cost",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:-10,
cost1:5, cost2:30, cost3:null, cost4:null
    },
    {
id:"adm11",
name:"Missionary Strength",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:0.5,
cost1:0, cost2:5, cost3:15, cost4:30
    },
    {
id:"adm12",
name:"Yearly Prestige",
description:"tbd",
group:"adm",
valuePerLevel:0.5,
percentagePerLevel:null,
cost1:0, cost2:5, cost3:15, cost4:30
    },
    {
id:"adm13",
name:"Prestige Decay",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:-0.5,
cost1:0, cost2:5, cost3:15, cost4:30
    },
    {
id:"adm14",
name:"Yearly Legitimacy",
description:"tbd",
group:"adm",
valuePerLevel:0.5,
percentagePerLevel:null,
cost1:0, cost2:15, cost3:null, cost4:null
    },
    {
id:"adm15",
name:"Yearly Horde Unity",
description:"tbd",
group:"adm",
valuePerLevel:0.5,
percentagePerLevel:null,
cost1:0, cost2:15, cost3:null, cost4:null
    },
    {
id:"adm16",
name:"Yearly Devotion",
description:"tbd",
group:"adm",
valuePerLevel:0.5,
percentagePerLevel:null,
cost1:0, cost2:15, cost3:null, cost4:null
    },
    {
id:"adm17",
name:"Yearly Rep Tradition",
description:"tbd",
group:"adm",
valuePerLevel:0.15,
percentagePerLevel:null,
cost1:20, cost2:60, cost3:null, cost4:null
    },
    {
id:"adm18",
name:"Technology Cost",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:-5,
cost1:5, cost2:30, cost3:null, cost4:null
    },
    {
id:"adm19",
name:"Idea Cost",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:-5,
cost1:3, cost2:18, cost3:null, cost4:null
    },
    {
id:"adm20",
name:"Advisor Costs",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:-5,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"adm21",
name:"Possible Advisors",
description:"tbd",
group:"adm",
valuePerLevel:1,
percentagePerLevel:null,
cost1:5, cost2:30, cost3:null, cost4:null
    },
    {
id:"adm22",
name:"Tolerance of the True Faith",
description:"tbd",
group:"adm",
valuePerLevel:1,
percentagePerLevel:null,
cost1:3, cost2:18, cost3:null, cost4:null
    },
    {
id:"adm23",
name:"Tolerance of Heretics",
description:"tbd",
group:"adm",
valuePerLevel:1,
percentagePerLevel:null,
cost1:3, cost2:18, cost3:null, cost4:null
    },
    {
id:"adm24",
name:"Tolerance of Heathens",
description:"tbd",
group:"adm",
valuePerLevel:1,
percentagePerLevel:null,
cost1:3, cost2:18, cost3:null, cost4:null
    },
    {
id:"adm25",
name:"Chance of new heir",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:25,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"adm26",
name:"Hostile Core-Creation Cost on us",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:15,
cost1:0, cost2:5, cost3:15, cost4:30
    },
    {
id:"adm27",
name:"Core-Creation Cost",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:-5,
cost1:0, cost2:5, cost3:15, cost4:30
    },
    {
id:"adm28",
name:"Income from Vassals",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:5,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"adm29",
name:"Religious Unity",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:5,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"adm30",
name:"Autonomy Change Cooldown",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:-10,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"adm31",
name:"Imperial Authority",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:10,
cost1:5, cost2:30, cost3:null, cost4:null
    },
    {
id:"adm32",
name:"Years of Separatism",
description:"tbd",
group:"adm",
valuePerLevel:-5,
percentagePerLevel:null,
cost1:5, cost2:30, cost3:null, cost4:null
    },
    {
id:"adm33",
name:"Female Advisor Chance (max level 10)",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:10,
cost1:0, cost2:null, cost3:null, cost4:null
    },
    {
id:"adm34",
name:"Yearly Harmony",
description:"tbd",
group:"adm",
valuePerLevel:0.25,
percentagePerLevel:null,
cost1:0, cost2:5, cost3:null, cost4:null
    },
    {
id:"adm35",
name:"Harmonization Speed",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:10,
cost1: 0, cost2:10, cost3:null, cost4:null
    },
    {
id:"adm36",
name:"Yearly Meritocracy",
description:"tbd",
group:"adm",
valuePerLevel:0.5,
percentagePerLevel:null,
cost1: 0, cost2:15, cost3:null, cost4:null
    },
    {
id:"adm37",
name:"Monthly Admin Power",
description:"tbd",
group:"adm",
valuePerLevel:1,
percentagePerLevel:null,
cost1: 60, cost2:null, cost3:null, cost4:null
    },
    {
id:"adm38",
name:"Max Absolutism",
description:"tbd",
group:"adm",
valuePerLevel:5,
percentagePerLevel:null,
cost1: 0, cost2:5, cost3:15, cost4:30
    },
    {
id:"adm39",
name:"Yearly Absolutism",
description:"tbd",
group:"adm",
valuePerLevel:0.5,
percentagePerLevel:null,
cost1: 15, cost2:60, cost3:null, cost4:null
    },
    {
id:"adm40",
name:"Administrative Efficiency",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:5,
cost1: 15, cost2:60, cost3:null, cost4:null
    },
    {
id:"adm41",
name:"Institution Spread in True Faith",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:10,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"adm42",
name:"Global Institution Spread",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:10,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"adm43",
name:"Instituion Embracement Cost",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:-10,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"adm44",
name:"Governing Capacity Modifiers",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:10,
cost1: 0, cost2:5, cost3:15, cost4:30
    },
    {
id:"adm45",
name:"Church Power",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:10,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"adm46",
name:"Yearly Corruption",
description:"tbd",
group:"adm",
valuePerLevel:-0.05,
percentagePerLevel:null,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"adm47",
name:"Caravan Power",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:10,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"adm48",
name:"Monthly Fervor",
description:"tbd",
group:"adm",
valuePerLevel:1,
percentagePerLevel:null,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"adm49",
name:"Goods Produced Modifier",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:5,
cost1: 0, cost2:5, cost3:15, cost4:30
    },
    {
id:"adm50",
name:"Admin Tech Cost",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:-5,
cost1: 0, cost2:20, cost3:null, cost4:null
    },
    {
id:"adm51",
name:"Build Time",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:-10,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"adm52",
name:"State Maintenance",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:-10,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"adm53",
name:"Monthly Autonomy Change",
description:"tbd",
group:"adm",
valuePerLevel:-0.05,
percentagePerLevel:null,
cost1: 5, cost2:30, cost3:null, cost4:null
    },
    {
id:"adm54",
name:"Admin free policies",
description:"tbd",
group:"adm",
valuePerLevel:1,
percentagePerLevel:null,
cost1: 30, cost2:null, cost3:null, cost4:null
    },
    {
id:"adm55",
name:"Admin possible policies",
description:"tbd",
group:"adm",
valuePerLevel:1,
percentagePerLevel:null,
cost1: 30, cost2:null, cost3:null, cost4:null
    },
    {
id:"adm56",
name:"Monthly Piety-",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:-0.1,
cost1: 9, cost2:18, cost3:null, cost4:null
    },
    {
id:"adm57",
name:"Monthly Piety+",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:0.1,
cost1: 9, cost2:18, cost3:null, cost4:null
    },
    {
id:"adm58",
name:"Reform Progress Growth",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:7.5,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"adm59",
name:"Heretics and Heathens don't give penalties",
description:"tbd",
group:"adm",
valuePerLevel:"YES",
percentagePerLevel:null,
cost1: 60, cost2:null, cost3:null, cost4:null
    },
    {
id:"adm60",
name:"Cost of Ruler's Culture Advisors",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:-5,
cost1: 0, cost2:1, cost3:6, cost4:9
    },
    {
id:"adm61",
name:"Max Revolutionary Zeal",
description:"tbd",
group:"adm",
valuePerLevel:5,
percentagePerLevel:null,
cost1: 0, cost2:5, cost3:15, cost4:30
    },
    {
id:"adm62",
name:"Average Monarch Lifespan",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:10,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"adm62",
name:"Yearly Patriarch Authority",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:0.5,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"adm63",
name:"Clergy Loyalty Equilibrium",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:5,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"adm64",
name:"Dhimmi Loyalty Equilibrium",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:5,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"adm65",
name:"Jains Loyalty Equilibrium",
description:"tbd",
group:"adm",
valuePerLevel:null,
percentagePerLevel:5,
cost1: 0, cost2:3, cost3:9, cost4:18
    }
];
 
var DipIdeasArray = [
//Diplomatic Ideas
    {
id:"dip1",
name:"Max Promoted Cultures",
description:"tbd",
group:"dip",
valuePerLevel:1,
percentagePerLevel:null,
cost1:0, cost2:5, cost3:15, cost4:30
    },
    {
id:"dip2",
name:"Culture Conversion Cost",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:-5,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip3",
name:"Morale of Navies",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:5,
cost1:0, cost2:5, cost3:15, cost4:30
    },
    {
id:"dip4",
name:"Trade Efficiency",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:5,
cost1:0, cost2:5, cost3:15, cost4:30
    },
    {
id:"dip5",
name:"Global Trade Power",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:5,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip6",
name:"Provincial Trade Power Modifier",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:5,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip7",
name:"Trade Steering",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:5,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip8",
name:"Global Tariffs",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:5,
cost1:0, cost2:5, cost3:15, cost4:30
    },
    {
id:"dip9",
name:"Diplomatic Reputation",
description:"tbd",
group:"dip",
valuePerLevel:1,
percentagePerLevel:null,
cost1:5, cost2:30, cost3:null, cost4:null
    },
    {
id:"dip10",
name:"Diplomatic Relations",
description:"tbd",
group:"dip",
valuePerLevel:1,
percentagePerLevel:null,
cost1:5, cost2:30, cost3:null, cost4:null
    },
    {
id:"dip11",
name:"Merchants",
description:"tbd",
group:"dip",
valuePerLevel:1,
percentagePerLevel:null,
cost1:30, cost2:140, cost3:null, cost4:null
    },
    {
id:"dip12",
name:"Colonists",
description:"tbd",
group:"dip",
valuePerLevel:1,
percentagePerLevel:null,
cost1:30, cost2:140, cost3:null, cost4:null
    },
    {
id:"dip13",
name:"Diplomats",
description:"tbd",
group:"dip",
valuePerLevel:1,
percentagePerLevel:null,
cost1:30, cost2:140, cost3:null, cost4:null
    },
    {
id:"dip14",
name:"Naval Maintenance Modifier",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:-5,
cost1:0, cost2:5, cost3:15, cost4:30
    },
    {
id:"dip15",
name:"Naval Force Limit Modifier",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:7.5,
cost1:0, cost2:5, cost3:15, cost4:30
    },
    {
id:"dip16",
name:"Ship Durability",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:5,
cost1:0, cost2:5, cost3:15, cost4:30
    },
    {
id:"dip17",
name:"Monthly War Exhaustion",
description:"tbd",
group:"dip",
valuePerLevel:-0.05,
percentagePerLevel:null,
cost1:5, cost2:30, cost3:null, cost4:null
    },
    {
id:"dip18",
name:"Cost of Reducing War Exhaustion",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:-5,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip19",
name:"Yearly Navy Tradition",
description:"tbd",
group:"dip",
valuePerLevel:0.5,
percentagePerLevel:null,
cost1:0, cost2:15, cost3:null, cost4:null
    },
    {
id:"dip20",
name:"Yearly Navy Tradition Decay",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:-0.5,
cost1:0, cost2:15, cost3:null, cost4:null
    },
    {
id:"dip21",
name:"Naval Leader Fire",
description:"tbd",
group:"dip",
valuePerLevel:1,
percentagePerLevel:null,
cost1:15, cost2:50, cost3:null, cost4:null
    },
    {
id:"dip22",
name:"Naval Leader Shock",
description:"tbd",
group:"dip",
valuePerLevel:1,
percentagePerLevel:null,
cost1:15, cost2:50, cost3:null, cost4:null
    },
    {
id:"dip23",
name:"Naval Leader Manuever",
description:"tbd",
group:"dip",
valuePerLevel:1,
percentagePerLevel:null,
cost1:15, cost2:50, cost3:null, cost4:null
    },
    {
id:"dip24",
name:"Spy Network Construction",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:10,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip25",
name:"Foreign Spy Detection",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:10,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip26",
name:"Shipbuilding Time",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:-5,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip27",
name:"Blockade Efficiency",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:10,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip28",
name:"Embargo Efficiency",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:10,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip29",
name:"Prestige from Naval battles",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:25,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip30",
name:"Colonial Range",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:10,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip31",
name:"Global Settler Increase",
description:"tbd",
group:"dip",
valuePerLevel:5,
percentagePerLevel:null,
cost1:0, cost2:5, cost3:15, cost4:30
    },
    {
id:"dip32",
name:"Aggressive Expansion Impact",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:-5,
cost1:0, cost2:5, cost3:15, cost4:30
    },
    {
id:"dip33",
name:"Privateer Efficiency",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:7.5,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip34",
name:"Diplomatic Annexation Cost",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:-5,
cost1:0, cost2:5, cost3:15, cost4:30
    },
    {
id:"dip35",
name:"Heavy Ship Cost",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:-5,
cost1:0, cost2:5, cost3:15, cost4:30
    },
    {
id:"dip36",
name:"Light Ship Cost",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:-5,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip37",
name:"Galley Cost",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:-5,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip38",
name:"Transport Cost",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:-5,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip39",
name:"Heavy Ship Combat Ability",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:5,
cost1:0, cost2:5, cost3:15, cost4:30
    },
    {
id:"dip40",
name:"Light Ship Combat Ability",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:5,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip41",
name:"Galley Combat Ability",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:5,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip42",
name:"National Sailors Modifier",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:10,
cost1: 0, cost2:5, cost3:15, cost4:30
    },
    {
id:"dip43",
name:"Sailors Recovery Speed",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:5,
cost1: 0, cost2:5, cost3:15, cost4:30
    },
    {
id:"dip44",
name:"May Raid Coasts",
description:"tbd",
group:"dip",
valuePerLevel:"YES",
percentagePerLevel:null,
cost1: 20, cost2:null, cost3:null, cost4:null
    },
    {
id:"dip45",
name:"Warscore Cost vs Other Religion",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:-12.5,
cost1: 5, cost2:15, cost3:null, cost4:null
    },
    {
id:"dip46",
name:"War Taxes Cost",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:-50,
cost1: 10, cost2:20, cost3:null, cost4:null
    },
    {
id:"dip47",
name:"Monthly Dip Power",
description:"tbd",
group:"dip",
valuePerLevel:1,
percentagePerLevel:null,
cost1: 60, cost2:null, cost3:null, cost4:null
    },
    {
id:"dip48",
name:"Liberty Desire From Subject Development",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:-10,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip49",
name:"Liberty desire in same continent subjects",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:-10,
cost1: 0, cost2:10, cost3:null, cost4:null
    },
    {
id:"dip50",
name:"Naval Tradition From Battle",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:50,
cost1: 0, cost2:5, cost3:null, cost4:null
    },
    {
id:"dip51",
name:"Capture Ship Chance",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:10,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip52",
name:"Morale Hit When Losing A Ship",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:-10,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip53",
name:"Global Naval Engagement",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:5,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip54",
name:"Ship Trade Power",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:10,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip55",
name:"Native Assimilation",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:15,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip56",
name:"Native Uprising Chnace",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:-25,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip56",
name:"Liberty Desire in Subjects",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:-5,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip57",
name:"Migration Cooldown",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:-10,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip58",
name:"Envoy Travel Time",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:-10,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip59",
name:"Province Warscore Cost",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:-10,
cost1: 0, cost2:20, cost3:null, cost4:null
    },
    {
id:"dip60",
name:"Diplomacy Tech Cost",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:-5,
cost1: 0, cost2:20, cost3:null, cost4:null
    },
    {
id:"dip61",
name:"Yearly Papal Influence",
description:"tbd",
group:"dip",
valuePerLevel:1,
percentagePerLevel:null,
cost1: 0, cost2:20, cost3:null, cost4:null
    },
    {
id:"dip62",
name:"Trade Range",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:20,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip63",
name:"Auto Explore Next To Colony",
description:"tbd",
group:"dip",
valuePerLevel:"YES",
percentagePerLevel:null,
cost1: 0, cost2:null, cost3:null, cost4:null
    },
    {
id:"dip64",
name:"Unjustified Demands",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:-10,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip65",
name:"Rebel Support Efficiency",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:20,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip66",
name:"Merchant Trade Power",
description:"tbd",
group:"dip",
valuePerLevel:5,
percentagePerLevel:null,
cost1: 0, cost2:10, cost3:null, cost4:null
    },
    {
id:"dip67",
name:"Local Trade Power",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:5,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip68",
name:"Recover Naval Morale Speed",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:5,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip69",
name:"Trade Power Abroad",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:5,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip70",
name:"Improve Relations",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:5,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip71",
name:"Possibile Condottieri",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:25,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip72",
name:"Naval Attrition",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:-10,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip73",
name:"Siberian Frontiers",
description:"tbd",
group:"dip",
valuePerLevel:"YES",
percentagePerLevel:null,
cost1: 200, cost2:null, cost3:null, cost4:null
    },
    {
id:"dip74",
name:"Diplomatic free policies",
description:"tbd",
group:"dip",
valuePerLevel:1,
percentagePerLevel:null,
cost1: 30, cost2:null, cost3:null, cost4:null
    },
    {
id:"dip75",
name:"Diplomatic possible policies",
description:"tbd",
group:"dip",
valuePerLevel:1,
percentagePerLevel:null,
cost1: 30, cost2:null, cost3:null, cost4:null
    },
    {
id:"dip76",
name:"Power projection from insults",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:100,
cost1: 25, cost2:null, cost3:null, cost4:null
    },
    {
id:"dip77",
name:"Can fabricate claim overseas",
description:"tbd",
group:"dip",
valuePerLevel:"YES",
percentagePerLevel:null,
cost1: 50, cost2:null, cost3:null, cost4:null
    },
    {
id:"dip78",
name:"Cost to justify trade conflict",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:-17.5,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip79",
name:"Cost to fabricate claims",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:-17.5,
cost1: 0, cost2:9, cost3:18, cost4:30
    },
    {
id:"dip80",
name:"Sailor maintenance",
description:"tbd",
group:"dip",
valuePerLevel:0.5,
percentagePerLevel:null,
cost1: 5, cost2:10, cost3:20, cost4:40
    },
    {
id:"dip81",
name:"Naval combat bonus off owned coast",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:-10,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip82",
name:"Burghers loyalty equilibrium",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:5,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip83",
name:"Vaishyas loyalty equilibrium",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:5,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"dip84",
name:"Marines Force Limit",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:5,
cost1: 0, cost2:5, cost3:null, cost4:null
    },
    {
id:"dip85",
name:"Cost to promote mercantilism",
description:"tbd",
group:"dip",
valuePerLevel:null,
percentagePerLevel:-5,
cost1: 0, cost2:5, cost3:15, cost4:30
    }
];
 
var MilIdeasArray = [
//Military Ideas
    {
id:"mil1",
name:"Morale of Armies",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:5,
cost1:0, cost2:5, cost3:15, cost4:30
    },
    {
id:"mil2",
name:"Discipline",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:2.5,
cost1:0, cost2:5, cost3:15, cost4:30
    },
    {
id:"mil3",
name:"Land Maintenance Modifier",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:-5,
cost1:0, cost2:5, cost3:15, cost4:30
    },
    {
id:"mil4",
name:"Mercenary Maintenance",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:-10,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"mil5",
name:"Military free policies",
description:"tbd",
group:"mil",
valuePerLevel:1,
percentagePerLevel:null,
cost1:30, cost2:null, cost3:null, cost4:null
    },
    {
id:"mil6",
name:"Mercenary Manpower",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:12.5,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"mil7",
name:"Land Force Limit Modifier",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:7.5,
cost1:0, cost2:5, cost3:15, cost4:30
    },
    {
id:"mil8",
name:"National Manpower Modifier",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:7.5,
cost1:0, cost2:5, cost3:15, cost4:30
    },
    {
id:"mil9",
name:"Manpower Recovery Speed",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:5,
cost1:0, cost2:5, cost3:15, cost4:30
    },
    {
id:"mil10",
name:"Reinforce Speed",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:7.5,
cost1:0, cost2:5, cost3:15, cost4:30
    },
    {
id:"mil11",
name:"Attrition for Enemies",
description:"tbd",
group:"mil",
valuePerLevel:0.5,
percentagePerLevel:null,
cost1:0, cost2:5, cost3:15, cost4:30
    },
    {
id:"mil12",
name:"Yearly Army Tradition",
description:"tbd",
group:"mil",
valuePerLevel:0.5,
percentagePerLevel:null,
cost1:0, cost2:15, cost3:null, cost4:null
    },
    {
id:"mil13",
name:"Yearly Army Tradition Decay",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:-0.5,
cost1:0, cost2:15, cost3:null, cost4:null
    },
    {
id:"mil14",
name:"Land Leader Fire",
description:"tbd",
group:"mil",
valuePerLevel:1,
percentagePerLevel:null,
cost1:30, cost2:140, cost3:null, cost4:null
    },
    {
id:"mil15",
name:"Land Leader Shock",
description:"tbd",
group:"mil",
valuePerLevel:1,
percentagePerLevel:null,
cost1:30, cost2:140, cost3:null, cost4:null
    },
    {
id:"mil16",
name:"Land Leader Manuever",
description:"tbd",
group:"mil",
valuePerLevel:1,
percentagePerLevel:null,
cost1:15, cost2:50, cost3:null, cost4:null
    },
    {
id:"mil17",
name:"Land Leader Siege",
description:"tbd",
group:"mil",
valuePerLevel:1,
percentagePerLevel:null,
cost1:30, cost2:140, cost3:null, cost4:null
    },
    {
id:"mil18",
name:"Recruitment Time",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:-5,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"mil19",
name:"Prestige from Land battles",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:25,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"mil20",
name:"Fort Defense",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:5,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"mil21",
name:"Siege Ability",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:5,
cost1:0, cost2:5, cost3:15, cost4:30
    },
    {
id:"mil22",
name:"Vassal Force Limit Contribution",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:50,
cost1:0, cost2:5, cost3:15, cost4:30
    },
    {
id:"mil23",
name:"Infantry Combat Ability",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:5,
cost1:0, cost2:5, cost3:15, cost4:30
    },
    {
id:"mil24",
name:"Cavalry Combat Ability",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:5,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"mil25",
name:"Artillery Combat Ability",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:5,
cost1:0, cost2:5, cost3:15, cost4:30
    },
    {
id:"mil26",
name:"Infantry Cost",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:-5,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"mil27",
name:"Cavalry Cost",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:-5,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"mil28",
name:"Artillery Cost",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:-5,
cost1:0, cost2:3, cost3:9, cost4:18
    },
    {
id:"mil29",
name:"May Recrute Female General",
description:"tbd",
group:"mil",
valuePerLevel:"YES",
percentagePerLevel:null,
cost1:5, cost2:null, cost3:null, cost4:null
    },
    {
id:"mil30",
name:"Mercenary Discipline",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:2.5,
cost1: 0, cost2:5, cost3:15, cost4:30
    },
    {
id:"mil31",
name:"Rival Border Fort Maintenance",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:-10,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"mil32",
name:"Blockade Impact on Siege",
description:"tbd",
group:"mil",
valuePerLevel:1,
percentagePerLevel:null,
cost1: 5, cost2:null, cost3:null, cost4:null
    },
    {
id:"mil33",
name:"Cavalry Ratio",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:15,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"mil34",
name:"Artillery Bonus vs Fort",
description:"tbd",
group:"mil",
valuePerLevel:1,
percentagePerLevel:null,
cost1: 3, cost2:10, cost3:null, cost4:null
    },
    {
id:"mil35",
name:"Mil Power Per Month",
description:"tbd",
group:"mil",
valuePerLevel:1,
percentagePerLevel:null,
cost1: 60, cost2:null, cost3:null, cost4:null
    },
    {
id:"mil36",
name:"Backrow Artillery Damage",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:5,
cost1: 0, cost2:5, cost3:15, cost4:30
    },
    {
id:"mil37",
name:"Harsh Treatment Cost",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:-10,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"mil38",
name:"Fire Damage Received",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:-5,
cost1: 0, cost2:5, cost3:15, cost4:30
    },
    {
id:"mil39",
name:"Shock Damage Received",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:-5,
cost1: 0, cost2:5, cost3:15, cost4:30
    },
    {
id:"mil40",
name:"Cavalry Flanking Ability",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:25,
cost1: 0, cost2:10, cost3:null, cost4:null
    },
    {
id:"mil41",
name:"Shock Damage",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:5,
cost1: 0, cost2:5, cost3:15, cost4:30
    },
    {
id:"mil42",
name:"Fire Damage",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:5,
cost1: 0, cost2:5, cost3:15, cost4:30
    },
    {
id:"mil43",
name:"Movement Speed",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:5,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"mil44",
name:"Army Tradition From Battle",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:50,
cost1: 0, cost2:5, cost3:null, cost4:null
    },
    {
id:"mil45",
name:"Monthly Militarized Society",
description:"tbd",
group:"mil",
valuePerLevel:0.05,
percentagePerLevel:null,
cost1: 0, cost2:5, cost3:15, cost4:30
    },
    {
id:"mil46",
name:"Reinforce Cost",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:-5,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"mil47",
name:"Looting Speed",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:10,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"mil48",
name:"Garrison Size",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:10,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"mil49",
name:"Land Attrition Suffered",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:-10,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"mil50",
name:"Military Tech Cost",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:-5,
cost1: 0, cost2:20, cost3:null, cost4:null
    },
    {
id:"mil51",
name:"Leaders Without Upkeep",
description:"tbd",
group:"mil",
valuePerLevel:1,
percentagePerLevel:null,
cost1: 0, cost2:10, cost3:null, cost4:null
    },
    {
id:"mil52",
name:"Regiment Costs",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:-5,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"mil53",
name:"Mercenary Cost",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:-2.5,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"mil54",
name:"Army Morale Recovery Speed",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:5,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"mil55",
name:"Fort Maintenance",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:-5,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"mil56",
name:"Military possible policies",
description:"tbd",
group:"mil",
valuePerLevel:1,
percentagePerLevel:null,
cost1: 30, cost2:null, cost3:null, cost4:null
    },
    {
id:"mil57",
name:"Artillery fire",
description:"tbd",
group:"mil",
valuePerLevel:1,
percentagePerLevel:null,
cost1: 25, cost2:null, cost3:null, cost4:null
    },
    {
id:"mil58",
name:"Possible manchu banners",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:12.5,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"mil59",
name:"National garrison growth",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:17.5,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"mil60",
name:"Available loot",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:15,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"mil61",
name:"Nobility loyalty equilibrium",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:5,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"mil62",
name:"Marathas loyalty equilibrium",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:5,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"mil63",
name:"Rajputs loyalty equilibrium",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:5,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"mil64",
name:"Cossacks loyalty equilibrium",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:5,
cost1: 0, cost2:3, cost3:9, cost4:18
    },
    {
id:"mil65",
name:"Tribes loyalty equilibrium",
description:"tbd",
group:"mil",
valuePerLevel:null,
percentagePerLevel:5,
cost1: 0, cost2:3, cost3:9, cost4:18
    }
];
