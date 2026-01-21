/* //Interfaces/Typer

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

const currentBook = inventoryBooks[1];
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
}
 */
