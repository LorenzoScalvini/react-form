import React, { useState } from "react";
import styles from "./Form.module.css";

export default function Form({ addPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content || !image || !tags) {
      alert("Tutti i campi devono essere compilati!");
      return;
    }

    const newPost = {
      title,
      content,
      image,
      tags: tags.split(",").map((tag) => tag.trim()),
    };

    addPost(newPost);

    // Reset form
    setTitle("");
    setContent("");
    setImage("");
    setTags("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Titolo"
        className={styles.input}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Contenuto"
        className={styles.textarea}
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="URL Immagine"
        className={styles.input}
      />
      <input
        type="text"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="Tags"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Aggiungi Ricetta
      </button>
    </form>
  );
}
