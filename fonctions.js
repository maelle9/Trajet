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


export const ClassementVilleParDistance = (city) => {
    const dict = R.pipe(
        R.find(R.propEq('city', city)),
        R.path(['distance']),
    )(C.citiesList);
    var items = Object.keys(dict).map(function(key) {
        return [key, dict[key]];
    });
    items.sort(function(first, second) {
        return second[1] - first[1];
    });
    return items
}


