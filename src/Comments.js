import React from "react";
import Comment from "./Comment";
// pure-functions -> o resultado vai depender da injeção das props

const Comments = ({ comments }) => {
  const keys = Object.keys(comments);

  return (
    <div>
      {keys.map(key => (
        <Comment key={key} c={comments[key]} />
      ))}
    </div>
  );
};

export default Comments;
