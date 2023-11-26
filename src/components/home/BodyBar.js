import React, { useState, useEffect } from "react";

const BodyBar = () => {
  const values = [
    "All",
    "Javascript",
    "Website",
    "Data Structures",
    "Computers",
    "Live",
    "Statistic",
    "Class",
    "Watched",
    "New to you",
    "All",
    "Javascript",
    "Website",
    "Data Structures",
    "Computers",
    "Live",
    "Statistic",
    "Class",
    "Watched",
    "New to you",
    "All",
    "Javascript",
    "Website",
    "Data Structures",
    "Computers",
    "Live",
    "Statistic",
    "Class",
    "Watched",
    "New to you",
    "hii",
  ];
  const [index, setindex] = useState(0);
  const [prevdisable, setprevdisabe] = useState(true);
  const [nextdisable, setnextdisabe] = useState(false);

  const disableprev = () => {
    setprevdisabe(index === 0);
  };

  const disablenext = () => {
    setnextdisabe(values.length - index <= 9);
  };

  useEffect(() => {
    disablenext();
    disableprev();
  }, [index]);

  const handleprev = () => {
    if (index - 9 >= 0) setindex(index - 9);
  };

  const handlenext = () => {
    if (index + 9 < values.length) setindex(index + 9);
  };

  return (
    <div
      style={{
        display: "flex",
        marginLeft: "64px",
        marginRight: "64px",
        marginTop: "8px",
        marginBottom: "24px",
      }}
    >
      <div
        style={{ paddingLeft: "20px", paddingRight: "20px" }}
        onClick={handleprev}
      >
        {prevdisable ? (
          ""
        ) : (
          <p
            style={{
              height: "40px",
              width: "40px",
              textAlign: "center",
              cursor: "pointer",
            }}
            className="h-10 w-10 text-center text-2xl cursor-pointer rounded-full hover:bg-gray-200"
          >
            &lt;
          </p>
        )}
      </div>
      <div
        style={{ display: "flex", alignSelf: "center" }}
        className="self-center flex "
      >
        {values.slice(index, index + 9).map((val, ind) => {
          return (
            <div
              key={ind}
              style={{
                backgroundColor: "gray",
                marginLeft: "12px",
                marginRight: "",
              }}
              className="bg-gray-100  rounded-md  mx-3 h-7 px-2"
            >
              {val}
            </div>
          );
        })}
      </div>
      <div style={{ position: "fixed", right: "24px" }} onClick={handlenext}>
        {nextdisable ? null : (
          <p className="h-10 w-10 text-center text-2xl cursor-pointer rounded-full hover:bg-gray-200">
            &gt;
          </p>
        )}
      </div>
    </div>
  );
};

export default BodyBar;
