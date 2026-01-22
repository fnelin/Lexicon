import { Book, Author } from "../models/book.js";
import { findNextBookID } from "../utils/utils.js";

export function createBook(inventoryBooks: Book[]): Book {
  const strBookName = document.querySelector("#txtBookName") as HTMLInputElement;
  const strBookCover = document.querySelector("#txtCover") as HTMLInputElement;
  const strBookLanguage = document.querySelector("#txtLanguage") as HTMLInputElement;
  const strBookISBN = document.querySelector("#txtISBN") as HTMLInputElement;
  const strAuthorName = document.querySelector("#txtAuthorName") as HTMLInputElement;
  const strAuthorBorn = document.querySelector("#txtAuthorBorn") as HTMLInputElement;
  const strAuthorPicture = document.querySelector("#txtAuthorPic") as HTMLInputElement;
  const radioIsTranslation = document.getElementsByName("rdoIsTranslation");

  const BookTitle = strBookName.value;
  const BookCover = strBookCover.value;
  const BookLanguage = strBookLanguage.value;
  const BookISBN = Number(strBookISBN.value); //Konvertera till siffror
  const BookTranslation = (radioIsTranslation[0] as HTMLInputElement).checked ? true : false;
  const AuthorName = strAuthorName.value;
  const AuthorBorn = Number(strAuthorBorn.value); //Konvertera till siffror
  const AuthorPic = strAuthorPicture.value;

  const newAuthor: Author = {
    name: AuthorName,
    born: AuthorBorn,
    photo: AuthorPic,
  };

  const newBook: Book = {
    id: findNextBookID(inventoryBooks),
    title: BookTitle,
    ISBN: BookISBN,
    language: BookLanguage,
    coverURL: BookCover,
    isTranslation: BookTranslation,
    author: newAuthor,
  };

  return newBook;
}
