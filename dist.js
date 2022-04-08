import * as R from "ramda";

const Score = R.pipe(
    R.pluck('score'),
    R.sum
);


const dist_ = (indice) => R.pipe(
    R.pluck('distance'),
    R.pluck(indice),
    R.map(R.nth,R.add(indice,1))
);

const assocCityDist_ = R.pipe(
    R.findIndex(R.__),
    R.map(dist_)
);


const assocSumDist = R.pipe(
    R.pluck('city'),
    R.map(assocCityDist_)
);

export{assocSumDist, Score};