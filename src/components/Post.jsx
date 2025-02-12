import React from "react";

const Post = ({ children }) => {
  return (
    <main className="post" id="post">
      {children}
    </main>
  );
};

export default Post;
