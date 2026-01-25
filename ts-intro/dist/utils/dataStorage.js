//import { writeFileSync } from "fs";
const SAVE_NAME = "Books";
const JSON_FILE = "../data/books.json";
export function saveToLocalStorage(inventoryBooks) {
    const jsonSaveString = JSON.stringify(inventoryBooks);
    localStorage.setItem(SAVE_NAME, jsonSaveString);
}
export function saveToJsonFile(inventoryBooks) {
    const jsonSaveString = JSON.stringify(inventoryBooks);
    //  writeFile(JSON_FILE, jsonSaveString, "utf-8");
}
export function loadFromLocalStorage() {
    const storedBooks = localStorage.getItem(SAVE_NAME);
    if (storedBooks) {
        const parsedBooks = JSON.parse(storedBooks);
        return parsedBooks;
    }
    return [];
}
export async function loadFromJsonFile() {
    const storedBooks = await fetch(JSON_FILE);
    const parsedBooks = (await storedBooks.json());
    return parsedBooks;
}
//# sourceMappingURL=dataStorage.js.map