import * as R from "ramda";
import * as C from "./cities.js";

export const Score = cities => (city) => R.pipe(
    R.find(R.propEq('city', city)),
    R.path(['score'])
)(C.citiesList);


export const Distance = cities => (from, to) => R.pipe(
    R.find(R.propEq('city', from)),
    R.path(['distance', to])
)(C.citiesList);


export const ScoreMin = R.pipe(
    R.sortBy(R.prop('score')),
    R.head,
    R.applySpec({
        city: R.path(['city']),
        score: R.path(['score']),
    })
);

export const DistanceVilleLaPlusProche = cities => (city) => R.pipe(
    R.find(R.propEq('city', city)),
    R.path(['distance']),
    R.values(),
    R.sort(function(a, b) { return a - b; }),
    R.head,
)(C.citiesList);
