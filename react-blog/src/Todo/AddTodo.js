import React, { useState } from "react";
import PropTypes from "prop-types";

function useInputValue(defaultValue = "") {
  //feature
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}

function AddTodo({ onCreate }) {
  //вынесли это в useInputValue
  //   const [value, setValue] = useState("");

  const input = useInputValue(""); //feature

  function submitHandler(event) {
    event.preventDefault();

    //  if (value.trim()) {
    if (input.value.trim()) {
      //feature
      onCreate(input.value()); //feature
      input.clear(); //feature
      // onCreate(value);
      // setValue("");
    }
  }

  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={submitHandler}>
      {/* <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input> */}
      <input {...input.bind}></input>
      <button type="submit">Add Todo</button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
