import React from "react";
import CommentCard from "./CommentCard";
import TempComments from "./TempComments";

const ServeComments = () => {
  return (
    <>
      <div style={{ marginTop: "2rem" }}>Comments</div>
      <div>
        {TempComments.items.map((val, ind) => (
          <CommentCard comment={val} key={val.id} />
        ))}
      </div>
    </>
  );
};

export default ServeComments;
