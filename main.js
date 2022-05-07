import * as R from "ramda";
import * as F from "./fonctions.js";
import * as C from "./cities.js";


console.log(F.Distance(C.citiesList)('paris','marseille'));

console.log(F.SelectOneCity(C.citiesList)('paris'));

console.log(F.VilleLaPlusProche(C.citiesList)('paris'));

console.log(F.Delete(C.citiesList)('paris','marseille'));


// ----------- arbre couvrant construction ----------- // PAS FINI

console.log('--- Arbre couvrant ---');

const nomVilleDepart = 'paris'

const arbreCouvrant = [{city:nomVilleDepart, child:[F.VilleLaPlusProche(C.citiesList)(nomVilleDepart)]},
    {city:F.VilleLaPlusProche(C.citiesList)(nomVilleDepart), child:[]}];

console.log(F.Delete(C.citiesList)(nomVilleDepart, F.VilleLaPlusProche(C.citiesList)(nomVilleDepart)));
console.log(arbreCouvrant)


// ----------- test -----------
const getMetrics = R.applySpec({
    city: R.add,
    child: [R.multiply]
});
console.log(getMetrics(2, 4)); // => { sum: 6, nested: { mul: 8 } }

