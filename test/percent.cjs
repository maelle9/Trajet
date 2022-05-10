var Percentage = require('../lib/Percentage.cjs')
var assert = require('assert')

describe('Test percent', function () {
    describe('#evolution', function (){
        it('should give an evolution', function () {
            assert.equal(Percentage.evolution(100,200), 100)
            assert.equal(Percentage.evolution(100,150), 50)
            assert.equal(Percentage.evolution(100,50), -50)
        })
        it('should handle 0 évolution', function(){
            assert.equal(Percentage.evolution(0,100), Infinity)
        })
        it('should round value', function(){
            assert.equal(Percentage.evolution(30,100),233.33)
        })

    })
});

