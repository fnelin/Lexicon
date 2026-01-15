//Interfaces/Typer

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

const bookCard = document.getElementById("bookCard");
const bookTitleElement = document.getElementById("bookTitle");
const bookISBNElement = document.getElementById("bookISBN");
const bookLanguageElement = document.getElementById("bookLanguage");
const bookIsTranslatedElement = document.getElementById("bookIsTranslated");
const bookCoverElement = document.getElementById("bookCover") as HTMLImageElement;

const authorNameElement = document.getElementById("authorName");
const authorBornElement = document.getElementById("authorBorn");
const authorPictureElement = document.getElementById("authorPicture") as HTMLImageElement;

/* const currentBook = inventoryBooks[1];
const currentAuthor = currentBook.author;

if (bookTitleElement) {
  bookTitleElement.textContent = currentBook.title;
}
if (bookISBNElement) {
  bookISBNElement.textContent = currentBook.ISBN.toString();
}
if (bookLanguageElement) {
  bookLanguageElement.textContent = currentBook.language;
}

if (bookIsTranslatedElement) {
  bookIsTranslatedElement.textContent = currentBook.isTranslation ? "Översatt" : "Originalspråk";
}

if (bookCoverElement && currentBook.coverURL) {
  bookCoverElement.src = currentBook.coverURL;
}

if (authorNameElement) {
  authorNameElement.textContent = currentAuthor.name;
}

if (authorBornElement) {
  authorBornElement.textContent = "Född: " + currentAuthor.born.toString();
}

if (authorPictureElement && currentAuthor.photo) {
  authorPictureElement.src = currentAuthor.photo;
} */

const bookListContainer = document.querySelector("#bookListContainer");

inventoryBooks.forEach((book) => {
  const card = document.createElement("article");
  card.id = "bookCard";
  card.classList.add("bookCard");

  const title = document.createElement("h2");
  title.textContent = book.title;
  title.id = "bookTitle";
  card.append(title);

  const divBookinformation = document.createElement("div");
  divBookinformation.id = "bookInformation";

  if (book.coverURL) {
    const cover = document.createElement("img") as HTMLImageElement;
    cover.src = book.coverURL;
    cover.id = "bookCover";
    divBookinformation.append(cover);
  }
  const divBookinformationDetails = document.createElement("div");
  divBookinformationDetails.id = "bookInformationDetails";
  divBookinformationDetails.append(skapaHTMLElement("span", book.language, "bookLanguage"));
  divBookinformationDetails.append(skapaHTMLElement("span", book.ISBN.toString(), "bookISBN"));
  divBookinformation.append(divBookinformationDetails);
  card.append(divBookinformation);

  const divAuthorInformationDetails = document.createElement("div");
  divAuthorInformationDetails.id = "bookAuthor";
  card.append(divAuthorInformationDetails);

  if (bookListContainer) {
    bookListContainer.append(card);
  }
});

function skapaHTMLElement(e: string, content: string, idCSS: string) {
  if (e === "img") {
    const el = document.createElement(e) as HTMLImageElement;
    el.id = idCSS;
    el.src = content;
    return el;
  } else {
    const el = document.createElement(e);
    el.textContent = content;
    el.id = idCSS;
    return el;
  }
}
