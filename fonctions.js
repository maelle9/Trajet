import * as R from "ramda";
import * as C from "./cities.js";

// ====================================================================
//                  Fonctions de base
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
export const Delete = citiesList => (city_1, city_2) => R.pipe(
    R.reject (R.where ({from: R.includes (city_1), to: R.includes (city_2)})),
    R.reject (R.where ({from: R.includes (city_2), to: R.includes (city_1)}))
)(citiesList);


// ====================================================================
//      Détermine la ville suivante à ajouter dans l'arbre couvrant
// ====================================================================

export const ListBestOption = (items, newCitiesList) => {
    const copyItems = [];
    R.forEach((item) => {
        copyItems.push({from : item, to : VilleLaPlusProche(newCitiesList)(item), km : DistanceVilleLaPlusProche(newCitiesList)(item)});
    })(items);
    return copyItems
}
export const SelectBestOption = copyItems => () => R.pipe(
    R.sortBy(R.prop('km')),
    R.head(),
    R.path(['to']),
)(copyItems);

export const GetNameCityInArbreCouvrant = arbreCouvrant => () => R.pipe(
    R.pluck('city'),
)(arbreCouvrant);

// ====================================================================
//      Fonctions pour l'arbre couvrant
// ====================================================================

// Ajoute une nouvelle ville et son enfant dans l'arbre couvrant
export const AddNewCityInArbreCouvrant = arbreCouvrant => (city, nameChild) => R.pipe(
    R.append({city :city, child:[nameChild]})
)(arbreCouvrant);

