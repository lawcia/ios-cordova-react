import { useState } from "react";
import "./App.css";
import FiveLetterRow from "./components/FiveLetterRow";

function App() {
  const [row0Guess, setRow0Guess] = useState("H");
  const [row1Guess, setRow1Guess] = useState("");
  const [row2Guess, setRow2Guess] = useState("");
  const [row3Guess, setRow3Guess] = useState("");
  const [row4Guess, setRow4Guess] = useState("");
  const [currentRow, setCurrentRow] = useState(0);
  const wordOfTheDay = "ULTRA";

  return (
    <div className="App">
      <FiveLetterRow
        guessed={currentRow > 0}
        userGuess={row0Guess}
        wordOfTheDay={wordOfTheDay}
      />
      <FiveLetterRow
        guessed={currentRow > 1}
        userGuess={row1Guess}
        wordOfTheDay={wordOfTheDay}
      />
      <FiveLetterRow
        guessed={currentRow > 2}
        userGuess={row2Guess}
        wordOfTheDay={wordOfTheDay}
      />
      <FiveLetterRow
        guessed={currentRow > 3}
        userGuess={row3Guess}
        wordOfTheDay={wordOfTheDay}
      />
      <FiveLetterRow
        guessed={currentRow > 4}
        userGuess={row4Guess}
        wordOfTheDay={wordOfTheDay}
      />
    </div>
  );
}

export default App;
