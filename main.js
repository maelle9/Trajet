import * as R from "ramda";
import * as F from "./fonctions.js";
import * as C from "./cities.js";


export const Distance = cities => (from, to) => R.pipe(
    R.filter(R.propEq('from', from)),
    R.find(R.propEq('to', to)),
    R.path(['km']),
)(C.citiesList);

export const SelectOneCity = cities => (city) => R.pipe(
    R.filter(R.propEq('from', city))
)(C.citiesList);

export const SelectOneCity_FindMin = cities => (city) => R.pipe(
    R.filter(R.propEq('from', city)),
    R.sortBy(R.prop('km')),
    R.head()
)(C.citiesList);

export const Delete = cities => (from, to) => R.pipe(
    R.reject (R.where ({from: R.includes (from), to: R.includes (to)}))
)(C.citiesList);

console.log(Distance(C.citiesList)('paris','marseille'));

console.log(SelectOneCity(C.citiesList)('paris'));

console.log(SelectOneCity_FindMin(C.citiesList)('paris'));

console.log(Delete(C.citiesList)('paris','marseille'));





