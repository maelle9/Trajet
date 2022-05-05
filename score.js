import * as R from "ramda";


const Score = cities => (city) => R.pipe(
    R.find(R.propEq('city', city)),
    R.path(['score'])
)(cities);


export{Score};