import React, { useState } from "react";
import axios from "axios";

interface IProp {
  itemRolad: () => void;
}

function InputArea(props: IProp) {
  const [inputText, setInputText] = useState<string>("");

  function handleChange(event: { target: { value: string } }) {
    const newValue = event.target.value;
    // console.log(newValue);
    setInputText(newValue);
    // Store the input
  }

  const addToDoItem = () => {
    axios
      .post("/newitem", { name: inputText })
      .then((res) => {
        console.log(res.data);
        props.itemRolad();
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div className="todo-form">
      <input
        onChange={handleChange}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            addToDoItem();
            // Press enter to submit
            setInputText("");
          }
        }}
        type="text"
        value={inputText}
      />
      <button
        type="submit"
        onClick={() => {
          addToDoItem();
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
