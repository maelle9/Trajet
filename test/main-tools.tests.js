
// ====================================================================
// Unit Testing file "main.js" with Mocha and Chai
// ====================================================================


import {expect} from 'chai';
import {kilometer, SetParameter} from '../main.js';
import {citiesList} from "../cities.js";
import * as R from "ramda";

describe('main.js', () => {
    describe('#kilometer', () => {
        it('should return a number', () => {
            expect(kilometer([ 'marseille', 'valence', 'lyon', 'paris', 'bordeaux', 'brest' ])).to.be.not.equal(Number.NaN);
        });
        it('should return the distance of the final path', () => {
            expect(kilometer([ 'marseille', 'valence', 'lyon', 'paris', 'bordeaux', 'brest' ])).to.be.equal(3298);
            expect(kilometer([ 'marseille', 'valence', 'lyon' ])).to.be.equal(632);
        });
    });

});