"use strict";
// Steg 1: Hjälten.
let heroName = "The Hero!";
let heroHP = 100;
let heroIsAlive = true;
console.log("Välkommen", heroName, "\nDu börjar med", heroHP, "hp.");
// Steg 2: Inventory.
let heroInventory = ["Svärd"];
// heroInventory.push("Svärd");
heroInventory.push("Sköld");
console.log("Du har", heroInventory, "i din ryggsäck.");
console.log("Du snubblar och tappar din", heroInventory.pop());
console.log("Din ryggsäck innehåller nu", heroInventory);
// Steg 3: Äventyret.
let enemies = ["Slempropp", "Varg", "Drake"];
let wolfBite = 20;
let dragonFire = 25;
for (let e of enemies) {
    console.log("I dina vandringar möter du en", e);
    //Steg 4: Stridssystemet
    if (e === "Slempropp") {
        console.log("Slemproppen löste du lätt upp.");
        console.log("Slemproppen lämnade ett guldmynt efter sig som du lägger i ryggsäcken");
        heroInventory.push("Guldmynt");
    }
    else if (e === "Varg") {
        console.log("Vargen biten dig för", wolfBite, "hp innan den fortsätter sin jakt");
        heroHP -= wolfBite;
        console.log("Du har nu", heroHP, "hp kvar");
    }
    else if (e === "Drake") {
        console.log("Över dig flyger en", e);
        heroHP -= dragonFire;
        if (heroHP > 50 && heroIsAlive && heroInventory.includes("Svärd")) {
            console.log("Du besegrade draken och vann spelet!");
        }
        else {
            heroIsAlive = false;
            console.log("Draken sprutade eld.\nGame Over");
        }
    }
    else {
        console.log("Du vandrar vidare");
    }
}
// Steg 5: Resultat.
if (heroIsAlive) {
    console.log("Grattis till vinsten.\nMed dig hem fick du:");
    console.log(heroInventory);
}
else {
    console.log("Please insert coin to try again...");
}
//# sourceMappingURL=index.js.map