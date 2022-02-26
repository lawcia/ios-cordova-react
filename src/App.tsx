import { useState } from "react";
import "./App.css";
import FiveLetterRow from "./components/FiveLetterRow";
import Keyboard from "./components/Keyboard";

function App() {
  const [rowGuess, setRowGuess] = useState<string[]>([]);
  const [currentRow, setCurrentRow] = useState<number>(0);
  const wordOfTheDay = "ULTRA";

  const handleKeyPress = (letter: string) => {
    if (letter !== "ENTER" && rowGuess.length === 0) {
      setRowGuess([letter]);
    } else if (currentRow >= 0) {
      if (letter !== "ENTER" && rowGuess[currentRow].length < 5) {
        const copy = [...rowGuess];
        copy[currentRow] += letter;
        setRowGuess(copy);
      } else if (letter === "ENTER") {
        setCurrentRow(currentRow + 1);
        setRowGuess([...rowGuess, ""]);
      }
    }
  };

  return (
    <div className="App">
      <FiveLetterRow
        completed={currentRow > 0 && rowGuess[0].length === 5}
        userGuess={rowGuess.length > 0 ? rowGuess[0] : ""}
        wordOfTheDay={wordOfTheDay}
      />
      <FiveLetterRow
        completed={currentRow > 1}
        userGuess={rowGuess.length > 1 ? rowGuess[1] : ""}
        wordOfTheDay={wordOfTheDay}
      />
      <FiveLetterRow
        completed={currentRow > 2}
        userGuess={rowGuess.length > 2 ? rowGuess[2] : ""}
        wordOfTheDay={wordOfTheDay}
      />
      <FiveLetterRow
        completed={currentRow > 3}
        userGuess={rowGuess.length > 3 ? rowGuess[3] : ""}
        wordOfTheDay={wordOfTheDay}
      />
      <FiveLetterRow
        completed={currentRow > 4}
        userGuess={rowGuess.length > 4 ? rowGuess[4] : ""}
        wordOfTheDay={wordOfTheDay}
      />
      <Keyboard handleKeyPress={handleKeyPress} />
    </div>
  );
}

export default App;
