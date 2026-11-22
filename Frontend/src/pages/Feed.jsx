import React, { useState } from "react";

const Feed = () => {
  const [posts, setPosts] = useState([
      {
        _id: 1,
        title: "Post 1",
        description: "This is the description for Post 1.",
        image: "https://via.placeholder.com/150",
      }
  ]);

  return (
    <section>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          {post.image && <img src={post.image} alt={post.title} />}
        </div>
      ))}
    </section>
  );
};

export default Feed;
