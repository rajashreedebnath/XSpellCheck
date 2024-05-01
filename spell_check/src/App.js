import React, { useState } from "react";
import "./App.css";



const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};



export default function SpellCheck() {


  const [inputText, setInputText] = useState("");
  const [correction, setCorrection] = useState("");



  const handleInputChange = (e) => {


    const inputValue = e.target.value.toLowerCase();

    setInputText(inputValue);

    setCorrection("");

    const words = inputValue.split(" ");

    for (let word of words) {

      if (customDictionary[word]) {

        setCorrection(customDictionary[word]);
        break;
      }
    }
  };

  return (
    <div className="App">

      <h1>Spell Check and Auto-Correction</h1>

      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
        rows="4"
        cols="50"
      />


      {correction && (

        <p className="correction">

          Did you mean:{" "}

          <strong>
            {correction.charAt(0).toLowerCase() + correction.slice(1)}
          </strong>
          ?
        </p>
      )}
    </div>
  );
};
