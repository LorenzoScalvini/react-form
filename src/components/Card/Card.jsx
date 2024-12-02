import React from "react";
import style from "./Card.module.css";

export default function Card({ title, content, image, tags }) {
  return (
    <div className={style.card}>
      <img src={image} alt={title} className={style.image} />
      <div className={style.content}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.description}>{content}</p>
        <div className={style.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={style.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
