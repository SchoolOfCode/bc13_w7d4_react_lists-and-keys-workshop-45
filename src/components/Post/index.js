import React from "react";

import "./index.css";

function Post({ text, author, date, title, image, highlights }) {
  return (
    <article>
      <h1>{title}</h1>
      <h2>{date}</h2>
      <img src={image.link} alt={image.alt} width={'80%'}></img>
      <p>{text}</p>
      <h3>{author}</h3>
      {highlights.map((highlight, index) => {
        return <li key={index}>{highlight}</li>;
      })}
    </article>
  );
}

export default Post;
