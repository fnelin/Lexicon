import { inventoryBooks } from "./services/mockData.js";
import { saveToLocalStorage } from "./utils/dataStorage.js";
import { loadFromLocalStorage } from "./utils/dataStorage.js";
import { validateInput } from "./utils/utils.js";
import { renderBooks } from "./components/renderPage.js";
import { createBook } from "./utils/createBook.js";
//#endregion
//#region ------------------------------ Deklarationer av globala konstanter --------------------------*/
const bookListContainer = document.querySelector("#bookListContainer");
const dialog = document.querySelector("#add-book-dialog");
const btnOpenDialog = document.querySelector("#open-modal-btn");
const btnCloseDialog = document.querySelector("#close-modal-btn");
const btnSave = document.querySelector("#saveLocalStorage");
const btnLoad = document.querySelector("#loadLocalStorage");
const addForm = document.querySelector("#frmAddBook");
//#endregion
//#region ------------------------------ Eventlyssnare ------------------------------------------------*/
bookListContainer?.addEventListener("click", (e) => {
    const target = e.target;
    const card = target.closest(".bookCard");
    if (!card)
        return;
    const admin = card.querySelector(".adminActions");
    const currentActive = document.querySelector(".bookCard.active");
    const currentAdmin = currentActive?.querySelector(".adminActions");
    const hasActive = card.classList.contains("active");
    if (target.classList.contains("removeAction")) {
        const removeID = Number(card.dataset.id);
        const removeIndex = inventoryBooks.findIndex((b) => b.id === removeID);
        inventoryBooks.splice(removeIndex, 1);
        renderBooks(inventoryBooks, bookListContainer);
        return;
    }
    currentActive?.classList.remove("active");
    currentAdmin?.classList.add("hidden");
    if (!hasActive) {
        card.classList.add("active");
        admin.classList.remove("hidden");
    }
});
btnSave.addEventListener("click", () => {
    saveToLocalStorage(inventoryBooks);
});
btnLoad.addEventListener("click", () => {
    const loadArray = loadFromLocalStorage();
    if (loadArray.length > 0) {
        inventoryBooks.length = 0;
        inventoryBooks.push(...loadArray);
    }
    renderBooks(inventoryBooks, bookListContainer);
});
btnOpenDialog.addEventListener("click", () => {
    dialog.showModal();
});
btnCloseDialog.addEventListener("click", () => {
    addForm.reset();
    dialog.close();
});
addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateInput()) {
        return;
    }
    const newBook = createBook(inventoryBooks);
    inventoryBooks.push(newBook);
    renderBooks(inventoryBooks, bookListContainer);
    addForm.reset();
    dialog.close();
});
//#endregion
//#region ------------------------------ Rendering ----------------------------------------------------*/
renderBooks(inventoryBooks, bookListContainer);
//#endregion
//# sourceMappingURL=main.js.map