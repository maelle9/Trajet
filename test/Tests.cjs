
// dans package.json mettre Commonjs a la place de module ("type": "Commonjs",)

// Commandes utiles :
// mocha
// mocha -b -> s'arrete à la 1ère erreur rencontré
// mocha -g NomFonc -> test que pour la fonction désirée

var assert = require('assert');

describe('Test test', function () {
    it('should do something', function () {
        var a = 3;
        assert.equal(a * 2, 6, 'La multiplication n a pas fonctionné')
    })
});

