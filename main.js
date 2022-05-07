import * as R from "ramda";
import * as F from "./fonctions.js";
import * as C from "./cities.js";



console.log(F.Distance(C.citiesList)('paris','marseille'));

console.log(F.SelectOneCity(C.citiesList)('paris'));

console.log(F.SelectOneCity_FindMin(C.citiesList)('paris'));

console.log(F.Delete(C.citiesList)('paris','marseille'));





