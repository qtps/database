import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    axios.post("http://localhost:3000/create-post", formData).then((res) => {
      navigate("/feed");
    });
  };

  return (
    <section className="create-post-section">
      <h1>Create Post</h1>

      <form className="create-post-form " onSubmit={handleSubmit}>
        <input type="file" name="image" accept="image/*" />
        <input type="text" name="title" placeholder="Title" required />
        <textarea
          name="description"
          placeholder="description"
          required
        ></textarea>
        <button type="submit">Create Post</button>
      </form>
    </section>
  );
};

export default CreatePost;
