// ====================================================================
// Unit Testing file "city.js" et "test_city.js" with Mocha and Chai
// ====================================================================


import { expect } from "chai";
import { AddNewCity, findLat,findLong, DistanceBetweenTwoCities, citiesList} from "../test_city.js";
import * as R from "ramda";
import {Delete} from "../fonctions.js";

describe("city.js", () => {
    describe("#DistanceBetweenTwoCities", () => {
        it("should return a number", () => {
            expect(DistanceBetweenTwoCities('paris', 'marseille')).to.be.not.equal(
                Number.NaN
            );
        });
    });
    describe("#AllCitiesName", () => {
        it("should return add 2 cities in the list with distance", () => {
            expect(
                AddNewCity([])(
                    'brest',
                    'valence',
                    DistanceBetweenTwoCities('brest', 'valence'),
                    findLat(citiesList)('brest'),
                    findLong(citiesList)('brest')
                ),
            ).to.be.deep.equal([  {
                from: 'brest',
                to: 'valence',
                km: 815.5447875711491,
                lat: 48.4085349,
                long: -4.5696253
            },
            ]);
        });
    });
});
