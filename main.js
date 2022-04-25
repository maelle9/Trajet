import * as R from "ramda";
import * as F from "./fonctions.js";
import * as C from "./cities.js";


console.log(F.Score(C.citiesList)('paris'));

console.log(F.Distance(C.citiesList)('paris','lyon'));

console.log(F.ScoreMin(C.citiesList));

console.log(F.DistanceVilleLaPlusProche(C.citiesList)('paris'));
