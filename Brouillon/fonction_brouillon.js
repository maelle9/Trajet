import * as R from "ramda";
import * as C from "../cities.js";

export const Distance = cities => (from, to) => R.pipe(
    R.find(R.propEq('city', from)),
    R.path(['distance']),
    R.find(R.propEq('nom', to)),
    R.path(['km']),
)(C.citiesList);

export const SortByDistance = cities => (from, to) => R.pipe(
    R.find(R.propEq('city', from)),
    R.path(['distance']),
    R.find(R.propEq('nom', to)),
    R.path(['km']),
)(C.citiesList);

/*
export const Distance = cities => (from, to) => R.pipe(
    R.find(R.propEq('city', from)),
    R.path(['distance', to])
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



export const DistanceVilleLaPlusProche = cities => (city) => R.pipe(
    R.find(R.propEq('city', city)),
    R.path(['distance']),
    R.values(),
    R.sort(function(a, b) { return a - b; }),
    R.head,
)(C.citiesList);


export const Supprimer = (city_1, city_2, liste) => {
    C.citiesList[FindIndexCity(liste)(city_1)] = R.over(R.lensProp('distance'), R.omit([city_2]), C.citiesList[FindIndexCity(liste)(city_1)]);// 0 = paris
    C.citiesList[FindIndexCity(liste)(city_2)] = R.over(R.lensProp('distance'), R.omit([city_1]), C.citiesList[FindIndexCity(liste)(city_2)]); // 1 = lyon
    return C.citiesList
}

export const FindIndexCity = cities => (city) => R.pipe(
    R.findIndex(R.propEq('city', city))
)(C.citiesList);



const sortListBy = (temporaryProp) =>
    R.pipe(
        R.map(temporaryProp),
        R.sortBy(R.prop(temporaryProp)),
        R.map(R.dissoc(temporaryProp))
    );


// ------------- fonction arbre couvrant ------------

export const findAllCity = (arbreCouvrant) => {
    const printCity = (value) => console.log(R.path(['city'],value));
    R.forEach(printCity, arbreCouvrant);
}

// --------------------------- Brouillon ---------------------------


const findMin = R.pipe(
    R.toPairs,
    R.sortBy(R.prop(1)),
    R.take(2),
    R.map(prep)
);

const Next = cities => (from) => R.pipe(
    R.find(R.propEq('city', from)),
    R.path(['distance']),
    findMin
)(cities);
*/
/*


export const VilleLaPlusProche_n2 = (city) => {
    const items = ClassementVilleParDistance(city);
    const i = items.slice(items.length-2,items.length-1);
    return i[0][0]
}

export const Supprimer_2 = (city, liste) => {
    return R.filter(c => c.city != city, liste)
}
export const Score = cities => (city) => R.pipe(
    R.find(R.propEq('city', city)),
    R.path(['score'])
)(C.citiesList);

export const ScoreMin = R.pipe(
    R.sortBy(R.prop('score')),
    R.head,
    R.applySpec({
        city: R.path(['city']),
        score: R.path(['score']),
    })
);
*/
