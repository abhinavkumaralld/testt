import React, { useEffect, useState } from "react";

const SuggestionBar = () => {
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
  ];
  const [index, setindex] = useState(0);
  const [prevdisable, setprevdisabe] = useState(true);
  const [nextdisable, setnextdisabe] = useState(false);

  const disableprev = () => {
    if (index === 0) setprevdisabe(true);
    else setprevdisabe(false);
  };

  const disablenext = () => {
    if (values.length - index <= 3) setnextdisabe(true);
    else setnextdisabe(false);
  };

  useEffect(() => {
    disablenext();
    disableprev();
  }, [index]);

  const handleprev = () => {
    if (index - 3 >= 0) setindex(index - 3);
  };

  const handlenext = () => {
    if (index + 3 < values.length) setindex(index + 3);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ paddingLeft: "0", cursor: "pointer" }} onClick={handleprev}>
        {prevdisable ? (
          ""
        ) : (
          <p
            style={{
              height: "40px",
              width: "40px",
              textAlign: "center",
              cursor: "pointer",
              borderRadius: "50%",
              fontSize: "1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              hover: { backgroundColor: "#E5E7EB" },
            }}
          >
            &lt;
          </p>
        )}
      </div>
      <div style={{ display: "flex", alignSelf: "center" }}>
        {values.slice(index, index + 3).map((val, ind) => (
          <div
            key={ind}
            style={{
              backgroundColor: "gray",
              marginLeft: "12px",
              marginRight: "12px",
              borderRadius: "0.25rem",
              height: "1.75rem",
              padding: "0.25rem 0.5rem",
            }}
          >
            {val}
          </div>
        ))}
      </div>
      <div style={{ position: "fixed", right: "20px" }} onClick={handlenext}>
        {nextdisable ? null : (
          <p
            style={{
              height: "40px",
              width: "40px",
              textAlign: "center",
              cursor: "pointer",
              borderRadius: "50%",
              fontSize: "1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              hover: { backgroundColor: "#E5E7EB" },
            }}
          >
            &gt;
          </p>
        )}
      </div>
    </div>
  );
};

export default SuggestionBar;
