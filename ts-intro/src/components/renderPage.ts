import { Book } from "../models/book.js";
import { skapaHTMLElement } from "../utils/createHTML.js";

export function renderBooks(inventoryBooks: Book[], HTMLContainer: HTMLElement) {
  HTMLContainer?.replaceChildren();

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

    HTMLContainer?.append(articleCard);
  });
}
