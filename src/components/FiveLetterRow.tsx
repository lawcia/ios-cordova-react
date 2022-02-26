import { checkUserGuess } from "../utils/checkUserGuess";

interface FiveLetterRowProps {
  wordOfTheDay: string;
  userGuess: string;
  completed: boolean;
}

const FiveLetterRow: React.FC<FiveLetterRowProps> = ({
  wordOfTheDay,
  userGuess,
  completed,
}) => {
  const notGuessedArray = [null, null, null, null, null];
  const userGuessArray = Array.from(userGuess);

  if (!completed) {
    return (
      <ul className="five-letter-row">
        {notGuessedArray.map((letter, index) => {
          if (userGuessArray.length > index) {
            return (
              <li key={index} className="empty-black">
                {userGuessArray[index]}
              </li>
            );
          }
          return <li key={index} className="empty-black"></li>;
        })}
      </ul>
    );
  }

  const letterColourArray = checkUserGuess(wordOfTheDay, userGuess);

  return (
    <ul className="five-letter-row">
      {letterColourArray.map((obj) => (
        <li className={obj.colour}>{obj.letter}</li>
      ))}
    </ul>
  );
};

export default FiveLetterRow;
