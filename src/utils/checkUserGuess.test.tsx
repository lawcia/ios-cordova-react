import { checkUserGuess } from "./checkUserGuess";

describe("checkUserGuess", () => {
  test("if letter is not in word of the day return grey", () => {
    const wordOfTheDay = "U";
    const userGuess = "L";
    const colourResult = checkUserGuess(wordOfTheDay, userGuess);
    expect(colourResult).toHaveLength(1);
    expect(colourResult[0].letter).toBe("L");
    expect(colourResult[0].colour).toEqual("grey");
  });

  test("if letter is in word of the day return green", () => {
    const wordOfTheDay = "L";
    const userGuess = "L";
    const colourResult = checkUserGuess(wordOfTheDay, userGuess);
    expect(colourResult).toHaveLength(1);
    expect(colourResult[0].letter).toEqual("L");
    expect(colourResult[0].colour).toEqual("green");
  });

  test("if letter is in word of the day but in the wrong position return yellow", () => {
    const wordOfTheDay = "TON";
    const userGuess = "NOT";
    const colourResult = checkUserGuess(wordOfTheDay, userGuess);
    expect(colourResult).toHaveLength(3);
    expect(colourResult[0].letter).toEqual("N");
    expect(colourResult[0].colour).toEqual("yellow");
    expect(colourResult[2].letter).toEqual("T");
    expect(colourResult[2].colour).toEqual("yellow");
  });

  test("if letter is in word of the day is ELATE and guess is TREES should calculate correclty", () => {
    const wordOfTheDay = "ELATE";
    const userGuess = "TREES";
    const colourResult = checkUserGuess(wordOfTheDay, userGuess);
    expect(colourResult).toHaveLength(5);
    expect(colourResult).toEqual([
        {
            letter: "T",
            colour: "yellow"
        },
        {
            letter: "R",
            colour: "grey"
        },
        {
            letter: "E",
            colour: "yellow"
        },
        {
            letter: "E",
            colour: "yellow"
        },
        {
            letter: "S",
            colour: "grey"
        }
    ])
  });

  test("if letter is in word of the day is TREES and guess is ELATE should calculate correclty", () => {
    const wordOfTheDay = "TREES";
    const userGuess = "ELATE";
    const colourResult = checkUserGuess(wordOfTheDay, userGuess);
    expect(colourResult).toHaveLength(5);
    expect(colourResult).toEqual([
        {
            letter: "E",
            colour: "yellow"
        },
        {
            letter: "L",
            colour: "grey"
        },
        {
            letter: "A",
            colour: "grey"
        },
        {
            letter: "T",
            colour: "yellow"
        },
        {
            letter: "E",
            colour: "yellow"
        }
    ])
  });


});
