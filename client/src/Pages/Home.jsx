import "./Home.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = ({ country, user }) => {
  // get the capital from the country object in the database
  const answer = country.capital;
  // set the number of guesses to 6
  const [guesses, setGuesses] = useState(6);
  // use useEffect to stop the guess counter going any lower if they continue to guess after 0 guesses
  useEffect(() => {
    if (guesses < 0) {
      setGuesses(0);
    }
  }, [guesses]);
  // set the capital to the answer from the database
  const [capital, setCapital] = useState("");

  // Feedback message for the user
  const [feedback, setFeedback] = useState("");

  // Description of capital city
  const descriptionDB = country.description;
  const [description, setDescription] = useState("");

  // was user correct or not
  // eslint-disable-next-line
  const [correct, setCorrect] = useState(false);

  // check if user has completed the quiz today

  // check the answer in the form submission
  const checkAnswer = (e) => {
    e.preventDefault();
    // if the capital is correct, alert the user
    if (capital.toLowerCase() === answer.toLowerCase()) {
      setFeedback(
        `Well done! The capital of ${country.name} is ${answer}! Try again tomorrow!`
      );
      setDescription(descriptionDB);
      setGuesses(0);
      setCorrect(true);
      // run server side code to update the user's 'quiz_completed_today' column to true
      axios.put("/capital/quizCompleted", { user });
      // increment the streak column in the users table by 1
      axios.put("/capital/incrementStreak", { user });
      // update the best streak column in the users table if the current streak is greater than the best streak
      axios.put("/capital/updateBestStreak", { user });
    } else {
      // if the capital is incorrect, decrement the guesses by 1
      setGuesses(guesses - 1);
      if (guesses === 6) {
        console.log("First guess");
        setCapital("");
      }
      if (guesses === 5) {
        console.log("Second guess");
        setCapital("");
      }
      if (guesses === 4) {
        console.log("Third guess");
        setCapital("");
      }
      if (guesses === 3) {
        console.log("Fourth guess");
        setCapital("");
      }
      if (guesses === 2) {
        console.log("Fifth guess");
        setCapital("");
      }
      if (guesses === 1) {
        // if the guesses reach 0, alert the user with the correct answer
        setFeedback(
          `Unlucky! The capital of ${country.name} is '${answer}'! Try again tomorrow!`
        );
        setCapital("");
        setDescription(descriptionDB);
        setCorrect(false);
        // run server side code to update the user's 'quiz_completed_today' column to true
        axios.put("/capital/quizCompleted", { user });
        // reset the streak column in the users table to 0
        axios.put("/capital/resetStreak", { user });
        // THIS CODE RESETS THE GAME AFTER A CORRECT GUESS. ONLY USED FOR TESTING.
        // TODO - RESET THE GAME EVERY 24 HOURS
        // setGuesses(6);
        // setCapital("");
      }
    }
  };

  return (
    <div className="home">
      <h1 className="homeTitle">Guess the Capital</h1>
      {country && <h1 className="countryName">{country.name}</h1>}
      <img className="flag" src={country.flag} alt="Todays flag" />
      <h3 className="guessesRemaining">
        Guesses remaining: <span className="guessesRed">{guesses}</span>
      </h3>
      {feedback && <h3>{feedback}</h3>}
      {description && <p>{description}</p>}
      <form className="guessForm" onSubmit={checkAnswer}>
        <input
          className="guessInput"
          type="text"
          placeholder="Enter the name of the Capital here"
          value={capital}
          onChange={(e) => setCapital(e.target.value)}
        />
      </form>
      {guesses < 6 && (
        <table class="table">
          <thead>
            <tr>
              <th>Hints</th>
            </tr>
          </thead>
          <tbody>
            {guesses <= 5 && <tr>{country && <td>{country.hint1}</td>}</tr>}
            {guesses <= 4 && <tr>{country && <td>{country.hint2}</td>}</tr>}
            {guesses <= 3 && <tr>{country && <td>{country.hint3}</td>}</tr>}
            {guesses <= 2 && <tr>{country && <td>{country.hint4}</td>}</tr>}
            {guesses <= 1 && <tr>{country && <td>{country.hint5}</td>}</tr>}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
