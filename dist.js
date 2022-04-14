import * as R from "ramda";

const Score = cities => (city) => R.pipe(
    R.find(R.propEq('city', city)),
    R.path('score')
)(cities);

const Distance = cities => (from, to) => R.pipe(
    R.find(R.propEq('city', from)),
    R.path(['distance', to])
)(cities);

const Next = cities => (city) => R.pipe(
    R.find(R.propEq('city', city))
)(cities);

//const findDistance = Distance(citiesList);
//const findScore = Score(citiesList);
//const findNext = Next(citiesList);

const traj = R.pipe(
    Score

);

export{traj, Score};