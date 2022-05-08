import * as R from "ramda";
import * as C from "./cities.js";

// ====================================================================
//              Fonctions de base
// ====================================================================

// Permet de trouver la distance en km entre 2 villes données
export const Distance = citiesList => (from, to) => R.pipe(
    R.filter(R.propEq('from', from)),
    R.find(R.propEq('to', to)),
    R.path(['km']),
)(citiesList);

// Selectionne toutes les possibilités de trajets pour 1 ville donnée
export const SelectOneCity = citiesList => (city) => R.pipe(
    R.filter(R.propEq('from', city))
)(citiesList);

// Selectionne la ville la plus proche de la ville choisi
export const VilleLaPlusProche = citiesList => (from) => R.pipe(
    R.filter(R.propEq('from', from)),
    R.sortBy(R.prop('km')),
    R.head(),
    R.path(['to']),
)(citiesList);

export const DistanceVilleLaPlusProche = citiesList => (from) => R.pipe(
    R.filter(R.propEq('from', from)),
    R.sortBy(R.prop('km')),
    R.head(),
    R.path(['km']),
)(citiesList);

// Supprime le trajet entre 2 villes de citiesList pour ne pas le refaire
// + supprime les villes ou on est déja passé
export const Delete = citiesList => (city_1, city_2) => R.pipe(
    R.reject (R.where ({from: R.includes (city_2),
                        to: R.includes (city_1)})),
    R.reject (R.where ({to: R.includes (city_2)}))
)(citiesList);

export const DeleteInit = citiesList => (cityDepart) => R.pipe(
    R.reject (R.where ({to: R.includes (cityDepart)})),
)(citiesList);

// ====================================================================
//      Détermine la ville suivante à ajouter dans l'arbre couvrant
// ====================================================================

export const ListBestOption = (items, newCitiesList) => {
    const copyItems = [];
    R.forEach((item) => {
        copyItems.push({from : item,
                        to : VilleLaPlusProche(newCitiesList)(item),
                        km : DistanceVilleLaPlusProche(newCitiesList)(item)});
    })(items);
    return copyItems
}
export const SelectBestOption_child = copyItems => () => R.pipe(
    R.sortBy(R.prop('km')),
    R.head(),
    R.path(['to']),
)(copyItems);
export const SelectBestOption_parent = copyItems => () => R.pipe(
    R.sortBy(R.prop('km')),
    R.head(),
    R.path(['from']),
)(copyItems);

export const GetNameCityInArbreCouvrant = arbreCouvrant => () => R.pipe(
    R.pluck('city'),
)(arbreCouvrant);

// ====================================================================
//              Fonctions pour construire l'arbre couvrant
// ====================================================================

export const AddNewCityInArbreCouvrant = arbreCouvrant => (cityParent) => R.pipe(
    R.append({city :cityParent, child:[]})
)(arbreCouvrant);

export const AddNewChildInArbreCouvrant = (cityParent, cityChild, arbreCouvrant) => {
    const index = R.pipe(
        R.findIndex(R.propEq('city', cityParent))
    )(arbreCouvrant);
    arbreCouvrant[index] = R.modify('child', R.append(cityChild), arbreCouvrant[index])
    return arbreCouvrant
}

// ====================================================================
//              Extraction chemin
// ====================================================================

export const arbreCouvrantTransformInPath = (arbre) => {
    const copyItems = [];
    R.forEach((item) => {
        copyItems.push(selectCity(item)());
    })(arbre);
    return copyItems
}
export const selectCity = item => () => R.pipe(
    R.path(['city']),
)(item);


//R.tap(x => console.log(x)), // Print et continue