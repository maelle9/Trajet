import * as R from "ramda";
import * as F from "./fonctions.js";
import * as C from "./cities.js";

// ----------- chrono -----------
var d = new Date();
var oldTime = d.getTime();
// METTRE LE CODE A CHORNOMETRER ICI
var actualTime = d.getTime();
console.log(oldTime - actualTime);


// ----------- methode -----------

console.log(F.Score(C.citiesList)('paris'));

console.log(F.Distance(C.citiesList)('paris','marseille'));

console.log(F.ScoreMin(C.citiesList));

console.log(F.DistanceVilleLaPlusProche(C.citiesList)('paris'));

console.log(F.ClassementVilleParDistance('paris'));

console.log(F.VilleLaPlusProche('paris'));

console.log(F.VilleLaPlusProcheExcept('paris', ['lyon']));


/*
// ----------- arbre couvrant test -----------

console.log('--- Arbre couvrant ---'); // PAS FINI

const nomVilleDepart = 'paris'

const arbreCouvrant = [[nomVilleDepart,[F.VilleLaPlusProche(nomVilleDepart),F.VilleLaPlusProche_n2(nomVilleDepart)]]]
console.log(arbreCouvrant)

//console.log(F.Supprimer(C.citiesList)('paris'));
let listCityIntermediaire = F.Supprimer(C.citiesList)('paris');
console.log(listCityIntermediaire)
//listCityIntermediaire = F.Supprimer('marseille',listCityIntermediaire)
//console.log(listCityIntermediaire)

//console.log(R.append('tests', arbreCouvrant))
*/

