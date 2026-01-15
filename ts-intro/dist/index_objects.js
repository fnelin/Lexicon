"use strict";
// Steg 1: Objekt
const guitar = {
    brand: "Fender",
    strings: 6,
    isNew: true,
    description() {
        const isNew = this.isNew ? "is" : "isn't";
        console.log(`This ${isNew} a new ${this.brand} guitar with ${guitar["strings"]} strings`);
    },
};
console.log(`Övning 1`);
guitar.description();
// Steg 2: Math & Date
const randomNumber = Math.floor(Math.random() * 100 + 1);
const yearToday = new Date();
console.log(`Övning 2`);
console.log(`Ett slumptal ${randomNumber} och i år är det ${yearToday.getFullYear()}`);
// Steg 4: Typkonvertering
const numbersWithText = `800c`;
const numbersAsText = `400`;
const anyAsText = `Text i any sträng`;
console.log(`Övning 4`);
console.log(`Numret som var tillsammans med texten ${parseInt(numbersWithText)}\nNumret som var en textsträng ${Number(numbersAsText)}\nLängden på textsträngen är ${anyAsText.length} tecken`);
// Steg 5: Slutuppgift
const produkt = {
    namn: "Kaffe",
    pris: "76kr",
    moms: "6%",
    kostnadExMoms() {
        return parseInt(this.pris);
    },
    momsBelopp() {
        return this.kostnadExMoms() * (parseInt(this.moms) / 100);
    },
    kostnadInkMoms() {
        return this.kostnadExMoms() + this.momsBelopp();
    },
};
console.log(`Övning 5`);
console.log(`Vara: ${produkt.namn}\nPris ex moms: ${produkt.pris}\nMoms: ${produkt.momsBelopp()}kr\nPris inkl moms ${produkt.kostnadInkMoms()}kr`);
//# sourceMappingURL=index_objects.js.map