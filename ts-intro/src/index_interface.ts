//#region ------------------------------ Interfaces/Typer ---------------------------------------------*/

interface Book {
  id: number;
  title: string;
  ISBN: number;
  language: string;
  isTranslation: boolean;
  author: Author;
  coverURL?: string;
}

interface Author {
  name: string;
  born: number;
  photo?: string;
}

type bookStatus = `Order` | `Wishlist`;
//#endregion
//#region ------------------------------ Mock data ----------------------------------------------------*/
const inventoryBooks: Book[] = [
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
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ40L_f3Zij0I5RT-wtt0Nozc4w8Edkp6Gq9Rg5Xskx3OlnkZ3M83eEuWC1-sEWL7cmr4UZwzA6UGbgPaxrjHj5oUwRWIbI86zgiRhxa6Sv&s=10",
    },
    coverURL: "https://image.bokus.com/images/9789170028052_200x_pestens-tid_storpocket",
  },
];
//#endregion
//#region ------------------------------ Deklarationer av globala konstanter --------------------------*/
const bookListContainer = document.querySelector("#bookListContainer");
const dialog = document.querySelector("#add-book-dialog") as HTMLDialogElement;
const btnOpenDialog = document.querySelector("#open-modal-btn") as HTMLButtonElement;
const btnCloseDialog = document.querySelector("#close-modal-btn") as HTMLButtonElement;
const btnSave = document.querySelector("#saveLocalStorage") as HTMLButtonElement;
const btnLoad = document.querySelector("#loadLocalStorage") as HTMLButtonElement;
const addForm = document.querySelector("#frmAddBook") as HTMLFormElement;
const strBookName = document.querySelector("#txtBookName") as HTMLInputElement;
const strBookCover = document.querySelector("#txtCover") as HTMLInputElement;
const strBookLanguage = document.querySelector("#txtLanguage") as HTMLInputElement;
const strBookISBN = document.querySelector("#txtISBN") as HTMLInputElement;
const strAuthorName = document.querySelector("#txtAuthorName") as HTMLInputElement;
const strAuthorBorn = document.querySelector("#txtAuthorBorn") as HTMLInputElement;
const strAuthorPicture = document.querySelector("#txtAuthorPic") as HTMLInputElement;
const radioIsTranslation = document.getElementsByName("rdoIsTranslation");
//#endregion
//#region ------------------------------ Funktioner ---------------------------------------------------*/
function saveToLocalStorage() {
  const jsonSaveString = JSON.stringify(inventoryBooks);
  localStorage.setItem("Books", jsonSaveString);
}

function loadFromLocalStorage() {
  const storedBooks = localStorage.getItem("Books");
  if (storedBooks) {
    const parsedBooks = JSON.parse(storedBooks) as Book[];
    inventoryBooks.length = 0;
    inventoryBooks.push(...parsedBooks);
    renderBooks();
  }
  console.log(inventoryBooks);
}

function renderBooks() {
  bookListContainer?.replaceChildren();

  inventoryBooks.forEach((book) => {
    const articleCard = skapaHTMLElement("article", "", "bookCard", "bookCard-" + book.ISBN);
    const divBookInformation = skapaHTMLElement("div", "", "bookInformation", "bookInformation-" + book.ISBN);
    const divBookInformationDetails = skapaHTMLElement(
      "div",
      "",
      "bookInformationDetails",
      "bookInformationDetails-" + book.ISBN,
    );
    const divAuthor = skapaHTMLElement("div", "", "bookAuthor", "bookAuthor-" + book.ISBN);

    articleCard.append(skapaHTMLElement("h2", book.title, "bookTitle", "bookTitle-" + book.ISBN));

    articleCard.append(divBookInformation);
    articleCard.append(divAuthor);

    const bookCoverUrl = book.coverURL ? book.coverURL : "";
    divBookInformation.append(skapaHTMLElement("img", bookCoverUrl, "bookCover", "bookCover-" + book.ISBN));
    divBookInformation.append(divBookInformationDetails);
    divBookInformationDetails.append(
      skapaHTMLElement("span", book.language, "bookLanguage", "bookLanguage-" + book.ISBN),
    );

    const bookIsTranslated = book.isTranslation ? "Översatt" : "Originalspråk";
    divBookInformationDetails.append(
      skapaHTMLElement("span", bookIsTranslated, "bookIsTranslated", "bookIsTranslated-" + book.ISBN),
    );
    divBookInformationDetails.append(
      skapaHTMLElement("span", book.ISBN.toString(), "bookISBN", "bookISBN-" + book.ISBN),
    );

    const authorPicture = book.author.photo ? book.author.photo : "";
    divAuthor.append(skapaHTMLElement("img", authorPicture, "authorPicture"));
    const spanAuthorInformation = skapaHTMLElement("span", "", "authorInformation");
    divAuthor.append(spanAuthorInformation);
    spanAuthorInformation.append(skapaHTMLElement("h3", book.author.name, "authorName"));
    spanAuthorInformation.append(skapaHTMLElement("span", book.author.born.toString(), "authorBorn"));

    const adminActions = skapaHTMLElement("div", "", "adminActions hidden", "adminActions-" + book.ISBN);
    adminActions.append(skapaHTMLElement("span", "✏️", "editAction"));
    adminActions.append(skapaHTMLElement("span", "❌", "removeAction"));
    articleCard.append(adminActions);

    articleCard.dataset.id = book.id.toString();

    bookListContainer?.append(articleCard);
  });
}

function skapaHTMLElement(e: string, content: string, classCSS: string, idCSS?: string) {
  const el = e === "img" ? (document.createElement(e) as HTMLImageElement) : document.createElement(e);
  if (el instanceof HTMLImageElement) {
    el.src = content;
  } else {
    el.textContent = content;
  }
  el.id = idCSS ? idCSS : classCSS;
  el.className = classCSS;
  return el;
}

function findNextBookID(): number {
  let _high = 1;
  for (let id of inventoryBooks) {
    _high = Number(id["id"]) >= _high ? Number(id["id"]) + 1 : _high;
  }
  return _high;
}
//#endregion
//#region ------------------------------ Eventlyssnare ------------------------------------------------*/

bookListContainer?.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  const card = target.closest(".bookCard") as HTMLElement;
  if (!card) return;

  const admin = card.querySelector(".adminActions") as HTMLElement;
  const currentActive = document.querySelector(".bookCard.active");
  const currentAdmin = currentActive?.querySelector(".adminActions") as HTMLElement;
  const hasActive = card.classList.contains("active");

  if (target.classList.contains("removeAction")) {
    const removeID = Number(card.dataset.id);
    const removeIndex = inventoryBooks.findIndex((b) => b.id === removeID);
    inventoryBooks.splice(removeIndex, 1);

    renderBooks();
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
  saveToLocalStorage();
});

btnLoad.addEventListener("click", () => {
  loadFromLocalStorage();
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
    id: findNextBookID(),
    title: BookTitle,
    ISBN: BookISBN,
    language: BookLanguage,
    coverURL: BookCover,
    isTranslation: BookTranslation,
    author: newAuthor,
  };

  inventoryBooks.push(newBook);

  renderBooks();

  addForm.reset();
  dialog.close();
});
//#endregion
//#region ------------------------------ Rendering ----------------------------------------------------*/

renderBooks();
//#endregion
