import * as R from "ramda";
import * as F from "./fonctions.js";
import * as C from "./cities.js";

/*
console.log(F.Distance(C.citiesList)('paris','marseille'));

console.log(F.SelectOneCity(C.citiesList)('paris'));

console.log(F.VilleLaPlusProche(C.citiesList)('paris'));

console.log(F.Delete(C.citiesList)('paris','marseille'));

console.log(GetNameCityInArbreCouvrant(arbreCouvrant)());

//console.log(F.AddNewCityInArbreCouvrant(arbreCouvrant_initialisation)('paris','lyon'));
 */



// ----------- arbre couvrant construction ----------- // PAS FINI

console.log('--- Arbre couvrant ---');

const nombreDeVille = R.length(F.SelectOneCity(C.citiesList)('paris'));

const nomVilleDepart = 'paris'

//let arbreCouvrant = F.AddNewCityInArbreCouvrant([])(nomVilleDepart,F.VilleLaPlusProche(C.citiesList)(nomVilleDepart,C.citiesList));
let arbreCouvrant = [
    { city: 'paris', child: [ 'lyon' ] },
    { city: 'lyon', child: [] },];

//let newCitiesList = F.Delete(C.citiesList)(nomVilleDepart, F.VilleLaPlusProche(C.citiesList)(nomVilleDepart,C.citiesList));
let newCitiesList = F.Delete(C.citiesList)('paris', 'lyon');


const ListNameCityInArbreCouvrant = F.GetNameCityInArbreCouvrant(arbreCouvrant)();
console.log(ListNameCityInArbreCouvrant)


const nextCityToPutInTree = F.SelectBestOption(F.ListBestOption (ListNameCityInArbreCouvrant, newCitiesList))();

console.log(nextCityToPutInTree)




//console.log(arbreCouvrant)
//console.log(newCitiesList)

let v1, v2;


/*
const test = (list) =>
    R.pipe(
        R.sort(),
        R.head()
    );
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
