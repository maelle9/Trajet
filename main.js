import * as R from "ramda";
import * as F from "./fonctions.js";
import * as C from "./cities.js";


const nomVilleDepart = 'paris'


// ----------- arbre couvrant construction ----------- // PAS FINI

const nombreDeVille = R.length(F.SelectOneCity(C.citiesList)('paris'));

//
let arbreCouvrant = [];
let citiesList = C.citiesList;

// Initialisation
let city_1 = nomVilleDepart;
let city_2 = F.VilleLaPlusProche(C.citiesList)(city_1,C.citiesList)

// Ligne 1 - init -------------------
arbreCouvrant = F.AddNewCityInArbreCouvrant(arbreCouvrant)(city_1);
arbreCouvrant = F.AddNewChildInArbreCouvrant(city_1, city_2, arbreCouvrant);

citiesList = F.Delete(citiesList)(city_1, city_2);

// Ligne 2 -------------------
city_1 = city_2;
let ListNameCityInArbreCouvrant = F.GetNameCityInArbreCouvrant(arbreCouvrant)();
let nextCityToPutInTree = F.SelectBestOption(F.ListBestOption (ListNameCityInArbreCouvrant, citiesList))();
city_2 = nextCityToPutInTree;

arbreCouvrant = F.AddNewCityInArbreCouvrant(arbreCouvrant)(city_1);
arbreCouvrant = F.AddNewChildInArbreCouvrant(city_1, city_2, arbreCouvrant);

citiesList = F.Delete(citiesList)(city_1, city_2);

// Ligne 3 -------------------
city_1 = city_2;
ListNameCityInArbreCouvrant = F.GetNameCityInArbreCouvrant(arbreCouvrant)();
nextCityToPutInTree = F.SelectBestOption(F.ListBestOption (ListNameCityInArbreCouvrant, citiesList))();
city_2 = nextCityToPutInTree;

arbreCouvrant = F.AddNewCityInArbreCouvrant(arbreCouvrant)(city_1);
arbreCouvrant = F.AddNewChildInArbreCouvrant(city_1, city_2, arbreCouvrant);

citiesList = F.Delete(citiesList)(city_1, city_2);


// Print -------------------
console.log(arbreCouvrant)


/*
// ----------- Comment utiliser les fonctions créées -----------

console.log(F.Distance(C.citiesList)('paris','marseille'));

console.log(F.SelectOneCity(C.citiesList)('paris'));

console.log(F.VilleLaPlusProche(C.citiesList)('paris'));

console.log(F.Delete(C.citiesList)('paris','marseille'));

console.log(GetNameCityInArbreCouvrant(arbreCouvrant)());

//console.log(F.AddNewCityInArbreCouvrant(arbreCouvrant_initialisation)('paris','lyon'));
 */
