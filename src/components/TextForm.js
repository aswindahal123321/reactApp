import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const inputValueChange = (event) => {
    setinputValue(event.target.value);
  };
  const [text, setText] = useState("Title");
  const [inputValue, setinputValue] = useState("Value of input");

  const [btnText, setBtnText] = useState("Dark Mode");

  return (
    <>
      <div className="container mt-5">
        <h1 className="fst-italic fw-bold">{props.title}</h1>
        <div className="mb-3 mt-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            onChange={handleOnChange}
            rows="3"
            style={{
            backgroundColor: props.mode ==='dark'?'#333':'white',
            color: props.mode ==='dark'?'white':'black'
            }}
          >
          </textarea>
        </div>
        <button onClick={handleUpClick} className="btn btn-primary">
          Uppercase
        </button>
        <button onClick={handleLowClick} className="btn btn-danger ms-2">
          Lowercase
        </button>
      </div>
      <div className="container mt-5">
        <h2>Content Summary</h2>
        <p>Total words : {text.split(" ").length}</p>
        <p>Toal Characters: {text.length}</p>

        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
