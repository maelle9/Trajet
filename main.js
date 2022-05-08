import * as R from "ramda";
import * as F from "./fonctions.js";
import * as C from "./cities.js";


const nomVilleDepart = 'paris'


// ----------- arbre couvrant construction ----------- // PAS FINI

console.log('--- Arbre couvrant ---');

const nombreDeVille = R.length(F.SelectOneCity(C.citiesList)('paris'));

const city_1 = nomVilleDepart;
const city_2 = F.VilleLaPlusProche(C.citiesList)(city_1,C.citiesList)

let arbreCouvrant = [];
let citiesList = C.citiesList;

arbreCouvrant = F.AddNewCityInArbreCouvrant(arbreCouvrant)(city_1);

arbreCouvrant = F.AddNewChildInArbreCouvrant(city_1, city_2, arbreCouvrant);

arbreCouvrant = F.AddNewCityInArbreCouvrant(arbreCouvrant)(city_2);

citiesList = F.Delete(citiesList)(city_1, city_2);

const ListNameCityInArbreCouvrant = F.GetNameCityInArbreCouvrant(arbreCouvrant)();
const nextCityToPutInTree = F.SelectBestOption(F.ListBestOption (ListNameCityInArbreCouvrant, citiesList))();

arbreCouvrant = F.AddNewCityInArbreCouvrant(arbreCouvrant)(nextCityToPutInTree);

console.log(F.AddNewChildInArbreCouvrant('lyon', nextCityToPutInTree, arbreCouvrant))
//console.log(newCitiesList)


/*
// ----------- Comment utiliser les fonctions créées -----------

console.log(F.Distance(C.citiesList)('paris','marseille'));

console.log(F.SelectOneCity(C.citiesList)('paris'));

console.log(F.VilleLaPlusProche(C.citiesList)('paris'));

console.log(F.Delete(C.citiesList)('paris','marseille'));

console.log(GetNameCityInArbreCouvrant(arbreCouvrant)());

//console.log(F.AddNewCityInArbreCouvrant(arbreCouvrant_initialisation)('paris','lyon'));
 */


// ----------- Brouillon -----------
/*
let v1, v2;
for (let i = 0 ; i < nombreDeVille -1 ; i++){

    //F.DisplayListDistanceMin(newCitiesList,arbreCouvrant, nomVilleDepart);
    v1 = test(F.DisplayListDistanceMin(newCitiesList,arbreCouvrant, nomVilleDepart));
    console.log(v1);
    v2 = F.VilleLaPlusProche(newCitiesList)(nomVilleDepart,newCitiesList);
    arbreCouvrant = F.AddNewCityInArbreCouvrant(arbreCouvrant)(v1,v2);

    newCitiesList = F.Delete(newCitiesList)(v1, v2);
}
console.log(arbreCouvrant)
*/
