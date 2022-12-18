import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const Editor = () => {
  const [text, setText] = useState("# Markdown Preview");

  const getText = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="container my-5 py-3 d-flex">
      <div className="col-6 editor py-2">
        <textarea
          name="editor"
          value={text}
          cols="50"
          rows="20"
          onChange={getText}
        ></textarea>
      </div>
      <div className="col-6 preview p-5 ">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Editor;
