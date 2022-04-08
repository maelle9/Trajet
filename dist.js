import * as R from "ramda";

let Distance = [
    [0, 466, 773, 583, 563, 591],
    [466, 0, 315, 556, 103, 971],
    [773, 315, 0, 645, 214, 1280],
    [583, 556, 645, 0, 652, 652],
    [563, 103, 214, 652, 0, 1068],
    [591, 971, 1280, 652, 1068, 0]
];
const dist_ = (indice) =>(
    Distance[indice][R.add(indice,1)]
);

const assocCityDist = R.map(dist_,R.findIndex("Paris"));

const sumDist_ = R.pipe(
    R.map(Number),
    R.sum
);

const Score = R.pipe(
    R.pluck('score'),
    R.sum
);

//const assocSumDist = R.pipe(
    //R.pluck('city'),
    //assocCityDist_
//);

export{assocCityDist, Score};