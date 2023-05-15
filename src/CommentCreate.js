import axios from "axios";
import React, { useState } from "react";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post(
      `http://posts.com/posts/${postId}/comments`,
      {
        content,
      }
    );

    console.log(response);

    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">New Comment</label>
          <input
            className="form-control"
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
