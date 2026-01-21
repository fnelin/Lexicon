import { Book } from "../models/book.js";

export function findNextBookID(inventoryBooks: Book[]): number {
  let _high = 1;
  for (let id of inventoryBooks) {
    _high = Number(id["id"]) >= _high ? Number(id["id"]) + 1 : _high;
  }
  return _high;
}

export function validateInput() {
  return true;
}
