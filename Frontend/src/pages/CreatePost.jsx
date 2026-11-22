const CreatePost = () => {
  return (
    <section className="create-post-section">
      <h1>Create Post</h1>

        <form className="create-post-form">

            <input type="file" name="image " accept="image/*" />
            <input type="text" name="title" placeholder="Title" required />
            <textarea name="description" placeholder="description" required></textarea>
            <button type="submit">Create Post</button>
        </form>
    </section>
  );
};

export default CreatePost;
