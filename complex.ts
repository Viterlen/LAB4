class LiczbaZespolona {

    private re: number;
    private im: number;

    constructor(re: number, im: number) {
        this.re = re;
        this.im = im;

    }

    get Re(): number {
        return this.re;
    }

    set Re(newRe: number) {
        this.Re = newRe;
    }

    get Im(): number {
        return this.Im;
    }

    set Im(newRe: number) {
        this.Im = newRe;
    }

    add(liczbaZespolona: LiczbaZespolona) {

        let re = this.re + liczbaZespolona.re;
        let im = this.im + liczbaZespolona.im;

        return new LiczbaZespolona(re, im);
    }

    subtrack(liczbaZespolona: LiczbaZespolona) {
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
let mod = ob1.modul()

sum.toString();
odj.toString();

