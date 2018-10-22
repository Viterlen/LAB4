"use strict";
var LiczbaZespolona = /** @class */ (function () {
    function LiczbaZespolona(re, im) {
        this.re = re;
        this.im = im;
    }
    Object.defineProperty(LiczbaZespolona.prototype, "Re", {
        get: function () {
            return this.re;
        },
        set: function (newRe) {
            this.Re = newRe;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LiczbaZespolona.prototype, "Im", {
        get: function () {
            return this.Im;
        },
        set: function (newRe) {
            this.Im = newRe;
        },
        enumerable: true,
        configurable: true
    });
    LiczbaZespolona.prototype.add = function (liczbaZespolona) {
        var re = this.re + liczbaZespolona.re;
        var im = this.im + liczbaZespolona.im;
        return new LiczbaZespolona(re, im);
    };
    LiczbaZespolona.prototype.subtrack = function (liczbaZespolona) {
        var re = this.re - liczbaZespolona.re;
        var im = this.re - liczbaZespolona.im;
        return new LiczbaZespolona(re, im);
    };
    LiczbaZespolona.prototype.modul = function () {
        var re = Math.pow(this.re, 2);
        var im = Math.pow(this.im, 2);
        var mod = Math.sqrt(re + im);
        console.log("modul: ", mod);
    };
    LiczbaZespolona.prototype.toString = function () {
        console.log("re: ", this.re, " im: ", this.im);
    };
    return LiczbaZespolona;
}());
var ob1 = new LiczbaZespolona(3, 4);
var ob2 = new LiczbaZespolona(4, 5);
var sum = ob1.add(ob2);
var odj = ob1.subtrack(ob2);
var mod = ob1.modul();
sum.toString();
odj.toString();
