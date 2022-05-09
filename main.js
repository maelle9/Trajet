import * as R from "ramda";
import * as F from "./fonctions.js";
import * as C from "./cities.js";
import {arbreCouvrantTransformInPath} from "./fonctions.js";


const nomVilleDepart = 'marseille'


// ----------- arbre couvrant construction ----------- // PAS FINI

const nombreDeVille = R.length(F.SelectOneCity(C.citiesList)('paris'));

//
let arbreCouvrant = [];
let citiesList = C.citiesList;

// Initialisation
let city_1 = nomVilleDepart;
let city_2 = F.VilleLaPlusProche(C.citiesList)(city_1,C.citiesList)
let city_2_parent;

let ListNameCityInArbreCouvrant;


// Ligne 1 - init -------------------
arbreCouvrant = F.AddNewCityInArbreCouvrant(arbreCouvrant)(city_1);
arbreCouvrant = F.AddNewChildInArbreCouvrant(city_1, city_2, arbreCouvrant);

citiesList = F.Delete(citiesList)(city_1, city_2);
citiesList = F.DeleteInit(citiesList)(city_1);

// Boucle -------------------
for (let i = 0 ; i < nombreDeVille ; i++){
    city_1 = city_2;
    arbreCouvrant = F.AddNewCityInArbreCouvrant(arbreCouvrant)(city_1);

    ListNameCityInArbreCouvrant = F.GetNameCityInArbreCouvrant(arbreCouvrant)();
    city_2 = F.SelectBestOption_child(F.ListBestOption (ListNameCityInArbreCouvrant, citiesList))();
    city_2_parent = F.SelectBestOption_parent(F.ListBestOption (ListNameCityInArbreCouvrant, citiesList))();

    arbreCouvrant = F.AddNewChildInArbreCouvrant(city_2_parent, city_2, arbreCouvrant);

    citiesList = F.Delete(citiesList)(city_1, city_2);
}

// Print -------------------

const pathCities = F.arbreCouvrantTransformInPath(arbreCouvrant);

const distance = R.pipe(
    R.aperture(2),
    R.map(F.Distance(C.citiesList)),
    R.sum
);

const kilometer = R.converge(R.add,[R.pipe(R.remove(1,4),F.Distance(C.citiesList)),distance]);

const bestItinerary = F.arbreCouvrantTransformInPath(arbreCouvrant);
const Sumkilometer = kilometer(pathCities);

console.log(bestItinerary);
console.log(Sumkilometer);

/*
// ----------- Comment utiliser les fonctions créées -----------

console.log(F.Distance(C.citiesList)('paris','marseille'));

console.log(F.SelectOneCity(C.citiesList)('paris'));

console.log(F.VilleLaPlusProche(C.citiesList)('paris'));

console.log(F.Delete(C.citiesList)('paris','marseille'));

console.log(GetNameCityInArbreCouvrant(arbreCouvrant)());

//console.log(F.AddNewCityInArbreCouvrant(arbreCouvrant_initialisation)('paris','lyon'));
 */
