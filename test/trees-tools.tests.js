
// ====================================================================
// Unit Testing file "fonctions.js" with Mocha and Chai
// ====================================================================

// Commandes utiles :
// mocha
// mocha -b -> s'arrete à la 1ère erreur rencontré
// mocha -g NomFonc -> test que pour la fonction désirée
// npm i mocha chai


import {expect} from 'chai';
import {SelectOneCity, VilleLaPlusProche, Delete} from '../fonctions.js';
import {citiesList} from "../cities.js";
import * as R from "ramda";

describe('fonctions.js', () => {
    describe('#NumberOfCities', () => {
        it('should return a number', () => {
            expect(R.length(SelectOneCity(citiesList)("paris"))).to.be.not.equal(Number.NaN);
        });
    });
    describe('#VilleLaPlusProche()', () => {
        it('should return distance (number)', () => {
            expect(VilleLaPlusProche(citiesList)('paris')).to.be.equal('lyon');
            expect(VilleLaPlusProche(citiesList)('bordeaux')).to.be.equal('lyon');
            expect(VilleLaPlusProche(citiesList)('lyon')).to.be.equal('valence');
        });
    });
    describe('#Delete()', () => {
        it('should delete the trip between 2 cities already made', () => {
            expect(Delete([
                {from: 'paris', to:'lyon', km:466},
                {from: 'paris', to:'marseille', km:773},
                {from: 'lyon', to:'marseille', km:315},
                {from: 'valence', to:'bordeaux', km:652}])('paris','marseille')
            ).to.be.deep.equal([
                {from: 'paris', to:'lyon', km:466},
                {from: 'valence', to:'bordeaux', km:652}]);
        });
    });

});