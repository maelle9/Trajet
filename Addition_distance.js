import * as R from "ramda";
import * as Villes from "./Cities.js";

export const Distance = City => (from, to) => R.pipe(
    R.filter(R.propEq('from', from)),
    R.find(R.propEq('to', to)),
    R.path(['km']),
)(Villes.citiesList);

//1ere facon
const add = (a, b, c, d, e, f) =>   Distance(Villes.citiesList)(a, b) +
                                    Distance(Villes.citiesList)(b, c) +
                                    Distance(Villes.citiesList)(c, d) +
                                    Distance(Villes.citiesList)(d, e) +
                                    Distance(Villes.citiesList)(e, f);

console.log(add('paris', 'valence', 'lyon', 'marseille', 'brest', 'bordeaux'));

//2e facon
var liste = ['paris', 'valence', 'lyon', 'marseille', 'brest', 'bordeaux'];

const add2 = (list) =>   Distance(Villes.citiesList)(list[0], list[1]) +
                        Distance(Villes.citiesList)(list[1], list[2]) +
                        Distance(Villes.citiesList)(list[2], list[3]) +
                        Distance(Villes.citiesList)(list[3], list[4]) +
                        Distance(Villes.citiesList)(list[4], list[5]);

console.log(add2(liste));


//3e facon
var liste = R.aperture(2, ['paris', 'valence', 'lyon', 'marseille', 'brest', 'bordeaux']);

const add3 = (list) =>  Distance(Villes.citiesList)(list[0][0], list[0][1]) +
                        Distance(Villes.citiesList)(list[1][0], list[1][1]) +
                        Distance(Villes.citiesList)(list[2][0], list[2][1]) +
                        Distance(Villes.citiesList)(list[3][0], list[3][1]) +
                        Distance(Villes.citiesList)(list[4][0], list[4][1]);

console.log(add3(liste));