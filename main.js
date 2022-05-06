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



// ----------- arbre couvrant test -----------

console.log('--- Arbre couvrant ---'); // PAS FINI

const nomVilleDepart = 'paris'

const arbreCouvrant = [{city:nomVilleDepart, child:[F.VilleLaPlusProche(nomVilleDepart)]},
                        {city:F.VilleLaPlusProche(nomVilleDepart), child:[]}];

console.log(F.Supprimer(nomVilleDepart, F.VilleLaPlusProche(nomVilleDepart), C.citiesList));
console.log(arbreCouvrant)

//console.log(R.omit(['lyon', 'valence'], F.s(C.citiesList)('paris')));


const findMin = R.pipe(
    R.toPairs,
    R.sortBy(R.prop(1)),
    R.take(2),
    R.map(prep)
);

const Next = cities => (from) => R.pipe(
    R.find(R.propEq('city', from)),
    R.path(['distance']),
    findMin
)(C.citiesList);
console.log(Next('paris'))
