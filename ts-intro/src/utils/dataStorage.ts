import { Book } from "../models/book.js";

const SAVE_NAME = "Books";
const JSON_FILE = "../data/books.json";

export function saveToLocalStorage(inventoryBooks: Book[]) {
  const jsonSaveString = JSON.stringify(inventoryBooks);
  localStorage.setItem(SAVE_NAME, jsonSaveString);
}

export function saveToJsonFile(inventoryBooks: Book[]) {
  const jsonSaveString = JSON.stringify(inventoryBooks);
  //  writeFile(JSON_FILE, jsonSaveString, "utf-8");
}

export function loadFromLocalStorage(): Book[] {
  const storedBooks = localStorage.getItem(SAVE_NAME);
  if (storedBooks) {
    const parsedBooks = JSON.parse(storedBooks) as Book[];
    return parsedBooks;
  }
  return [];
}

export async function loadFromJsonFile(): Promise<Book[]> {
  const storedBooks = await fetch(JSON_FILE);

  const parsedBooks = (await storedBooks.json()) as Book[];

  return parsedBooks;
}
