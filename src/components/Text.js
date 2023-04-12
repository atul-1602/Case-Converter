import React from "react";
import { useState } from "react";
import "../Styles/Text.css";

const Text = () => {
  const [text, setText] = useState("");
  const lasttext = "";

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleDownClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };

  const handleClear = () => {
    setText(" ");
    lasttext = text;
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
  const handleReverseClick = () => {
    let newText = "";
    for (let i = text.length; i >= 0; i--) newText = newText + text.charAt(i);
    setText(newText);
  };
  const handleAlternateClick=()=>{
      let newtext="";
      for(let i=0;i<text.length;i++){
        if(i%2==0)
        newtext+=text.charAt(i).toUpperCase();
        else
        newtext+=text.charAt(i).toLowerCase();

        setText(newtext);
      }
  }

  const handleOnChange = (event) => {
    console.log("on change clicked");
    setText(event.target.value);
  };

  return (
    <div className="mainContainer">
    <div className="left">
      <h2>enter your text...</h2>
      <div className="inputText">
        <textarea
        placeholder="text..."
          className="form-text"
          name=""
          id="textbox"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn" onClick={handleUpClick}>
        Convert upper case
      </button>
      <button className="btn" onClick={handleClear}>
        Clear
      </button>
      <button className="btn" onClick={handleDownClick}>
        Convert lower case
      </button>
      {/* <button className="btn " onClick={handleFirstClick}>
        First
      </button> */}
      <button className="btn " onClick={handleReverseClick}>
        Reverse
      </button>
      <button className="btn " onClick={handleAlternateClick}>
        Alternate
      </button>

      <div className="lower">
        <p>
          <h2>Word And Character Count</h2>
          {text.split(" ").length } words and {text.length} Characters
        </p>
      </div>
      </div>
      <div className="right">
        <h2>Table of content</h2>
        <ui>
            <li>Upper case converter</li>
            <li>Clear Text</li>
            <li>Reverse Text</li>
            <li>Alternate uppercase Converter</li>
            <li>Words count</li>
            <li>Characters count</li>
        </ui>
      </div>
    </div>
  );
};

export default Text;
