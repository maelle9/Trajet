import * as R from "ramda";

const findMin = R.pipe(
    R.values,
    R.tap(console.log),
    R.findIndex(R.min),
    R.tap(console.log)
);

const Next = cities => (from) => R.pipe(
    R.find(R.propEq('city', from)),
    R.tap(console.log),
    R.path(['distance']),
    R.tap(console.log),
    R.converge(R.prop,[findMin, R.keys]),
    R.tap(console.log),
)(cities);

const findNext = Next(citiesList);

export{findNext};