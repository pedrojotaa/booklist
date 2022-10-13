import "../index.css";

import Image from "./Image";
import Author from "./Author";
import Title from "./Title";

function Book({ img, title, author }) {
  return (
    <article className="book">
      <Image src={img} />
      <Author author={author} />
      <Title title={title} />
    </article>
  );
}

export default Book;
