import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51bZujlJxlL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
    alt="Harry Potter"
  ></img>
);

const Title = () => <h1>Harry Potter and the Order of the Phoenix</h1>;

const Author = () => <h4>J. K. Rowling</h4>;

ReactDOM.render(<BookList />, document.getElementById("root"));
