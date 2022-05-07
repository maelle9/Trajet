

import * as R from "ramda";

const City = [
    {city: 'Paris', score: 2000, distance:[0, 466, 773, 583, 563, 591]},
    {city: 'Lyon', score: 1000, distance:[466, 0, 315, 556, 103, 971]},
    {city: 'Marseille', score: 600, distance: [773, 315, 0, 645, 214, 1280]},
    {city: 'Bordeaux', score: 300, distance: [583, 556, 645, 0, 652, 652]},
    {city: 'Valence', score: 500, distance: [563, 103, 214, 652, 0, 1068]},
    {city: 'Brest', score: 100, distance:[591, 971, 1280, 652, 1068, 0]}
];

const City_2 = [
    {city: 'Paris', score: 2000, distance:[{Lyon: 466, Marseille: 773, Bordeaux: 583, Valence: 563, Brest: 591}]},
    {city: 'Lyon', score: 1000, distance:[{Lyon: 466, Marseille: 773, Bordeaux: 583, Valence: 563, Brest: 591}]},
    {city: 'Brest', score: 100, distance:[{Lyon: 466, Marseille: 773, Bordeaux: 583, Valence: 563, Brest: 591}]}
];

City.sort(function (a, b) {
    return a.score - b.score ;
});
var getScore = R.pluck('score');
console.log(getScore(City))




var getDistance = R.pluck('distance');
var distance = getDistance(City_2)
var getVille = R.pluck('Valence');

console.log(getVille(distance[R.findIndex(R.propEq('city', 'Paris'))(City_2)]))
