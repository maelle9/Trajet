import * as R from "ramda";
import * as C from "./cities.js";

// Permet de trouver la distance en km entre 2 villes données
export const Distance = cities => (from, to) => R.pipe(
    R.filter(R.propEq('from', from)),
    R.find(R.propEq('to', to)),
    R.path(['km']),
)(C.citiesList);

// Selectionne tous les possibilités de trajets pour 1 ville donnée
export const SelectOneCity = cities => (city) => R.pipe(
    R.filter(R.propEq('from', city))
)(C.citiesList);

// Selectionne la ville la plus proche
export const VilleLaPlusProche = cities => (from) => R.pipe(
    R.filter(R.propEq('from', from)),
    R.sortBy(R.prop('km')),
    R.head(),
    R.path(['to']),
)(C.citiesList);

export const Delete = cities => (city_1, city_2) => R.pipe(
    R.reject (R.where ({from: R.includes (city_1), to: R.includes (city_2)})),
    R.reject (R.where ({from: R.includes (city_2), to: R.includes (city_1)}))
)(C.citiesList);