"use strict";
//Interfaces/Typer
const inventoryBooks = [
    {
        id: 1,
        title: "Color of Magic",
        ISBN: 9780552152921,
        language: "English",
        isTranslation: false,
        author: {
            name: "Terry Pratchett",
            born: 1948,
        },
        coverURL: "https://www.adlibris.com/images/9780861403240/the-colour-of-magic.jpg",
    },
    {
        id: 2,
        title: "Väninnorna på Nordiska Kompaniet",
        ISBN: 9789177718512,
        language: "Svenska",
        isTranslation: false,
        author: {
            name: "Ruth Kvarnström-Jones",
            born: 1962,
        },
        coverURL: "https://www.adlibris.com/images/9789177718512/vaninnorna-pa-nordiska-kompaniet.jpg",
    },
    {
        id: 3,
        title: "Pestens tid",
        ISBN: 9780552152921,
        language: "Svenska",
        isTranslation: true,
        author: {
            name: "Stephen King",
            born: 1947,
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ40L_f3Zij0I5RT-wtt0Nozc4w8Edkp6Gq9Rg5Xskx3OlnkZ3M83eEuWC1-sEWL7cmr4UZwzA6UGbgPaxrjHj5oUwRWIbI86zgiRhxa6Sv&s=10",
        },
        coverURL: "https://image.bokus.com/images/9789170028052_200x_pestens-tid_storpocket",
    },
];
const bookListContainer = document.querySelector("#bookListContainer");
const dialog = document.querySelector("#add-book-dialog");
const btnOpenDialog = document.querySelector("#open-modal-btn");
const btnCloseDialog = document.querySelector("#close-modal-btn");
const addForm = document.querySelector("#frmAddBook");
const strBookName = document.querySelector("#txtBookName");
const strBookCover = document.querySelector("#txtCover");
const strBookLanguage = document.querySelector("#txtLanguage");
const strBookISBN = document.querySelector("#txtISBN");
const strAuthorName = document.querySelector("#txtAuthorName");
const strAuthorBorn = document.querySelector("#txtAuthorBorn");
const strAuthorPicture = document.querySelector("#txtAuthorPic");
function renderBooks() {
    bookListContainer?.replaceChildren();
    inventoryBooks.forEach((book) => {
        const articleCard = skapaHTMLElement("article", "", "bookCard", "bookCard-" + book.ISBN);
        const divBookInformation = skapaHTMLElement("div", "", "bookInformation", "bookInformation-" + book.ISBN);
        const divBookInformationDetails = skapaHTMLElement("div", "", "bookInformationDetails", "bookInformationDetails-" + book.ISBN);
        const divAuthor = skapaHTMLElement("div", "", "bookAuthor", "bookAuthor-" + book.ISBN);
        articleCard.append(skapaHTMLElement("h2", book.title, "bookTitle", "bookTitle-" + book.ISBN));
        articleCard.append(divBookInformation);
        articleCard.append(divAuthor);
        const bookCoverUrl = book.coverURL ? book.coverURL : "";
        divBookInformation.append(skapaHTMLElement("img", bookCoverUrl, "bookCover", "bookCover-" + book.ISBN));
        divBookInformation.append(divBookInformationDetails);
        divBookInformationDetails.append(skapaHTMLElement("span", book.language, "bookLanguage", "bookLanguage-" + book.ISBN));
        const bookIsTranslated = book.isTranslation ? "Översatt" : "Originalspråk";
        divBookInformationDetails.append(skapaHTMLElement("span", bookIsTranslated, "bookIsTranslated", "bookIsTranslated-" + book.ISBN));
        divBookInformationDetails.append(skapaHTMLElement("span", book.ISBN.toString(), "bookISBN", "bookISBN-" + book.ISBN));
        const authorPicture = book.author.photo ? book.author.photo : "";
        divAuthor.append(skapaHTMLElement("img", authorPicture, "authorPicture"));
        const spanAuthorInformation = skapaHTMLElement("span", "", "authorInformation");
        divAuthor.append(spanAuthorInformation);
        spanAuthorInformation.append(skapaHTMLElement("h3", book.author.name, "authorName"));
        spanAuthorInformation.append(skapaHTMLElement("span", book.author.born.toString(), "authorBorn"));
        articleCard.addEventListener("click", () => {
            const currentActive = document.querySelector(".bookCard.active");
            const hasActive = articleCard.classList.contains("active");
            currentActive?.classList.remove("active");
            if (!hasActive) {
                articleCard.classList.add("active");
            }
        });
        bookListContainer?.append(articleCard);
    });
}
function skapaHTMLElement(e, content, classCSS, idCSS) {
    /*Slutresultat en blandning av båda ovanstående med hjälp av instanceof.*/
    const el = e === "img" ? document.createElement(e) : document.createElement(e);
    if (el instanceof HTMLImageElement) {
        el.src = content;
    }
    else {
        el.textContent = content;
    }
    el.id = idCSS ? idCSS : classCSS;
    el.className = classCSS;
    return el;
}
renderBooks();
btnOpenDialog.addEventListener("click", () => {
    dialog.showModal();
});
btnCloseDialog.addEventListener("click", () => {
    addForm.reset();
    dialog.close();
});
addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const BookTitle = strBookName.value;
    const BookCover = strBookCover.value;
    const BookLanguage = strBookLanguage.value;
    const BookISBN = Number(strBookISBN.value); //Konvertera till siffror
    const AuthorName = strAuthorName.value;
    const AuthorBorn = Number(strAuthorBorn.value); //Konvertera till siffror
    const AuthorPic = strAuthorPicture.value;
    const newAuthor = {
        name: AuthorName,
        born: AuthorBorn,
        photo: AuthorPic,
    };
    const newBook = {
        id: 4,
        title: BookTitle,
        ISBN: BookISBN,
        language: BookLanguage,
        coverURL: BookCover,
        isTranslation: false,
        author: newAuthor,
    };
    inventoryBooks.push(newBook);
    renderBooks();
    addForm.reset();
    dialog.close();
});
//# sourceMappingURL=index_interface.js.map