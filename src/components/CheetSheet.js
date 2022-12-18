import React from "react";

const CheetSheet = () => {
  const cheetSheet = "https://www.markdownguide.org/cheat-sheet";
  return (
    <>
      <h3 className="cheet">
        Click Here For{" "}
        <a href={cheetSheet} target="_blank" rel="noopener noreferrer">
          Cheet Sheet
        </a>
      </h3>
    </>
  );
};

export default CheetSheet;
