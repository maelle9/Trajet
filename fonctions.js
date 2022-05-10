import * as R from "ramda";
import * as C from "./cities.js";

// ====================================================================
//              Fonctions de base
// ====================================================================

// Permet de trouver la distance en km entre 2 villes données
export const Distance = citiesList => (dist) => R.pipe(
    R.filter(R.propEq('from',dist[0])),
    R.find(R.propEq('to',dist[1])),
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
    R.path(['to'])
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
const transform = (newCitiesList) => R.pipe(
    R.juxt([R.identity,VilleLaPlusProche(newCitiesList),DistanceVilleLaPlusProche(newCitiesList)]),
    R.zipObj(["from","to","km"])
);

export const ListBestOption = (newCitiesList,items) => R.pipe(
    R.map(transform(newCitiesList),items)
);

export const SelectBestOption_child = R.pipe(
    R.sortBy(R.prop('km')),
    R.head(),
    R.path(['to']),
);
export const SelectBestOption_parent = R.pipe(
    R.sortBy(R.prop('km')),
    R.head(),
    R.path(['from']),
);

export const GetNameCityInArbreCouvrant = arbre => R.pipe(
    R.pluck('city'),
)(arbre);

// ====================================================================
//              Fonctions pour construire l'arbre couvrant
// ====================================================================

export const AddNewCityInArbreCouvrant = arbreCouvrant => (cityParent) => R.pipe(
    R.append({city :cityParent, child:[]})
)(arbreCouvrant);


export const AddNewChildInArbreCouvrant =  arbreCouvrant => (cityParent, cityChild) => R.pipe(
    R.tap(console.log),
    R.find(R.propEq('city', cityParent)),
    R.modify('child', R.append(cityChild))
)(arbreCouvrant);




// ====================================================================
//              Extraction chemin
// ====================================================================

export const arbreCouvrantTransformInPath = (arbre) => {
    const copyItems = [];
    R.forEach((item) => {
        copyItems.push(selectCity(item));
    })(arbre);
    return copyItems
}
export const selectCity = item => R.pipe(
    R.path(['city']),
)(item);


//R.tap(x => console.log(x)), // Print et continue