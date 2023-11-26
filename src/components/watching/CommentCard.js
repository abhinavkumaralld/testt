import React from "react";

const CommentCard = ({ comment }) => {
  return (
    <div style={{ display: "flex", margin: "1rem 0" }}>
      <img
        style={{ height: "2.5rem", width: "2.5rem", borderRadius: "50%" }}
        src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
        alt="ImgNotFound"
      />
      <div style={{ paddingLeft: "0.5rem", maxWidth: "53.125rem" }}>
        <div style={{ fontWeight: "bold" }}>
          {comment.snippet.topLevelComment.snippet.authorDisplayName}
        </div>
        <div>{comment.snippet.topLevelComment.snippet.textOriginal}</div>
      </div>
    </div>
  );
};

export default CommentCard;
