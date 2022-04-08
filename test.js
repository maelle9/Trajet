import * as R from "ramda";
import{assocCityDist, Score} from "./dist.js";

const City = [
    {city: 'Paris', score: 2000},
    {city: 'Lyon', score: 1000},
    {city: 'Marseille', score: 600},
    {city: 'Bordeaux', score: 300},
    {city: 'Valence', score: 500},
    {city: 'Brest', score: 100}
];

// faire un trajet avec le score max et compter le nombre de kilomètre

const itinerary = R.applySpec({
    scoreTotal: Score,
    //kilometer: assocSumDist
});

console.log(assocCityDist(City));
//console.log(itinerary(City));

// faire un trajet avec toutes les villes en parcourant le moins de kilomètre possible