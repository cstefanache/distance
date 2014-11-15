var distance = require('../..');

var v1 = [0.2, 0.4, 0.3, 0.1];
var v2 = [0.3, 0.2, 0.3, 0.2];

describe('Motyka distance', function () {

    it('should return 0.5 with itself', function () {
        distance.motyka(v1, v1).should.equal(0.5);
    });

    it('should be correct', function () {
        distance.motyka(v1, v2).should.equal(0.6000000000000001);
        distance.motyka(v1, v2).should.equal(1 - (distance.sorensen(v1, v2) / 2));
        distance.motyka(v1, v2).should.equal(1 - (distance.czekanowski(v1, v2) / 2));
    });

});
