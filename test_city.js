import * as R from "ramda";

export { AllCitiesName, Loop, findLong, findLat, AddNewCity, DistanceBetweenTwoCities, citiesList};

const citiesList = [
    {
        city: "paris",
        lat: 48.85877,
        long: 2.2069522,
    },
    {
        city: "lyon",
        lat: 45.7580491,
        long: 4.7650899,
    },
    {
        city: "marseille",
        lat: 43.2805098,
        long: 5.240563,
    },
    {
        city: "bordeaux",
        lat: 44.8638181,
        long: -0.6560523,
    },
    {
        city: "valence",
        lat: 44.9235184,
        long: 4.8463448,
    },
    {
        city: "brest",
        lat: 48.4085349,
        long: -4.5696253,
    },
    {
        city: "strasbourg",
        lat: 48.584614,
        long: 7.7507127,
    },
    {
        city: "limoges",
        lat: 43.4312127,
        long: 1.7695804,
    },
    {
        city: "clermont-ferrand",
        lat: 45.7774551,
        long: 3.0819427,
    },
    {
        city: "toulouse",
        lat: 43.6044622,
        long: 1.4442469,
    },
    {
        city: "lille",
        lat: 50.6365654,
        long: 3.0635282,
    },
    {
        city: "nantes",
        lat: 47.2186371,
        long: -1.5541362,
    },
    {
        city: "orléan",
        lat: 47.9027336,
        long: 1.9086066,
    },
    {
        city: "nice",
        lat: 43.7009358,
        long: 7.2683912,
    },
    {
        city: "amiens",
        lat: 49.8941708,
        long: 2.2956951,
    },
    {
        city: "dijon",
        lat: 47.3215806,
        long: 5.0414701,
    },
    {
        city: "rennes",
        lat: 48.1113387,
        long: -1.6800198,
    },
    {
        city: "grenoble",
        lat: 45.1875602,
        long: 5.7357819,
    },
    {
        city: "rouen",
        lat: 49.4404591,
        long: 1.0939658,
    },
    {
        city: "poitier",
        lat: 44.6545981,
        long: -0.0467273,
    },
    ]

const findLat = citiesList => (city) => R.pipe(
    R.filter(R.propEq('city', city)),
    R.head(),
    R.path(['lat'])
)(citiesList);

const findLong = citiesList => (city) => R.pipe(
    R.filter(R.propEq('city', city)),
    R.head(),
    R.path(['long'])
)(citiesList);

//R.juxt([R.path(['lat']),R.path(['long'])])


const distHaversine = (lat1,lon1,lat2,lon2) => { // haversine's formule
    const R = 6371e3; // earth’s radius in metres
    const phi_1 = lat1 * Math.PI/180; // phi, lamba in radians
    const phi_2 = lat2 * Math.PI/180;
    const delta_phi = (lat2-lat1) * Math.PI/180;
    const delta_l = (lon2-lon1) * Math.PI/180;

    const a = Math.sin(delta_phi/2) * Math.sin(delta_phi/2) +
            Math.cos(phi_1) * Math.cos(phi_2) *
            Math.sin(delta_l/2) * Math.sin(delta_l/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    const distance = R * c; // in metres
    return distance/1000; // in km
}

const DistanceBetweenTwoCities = (city_1, city_2) =>
    distHaversine(
        findLat(citiesList)(city_1),
        findLong(citiesList)(city_1),
        findLat(citiesList)(city_2),
        findLong(citiesList)(city_2));

const AllCitiesName = R.pipe(R.pluck('city'))(citiesList);


const AddNewCity = list => (cityFrom, cityTo, km, lat, long) => R.pipe(
    R.append({from :cityFrom, to:cityTo , km:km, lat:lat, long:long})
)(list);

const DeleteCityInAllCitiesName = AllCitiesName => (city) => R.pipe(
    R.reject(n => n == city)
)(AllCitiesName);

const AllCitiesNameFirst = AllCitiesName;

const Loop = (AllCitiesName, list) => {
    if (R.gt((R.length(AllCitiesNameFirst)-1)*R.length(AllCitiesNameFirst), R.length(list)) == true) {
        const cityFrom = R.head(AllCitiesName);
        const AllCitiesNameExcept = R.filter(n => n != cityFrom, AllCitiesNameFirst);
        const cityTo = AllCitiesNameExcept[R.length(list) % (R.length(AllCitiesNameFirst)-1)];
        if (R.equals(R.length(list) % (R.length(AllCitiesNameFirst)-1), (R.length(AllCitiesNameFirst)-2)) == true) {
                return Loop(
                    DeleteCityInAllCitiesName(AllCitiesName)(cityFrom, list),
                    AddNewCity(list)(
                        cityFrom,
                        cityTo,
                        DistanceBetweenTwoCities(cityFrom, cityTo),
                        findLat(citiesList)(cityFrom),
                        findLong(citiesList)(cityFrom)
                    ),
                );
            }
            else {
                return Loop(
                    AllCitiesName,
                    AddNewCity(list)(
                        cityFrom,
                        cityTo,
                        DistanceBetweenTwoCities(cityFrom, cityTo),
                        findLat(citiesList)(cityFrom),
                        findLong(citiesList)(cityFrom)
                    ),
                );
            }
        }

    return list;
};
//console.log(Loop(AllCitiesName, []));


