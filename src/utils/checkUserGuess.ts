import { LetterColourPair, LetterColourArray } from "./models";

export const checkUserGuess = (
  wordOfTheDay: string,
  userGuess: string
): LetterColourArray => {
  // convert string to dictionary
  // "ULTRA" => object
  const wordOfTheDayArray = wordOfTheDay.split("");

  const wordOfTheDayObj: { [x: string]: number } = {};
//{U: {0, 1, 2}, L: {7}, T, R: }
  wordOfTheDayArray.forEach((char, index) => {
    wordOfTheDayObj[char] = index;
  });

  const userGuessArray = userGuess.split("");
  // ["R", "A", "I", "S", "E"]

  let colourStateArray: LetterColourArray = [];

  userGuessArray.forEach((guessChar, guessIndex) => {
    let pair: LetterColourPair = {
      letter: guessChar,
      colour: "grey",
    }; 

    if (guessChar in wordOfTheDayObj) {
      const wordOfTheDayIndex = wordOfTheDayObj[guessChar];
      if (wordOfTheDayIndex === guessIndex) {
        pair = {
          letter: guessChar,
          colour: "green",
        };
      } else {
        pair = {
          letter: guessChar,
          colour: "yellow",
        };
      }
    }

    colourStateArray.push(pair);
  });

  return colourStateArray;

  // if word and index same, return green
  // if userGuessWord in dictionary but index different, return yellow
  // if undefined, return grey
};
