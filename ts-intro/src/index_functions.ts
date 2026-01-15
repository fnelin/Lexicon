// //1. Övning funktion named/arrow
// function calculateArea1(width: number, height: number): number {
//   return width * height;
// }

// const calculateArea2 = (w, h) => w * h;

// const area1 = calculateArea1(1, 10);
// const area2 = calculateArea2(2, 10);

// console.log(`Area1:${area1} Area2:${area2}`);

// //2. Övning funktion med parametersättning, inget, default och valfritt
// function greetUser(name: string, greeting: string = "Hej", isShouting?: boolean) {
//   const strGreeting: string = `${greeting} ${name}`;
//   return isShouting ? strGreeting.toUpperCase() : strGreeting;
// }

// console.log(greetUser("Fredrik", "Tjena"));

// //3. Övning type guards
// function countStrings(input: string | string[]): number {
//   return Array.isArray(input) ? input.length : 1;
// }
// console.log(countStrings("Äpple och Päron"));
// console.log(countStrings(["Äpple", "Päron"]));

// //4. Övning Objekt vs Primitiver
// const price = 100;
// const product = {
//   price: 100,
// };

// function applyDiscount(p: number, prod: product) {
//   p = 50;
//   prod.price = 50;
// }

// console.log(`Innan anropat applyDiscount\nPrice: ${price}, Product.price: ${product.price}`);
// applyDiscount(price, product);
// console.log(`Efter anropat applyDiscount\nPrice: ${price}, Product.price: ${product.price}`);
// //variablen Price ändras inte eftersom den inte skickas som referens vilket objektet gör.

// //5. Övning "Varukorgen"
// type vara = {
//   name: string;
//   pris: number;
// };

// const vara1: vara = {
//   name: "Kaffe",
//   pris: 125,
// };

// const vara2: vara = {
//   name: "Te",
//   pris: 50,
// };

// const varukorg: vara[] = [];

// const addProduct = (vk: vara[], v: vara) => {
//   vk.push(v);
// };

// function calculateTotalValue1(vk: vara[]) {
//   let total = 0;
//   for (let v of vk) {
//     total += v.pris;
//   }
//   return total;
// }

// //Google hittade reduce funktionen som "plattar" till arrayen och kan summera nummer direkt.
// //Borde kunna göras om till arrowfunction
// function calculateTotalValue2(vk: vara[]) {
//   return vk.reduce((total, vara) => total + vara.pris, 0);
// }

// console.log(`Värde Innan varor läggs till varukorgen: ${calculateTotalValue1(varukorg)}`);

// addProduct(varukorg, vara1);
// addProduct(varukorg, vara2);

// console.log(`Metod 1: ${calculateTotalValue1(varukorg)}\nMetod 2: ${calculateTotalValue2(varukorg)}`);
