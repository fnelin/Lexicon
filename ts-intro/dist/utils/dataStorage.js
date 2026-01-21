const SAVE_NAME = "Books";
export function saveToLocalStorage(inventoryBooks) {
    const jsonSaveString = JSON.stringify(inventoryBooks);
    localStorage.setItem(SAVE_NAME, jsonSaveString);
}
export function loadFromLocalStorage() {
    const storedBooks = localStorage.getItem(SAVE_NAME);
    if (storedBooks) {
        const parsedBooks = JSON.parse(storedBooks);
        return parsedBooks;
    }
    return [];
}
//# sourceMappingURL=dataStorage.js.map