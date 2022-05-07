import * as R from "ramda";
import * as F from "../fonctions.js";

const Arbre = [
    {'0':{city: 'paris', score: 0, kilometer:0, child:[1,2]}},
    {'1':{city: 'lyon', score: 1000, kilometer:466, child:[3,4]}},
    {'2':{city: 'valence', score: 500, kilometer:563, child:[5,6]}},
    {'3':{city: 'valence', score: 1500, kilometer:569, child:[7,8]}},
    {'4':{city: 'marseille', score: 1600, kilometer:781, child:[9,10]}},
];


export const DistanceVilleLaPlusProche = cities => (city) => R.pipe(
    R.find(R.propEq('city', city)),
    R.path(['distance']),
    R.values(),
    R.sort(function(a, b) { return a - b; }),
    R.head,
)(Arbre);

console.log(F.DistanceVilleLaPlusProche(Arbre)('paris'));

console.log(R.assocPath(['0', 'score'], 42, {'0': {score: 0, kilo:23}})); //=> { '0': { score: 42, kilo: 23 } }

console.log(R.path(['0', 'city'], {'0':{city: 'paris', score: 0, kilometer:0, child:[1,2]}}));


console.log(Object.keys(Arbre))

console.log(Object.values(Arbre))