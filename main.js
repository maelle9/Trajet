import * as R from "ramda";
import * as F from "./fonctions.js";
import * as C from "./cities.js";

console.log(F.Score(C.citiesList)('paris'));

console.log(F.Distance(C.citiesList)('paris','marseille'));

console.log(F.ScoreMin(C.citiesList));

console.log(F.DistanceVilleLaPlusProche(C.citiesList)('paris'));

console.log(F.ClassementVilleParDistance('paris'));

console.log(F.VilleLaPlusProche('paris'));


console.log('--- Arbre couvrant ---'); // PAS FINI

const nomVilleDepart = 'paris'

const arbreCouvrant = [[nomVilleDepart,[F.VilleLaPlusProche(nomVilleDepart),F.VilleLaPlusProche_n2(nomVilleDepart)]]]

let listCityIntermediaire = F.Supprimer('paris',C.citiesList)
listCityIntermediaire = F.Supprimer('marseille',listCityIntermediaire)
console.log(listCityIntermediaire)

console.log(R.append('tests', arbreCouvrant))
