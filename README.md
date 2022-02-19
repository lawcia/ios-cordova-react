3 states:
- correct letter and correct position (green)
- correct letter and wrong position (yellow)
- wrong letter and wrong position (grey)

6 guesses
5 letters in a word

Generate a 5 letter secret word for each round
Another state for the 5 letter word the user guesses

const c = (wordOfTheDay, userGuess) => {
 // dictionary data structure

 let dictionary = {
     //ULTRA
     U: 0,
     L: 1,
     T: 2,
     R: 3,
     A: 4
 }

// After user inputs all 5 letters, check each letter and verify against the 3 states
 // loop through userGuessWord
 // e.g. RAISE
 foreach(let word in dictionary) {
     // if word and index same, return green
     // if userGuessWord in dictionary but index different, return yellow
     // if undefined, return grey
 }
}

let colourState = [
    {letter: R, colour: yellow},
    {letter: A, colour: yellow},
    {letter: I, colour: grey},
    {letter: S, colour: grey},
    {letter: E, colour: grey}
]

Visualise state in UI# wordle
