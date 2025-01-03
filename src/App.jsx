import React, { useState } from "react";
import { posts as initialPosts } from "./data/posts";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import "./App.css";

export default function App() {
  const [posts, setPosts] = useState(initialPosts);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <>
      <Header />
      <Hero />
      <h1 className="title">Ricette del Blog</h1>
      <div className="App">
        <Form addPost={addPost} />

        <div className="card-container">
          {posts.map((post, index) => (
            <Card
              key={index}
              title={post.title}
              content={post.content}
              image={post.image}
              tags={post.tags}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
