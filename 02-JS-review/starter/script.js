const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// ------------Destructuring----------------
/*
const book = getBook(3);
book;
const { title, publicationDate, author, genres, pages, hasMovieAdaptation } =
  book;
//console.log(title, publicationDate, author, genres);

//
const [primaryGenre, secondGenre, ...otherGenre] = genres;
//console.log(primaryGenre, secondGenre, otherGenre);

//
const newGenre = ["epic fantasy", ...genres];
//newGenre;

//
const updateBook = {
  ...book,
  // Adding a new property
  movieDate: "2001-12-19",
  // Overwriting an existing property
  pages: 1210,
};
//updateBook;

//
const summary = `Movie ${title} is by ${author} in ${
  publicationDate.split("-")[0]
}`;
//summary;

// Arrow function
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

// toán tử 3 ngôi
const pageRange = pages > 1000 ? "over thousand" : "less than thounsan";
//pageRange;
console.log(`The book has ${pageRange} pages`);

// Short-Circuiting: đoản mạch
console.log(true && "something");
console.log(false && "something");
console.log(hasMovieAdaptation && "This book has movie");

// falsy: 0, '', null, undefined
console.log("ok" && "something");
console.log("" && "something");

console.log(true || "something");
console.log(false || "something");

console.log(book.translations.spanish);
const spanishTranslate = book.translations.spanish || "NOT TRANSLATE";
spanishTranslate;

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "No data";
// countWrong;
// nullish (0 && null)
// count = book.reviews.librarything.reviewsCount ?? "No data";
// count;

// toán tử hợp nhất null (??), (?) có thể tồn tại dữ liệu hoặc không
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));

*/

// ------------Map, Filter, Reduce, Sort (add, del, update)-----------
/*
const books = getBooks();

// Map: tạo ra 1 mảng mới dựa vào đối tượng hoặc mảng cũ
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
//console.log(x);

const title = books.map((book) => book.title);
//title;

function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
essentialData;

// Filter: Lọc ra phần tử của mảng dựa trên một điều kiện
const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

// Reduce: Phương pháp rút rọn, giảm toàn bộ mảng xuống thành một giá trị
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;

// Sort: phương thức sắp xếp => thay đổi mảng hiện tại khác vs Map và Filter, Slice(): tạo mảng copy
const arr = [1, 8, 6, 7, 4, 2, 9];
const sorted = arr.slice().sort((a, b) => a - b);
sorted;
arr;

const sortByPageBooks = books.slice().sort((a, b) => a.pages - b.pages);
sortByPageBooks;

// Working With Immutable Arrays: Làm việc (del và update) với mảng không thay đổi
// 1) Add book object to array
const newBook = {
  id: 6,
  title: "Harry Margui is legend",
  author: "Ten Hag",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2. Del book object from array
const booksAfterDel = books.filter((book) => book.id !== 3);
booksAfterDel;

// 3. Update book object
const booksAfterUpdate = booksAfterDel.map((book) =>
  book.id === 1 ? {...book, pages: 1250} : book
);
booksAfterUpdate;
*/

// ------------Promise, Đồng bộ và Bất đồng bộ-------------------------
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}

getTodos();
console.log("First after getTodos()")
