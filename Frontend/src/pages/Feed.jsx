import React, { useState, useEffect } from "react";
import axios from "axios";


const Feed = () => {
  const [posts, setPosts] = useState([
      {
        _id: 1,
        title: "Post 1",
        description: "This is the description for Post 1.",
        image: "https://via.placeholder.com/150",
      }
  ]);

    useEffect(() => {
        axios.get("http://localhost:3000/posts")
            .then((response) => {
                console.log(response.data);
                setPosts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            });
    }, []);

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
