import * as R from "ramda";

const prep = R.pipe(
    R.insert(0,'city'),
    R.insert(2,'kilometer'),
    R.splitAt(2),
    R.fromPairs
);

const findMin = R.pipe(
    R.toPairs,
    R.sortBy(R.prop(1)),
    R.take(2),
    R.map(prep)
);

const Next = cities => (from) => R.pipe(
    R.find(R.propEq('city', from)),
    R.path(['distance']),
    findMin
)(cities);

export{Next};