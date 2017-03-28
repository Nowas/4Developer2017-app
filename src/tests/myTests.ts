import { SimpleCalculator } from "../services/impl/SimpleCalculatro";

var assert = require("assert");


describe('Testy 4Dev', function () {
    it('Dodawanie', function (done) {
        let calc = new SimpleCalculator();
        assert.equal(calc.Add(2,3), 5,'Can add 2 and 3')
        done();
    });

    it('Division', function (done) {
        let calc = new SimpleCalculator();
        assert.equal(calc.Divide(4,2), 2,'Can divide 4 by 2')
        done();
    });

    it('Division by 0', function (done) {
        let calc = new SimpleCalculator();
        assert.throws(() => {calc.Divide(4,0)}, Error, "You can't divide by 0")
        done();
    });

});