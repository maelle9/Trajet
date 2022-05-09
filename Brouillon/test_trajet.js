

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




/// ========== Test/echec ===========

export const citiesList_3 =[
    {city: 'paris', distance:[
            {nom:'lyon', km:466},
            {nom:'marseille', km:773},
            {nom:'bordeaux', km:583},
            {nom:'valence', km:563},
            {nom:'brest', km:591}]
    },
    {city: 'marseille', distance:[
            {nom:'paris', km:773},
            {nom:'lyon', km:315},
            {nom:'bordeaux', km:645},
            {nom:'valence', km:214},
            {nom:'brest', km:1280}]
    },
];


export const citiesList_2 = [
    {city: 'paris', score: 2000, distance:{
            lyon:466,
            marseille:773,
            bordeaux:583,
            valence:563,
            brest:591
        }},
    {city: 'lyon', score: 1000, distance:{
            paris:466,
            marseille:315,
            bordeaux:556,
            valence:103,
            brest:971
        }},
    {city: 'marseille', score: 600, distance:{
            paris:773,
            lyon: 315,
            bordeaux:645,
            valence:214,
            brest:1280
        }},
    {city: 'bordeaux', score: 300, distance:{
            paris:583,
            lyon:556,
            marseille:645,
            valence:652,
            brest:652
        }},
    {city: 'valence', score: 500, distance:{
            paris:563,
            lyon:103,
            marseille:214,
            bordeaux:652,
            brest:1068
        }},
    {city: 'brest', score: 100, distance:{
            paris:591,
            lyon:971,
            marseille:1280,
            bordeaux:652,
            valence:1068
        }}
];