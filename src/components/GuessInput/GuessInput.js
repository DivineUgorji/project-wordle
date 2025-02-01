import React from "react";

function GuessInput() {
  const [inputTerm, setInputTerm] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (inputTerm.length !== 5) {
      window.alert("Please enter exactly 5 characters 💖");
      return;
    }

    console.log({ inputTerm });
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter Guess:</label>
        <input
          required
          minLength={5}
          maxLength={5}
          className="guess-input"
          type="text"
          value={inputTerm}
          onChange={(event) => {
            setInputTerm(event.target.value.toLocaleUpperCase());
            console.log(inputTerm);
          }}
        ></input>
      </form>
    </>
  );
}

export default GuessInput;
