const library = [];
const content = document.querySelector(".content");

function resizeContent() {
  if (library.length === 1) {
    content.style.width = "fit-content";
  } else content.style.width = "60%";
}

function Book(img, title, author, pages, read) {
  this.img = img;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function displayBooks() {
  //
  content.innerHTML = "";
  library.forEach((book, index) => {
    // card div
    const card = document.createElement("div");
    card.className = "card";

    // img element
    const img = document.createElement("img");

    img.src = book.img;
    img.alt = "Book Cover";

    // book title
    const title = document.createElement("h2");

    title.textContent = book.title;

    //author
    const author = document.createElement("p");

    author.textContent = "Author: " + book.author;

    //pages
    const pages = document.createElement("p");
    pages.textContent = "Pages: " + book.pages;

    // Read/CheckBox
    const checkBoxContainer = document.createElement("div");
    checkBoxContainer.className = "checkbox-container";

    const checkBox = document.createElement("div");

    checkBox.className = "checkbox";

    const readCheckBox = document.createElement("input");
    readCheckBox.type = "checkbox";
    readCheckBox.checked = book.read;

    const checkLabel = document.createElement("label");
    checkLabel.textContent = "Read";

    checkBox.appendChild(readCheckBox);
    checkBox.appendChild(checkLabel);

    checkBoxContainer.appendChild(checkBox);
    //Button
    const btn = document.createElement("button");
    btn.className = "delete-btn";
    btn.textContent = "Delete";

    btn.addEventListener("click", () => {
      library.splice(index, 1);

      displayBooks();
    });

    checkBoxContainer.appendChild(btn);

    //dom
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(checkBoxContainer);
    content.appendChild(card);
  });
  resizeContent();
}

// seed data
const book1 = new Book(
  "img/bird.jpg",
  "To Kill a Mockingbird",
  "Harper Lee",
  281,
  true
);

const book2 = new Book(
  "/img/The_Great_Gatsby_Cover_1925_Retouched.jpg",
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  180,
  false
);
const book3 = new Book(
  "/img/The_Great_Gatsby_Cover_1925_Retouched.jpg",
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  180,
  false
);

library.push(book1);
library.push(book2);
library.push(book3);

displayBooks();
