import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Book from "./components/Book";
import { books } from "./books";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
