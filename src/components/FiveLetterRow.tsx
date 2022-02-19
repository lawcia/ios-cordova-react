import { checkUserGuess } from "../utils/checkUserGuess";

interface FiveLetterRowProps {
  wordOfTheDay: string;
  userGuess: string;
  guessed: boolean;
}

const FiveLetterRow: React.FC<FiveLetterRowProps> = ({
  wordOfTheDay,
  userGuess,
  guessed,
}) => {
    const notGuessedArray = [null, null, null, null, null]

  if(!guessed){
      return <ul className="five-letter-row">
          {notGuessedArray.map((letter) => {
              if (letter === null){
                 return <li className="empty-black">
                       
                  </li>
              }
              return <></>
          })}
      </ul>
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
