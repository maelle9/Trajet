
import * as R from "ramda";
import {
    citiesList,
    findLat,
    findLong
} from "../build_city_list.js";

import {
    pathCities
} from "../main.js";

const add = list => (x) => R.pipe(
    R.append(x)
)(list);

const LoopLat = (listLat) => {
    if (R.equals(R.length(listLat), R.length(pathCities)) == false) {
        const city = pathCities[R.length(listLat)];
        return LoopLat(
            add(listLat)(findLat(citiesList)(city)),
        );
    }
    return listLat;
};
const LoopLong = (listLong) => {
    if (R.equals(R.length(listLong), R.length(pathCities)) == false) {
        const city = pathCities[R.length(listLong)];
        return LoopLong(
            add(listLong)(findLong(citiesList)(city)),
        );
    }
    return listLong;
};

export const name = pathCities;
export const lat = LoopLat ([]);
export const long = LoopLong ([]);

console.log(name);
console.log(lat);
console.log(long);