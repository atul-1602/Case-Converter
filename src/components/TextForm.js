import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    console.log("lower case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    console.log("clear text was clicked" + text);
    let newText = "";
    setText(newText);
  };

  const handleReverseClick = () => {
    console.log("Reverse text was clicked" + text);
    let newText = "";

    for (let i = text.length - 1; i >= 0; i--) {
      newText = newText + text.charAt(i);
    }
    console.log(newText);
    setText(newText);
  };

  const handleFirstClick = () => {
    console.log("Alternate  text was clicked" + text);
    let newText = "";
    let char = "";

    for (let i = 0; i < text.length ; i++) {
      char = text.charAt(i);
      if (char == " ") {
        newText = newText + " " + text.charAt(i + 1).toUpperCase();
        i = i + 2;
      }
      if (i == 0) newText = newText +  text.charAt(i).toUpperCase();
      else {
        newText = newText + text.charAt(i);
      }
    }
    setText(newText);
  };

  // onChange is used to write in text area
  const handleOnChange = (event) => {
    console.log("on change clicked");
    setText(event.target.value);
  };

  const [text, setText] = useState(""); // update text by calling setText function

  return (
    <>
      <div className="container">
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert upper case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert lower case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleFirstClick}>
          First
        </button>
        <button className="btn btn-primary mx-2" onClick={handleReverseClick}>
          Reverse
        </button>
      </div>
      <div className="container my-4">
        <h1>Your Text Summary</h1>
        <b>
          <p>
            {text.split(" ").length} wordsand {text.length} Characters
          </p>

          <p>{0.008 * text.split(" ").length} minutes reading time </p>
        </b>
        
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
