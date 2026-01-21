const SAVE_NAME = "Books";
import { Book } from "../models/book.js";
import { Author } from "../models/book.js";

export function saveToLocalStorage(inventoryBooks: Book[]) {
  const jsonSaveString = JSON.stringify(inventoryBooks);
  localStorage.setItem(SAVE_NAME, jsonSaveString);
}

export function loadFromLocalStorage() {
  const storedBooks = localStorage.getItem(SAVE_NAME);
  if (storedBooks) {
    const parsedBooks = JSON.parse(storedBooks) as Book[];
    return parsedBooks;
  }
  return [];
}
