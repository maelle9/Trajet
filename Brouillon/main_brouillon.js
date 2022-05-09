


//console.log(JSON.stringify(C.citiesList));
//console.log(F.Distance(C.citiesList)('paris','marseille'));

/*export const toto = cities => (from) => R.pipe(
    R.lensProp('city')
)(C.citiesList);
console.log(JSON.stringify(toto(C.citiesList)));

console.log(JSON.stringify(R.paths('city', C.citiesList)));*/

/*export const Distance2 = cities => (from) => R.pipe(
    R.find(R.propEq('city', from))
)(C.citiesList);

console.log(JSON.stringify(Distance2(C.citiesList)('paris')));
console.log(JSON.stringify(R.find(R.propEq('city', 'paris'))));
console.log(JSON.stringify(R.path('city', C.citiesList)));
console.log(JSON.stringify(R.path(['city'], C.citiesList)));*/
//R.find(R.propEq('city', from)),
//R.sortBy(dist, 'km');
//console.log(JSON.stringify(C.citiesList));

//const blabla =x =>  R.sortBy(R.prop('distance.km'));
//console.log(JSON.stringify(R.map(blabla, C.citiesList)))
//console.log(JSON.stringify(R.sortBy(R.prop('distance.km'), C.citiesList.distance)));
//const dist = C.citiesList.distance
//const tri => R.sortBy(R.prop('km'))
//console.log(JSON.stringify(R.map(tri, C.citiesList.distance)));
//console.log(JSON.stringify( R.over(R.lensProp('distance'), R.any, C.citiesList) ));
//console.log(JSON.stringify( R.over(R.lensProp('distance.km'), sort, C.citiesList) ));
//const sortByNameCaseInsensitive = R.sortBy(R.compose(R.toUpper, R.prop('city')));
//console.log(JSON.stringify(sortByNameCaseInsensitive(C.citiesList)))
/*
const remap = R.curry((desc, obj) => R.map(path => R.view(R.lensPath(path), obj), desc));

const myExtract = remap({
    city: ['_city'],
    distance: ['_source', 'distance']
});

console.log(JSON.stringify( myExtract(C.citiesList) ));

 */

//console.log(JSON.stringify(R.sortBy( R.over(R.lensProp('distance'), R.any, C.citiesList) , 'km')));

/*const tri = cities => (from) => R.pipe(
    R.find(R.propEq('city', from)),
    R.path(['distance']),
    R.sortBy(R.path(['km'])),
)(C.citiesList);*/
//C.citiesList[0] = R.sortBy(R.path(['distance','km']), C.citiesList[0]);// 0 = paris

//C.citiesList[0] = tri(C.citiesList)('paris');
//console.log(JSON.stringify(C.citiesList));

/*
// ----------- chrono -----------
var d = new Date();
var oldTime = d.getTime();
// METTRE LE CODE A CHORNOMETRER ICI
var actualTime = d.getTime();
console.log(oldTime - actualTime);


// ----------- methode -----------

//console.log(F.Score(C.citiesList)('paris'));

console.log(F.Distance(C.citiesList)('paris','marseille'));

//console.log(F.ScoreMin(C.citiesList));

console.log(F.DistanceVilleLaPlusProche(C.citiesList)('paris'));

//console.log(F.ClassementVilleParDistance('paris'));
//console.log(F.VilleLaPlusProche('paris'));



// ----------- arbre couvrant test -----------

console.log('--- Arbre couvrant ---'); // PAS FINI

const nomVilleDepart = 'paris'

const arbreCouvrant = [{city:nomVilleDepart, child:[F.VilleLaPlusProche(nomVilleDepart)]},
                        {city:F.VilleLaPlusProche(nomVilleDepart), child:[]}];

console.log(F.Supprimer(nomVilleDepart, F.VilleLaPlusProche(nomVilleDepart), C.citiesList));
console.log(arbreCouvrant)

//console.log(R.omit(['lyon', 'valence'], F.s(C.citiesList)('paris')));
console.log(F.findAllCity(arbreCouvrant));



const sortBigRoomsByArea = R.pipe (
    R.filter (({distance}) => R.length(distance) > 4 ),
    R.sortWith ([
        R.ascend ( R.prop ('city') ),
        R.descend (R.prop ('score') )
    ])
)

const rooms= [
    {city: 'paris', score: 2000, distance:{
            lyon:466,
            valence:563,
            brest:591
        }},
    {city: 'lyon', score: 1000, distance:{
            paris:466,
            marseille:315,
            bordeaux:556,
            valence:103,
            brest:971
        }}]

console .log (
    sortBigRoomsByArea (rooms)
)
*/
