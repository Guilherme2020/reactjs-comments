import React from "react";

const Comment = ({ c }) => {
  let comment = "vazio";

  if (c && c.comment) {
    comment = c.comment;
  }

  return <div>Comentario: {comment}</div>;
};

export default Comment;
