import * as R from "ramda";
import * as C from "./cities.js";

export const Score = cities => (city) => R.pipe(
    R.find(R.propEq('city', city)),
    R.path(['score'])
)(C.citiesList);

export const test = cities => (city) => R.pipe(
    R.findIndex(R.propEq('lyon', 2)), //=> 1
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

export const VilleLaPlusProche = (city) => {
    const items = ClassementVilleParDistance(city);
    const i = items.slice(items.length-1,items.length);
    return i[0][0]
}

export const VilleLaPlusProche_n2 = (city) => {
    const items = ClassementVilleParDistance(city);
    const i = items.slice(items.length-2,items.length-1);
    return i[0][0]
}

export const Supprimer_2 = (city, liste) => {
    return R.filter(c => c.city != city, liste)
}

export const Supprimer = cities => (city) => R.pipe(
    R.find(R.propEq('city', city)),
    R.path(['distance']),
    R.dropWhile('bordeaux')
)(C.citiesList);

