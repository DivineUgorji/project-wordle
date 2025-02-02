import React from "react";

function GuessInput({ handleSubmitGuess }) {
  // const [guess, setGuess] = React.useState("");
  const [tentativeGuess, setTentativeGuesses] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (tentativeGuess.length !== 5) {
      window.alert("Please enter exactly 5 characters 💖");
      return;
    }

    handleSubmitGuess(tentativeGuess);

    // console.log({ inputTerm });
    setTentativeGuesses("");
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
          value={tentativeGuess}
          onChange={(event) => {
            setTentativeGuesses(event.target.value.toUpperCase());
          }}
        ></input>
      </form>
    </>
  );
}

export default GuessInput;
