"use strict";
class LiczbaZespolona {
    constructor(re, im) {
        this.re = re;
        this.im = im;
    }
    get Re() {
        return this.re;
    }
    set Re(newRe) {
        this.Re = newRe;
    }
    get Im() {
        return this.Im;
    }
    set Im(newRe) {
        this.Im = newRe;
    }
    add(liczbaZespolona) {
        let re = this.re + liczbaZespolona.re;
        let im = this.im + liczbaZespolona.im;
        return new LiczbaZespolona(re, im);
    }
    subtrack(liczbaZespolona) {
        let re = this.re - liczbaZespolona.re;
        let im = this.re - liczbaZespolona.im;
        return new LiczbaZespolona(re, im);
    }
    modul() {
        let re = Math.pow(this.re, 2);
        let im = Math.pow(this.im, 2);
        let mod = Math.sqrt(re + im);
        console.log("modul: ", mod);
    }
    toString() {
        console.log("re: ", this.re, " im: ", this.im);
    }
}
let ob1 = new LiczbaZespolona(3, 4);
let ob2 = new LiczbaZespolona(4, 5);
let sum = ob1.add(ob2);
let odj = ob1.subtrack(ob2);
let mod = ob1.modul();
sum.toString();
odj.toString();
