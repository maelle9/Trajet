import * as R from "ramda";


const Distance = cities => (from, to) => R.pipe(
    R.find(R.propEq('city', from)),
    R.path(['distance', to])
)(cities);


const findDistance = Distance(citiesList);


export{findDistance};