import { findNextBookID } from "../utils/utils.js";
export function createBook(inventoryBooks) {
    const strBookName = document.querySelector("#txtBookName");
    const strBookCover = document.querySelector("#txtCover");
    const strBookLanguage = document.querySelector("#txtLanguage");
    const strBookISBN = document.querySelector("#txtISBN");
    const strAuthorName = document.querySelector("#txtAuthorName");
    const strAuthorBorn = document.querySelector("#txtAuthorBorn");
    const strAuthorPicture = document.querySelector("#txtAuthorPic");
    const radioIsTranslation = document.getElementsByName("rdoIsTranslation");
    const BookTitle = strBookName.value;
    const BookCover = strBookCover.value;
    const BookLanguage = strBookLanguage.value;
    const BookISBN = Number(strBookISBN.value); //Konvertera till siffror
    const BookTranslation = radioIsTranslation[0].checked ? true : false;
    const AuthorName = strAuthorName.value;
    const AuthorBorn = Number(strAuthorBorn.value); //Konvertera till siffror
    const AuthorPic = strAuthorPicture.value;
    const newAuthor = {
        name: AuthorName,
        born: AuthorBorn,
        photo: AuthorPic,
    };
    const newBook = {
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
//# sourceMappingURL=createBook.js.map