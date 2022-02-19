type Colour = "grey" | "green" | "yellow";

type LetterColourArray = LetterColourPair[];

type LetterColourPair = { letter: string; colour: Colour };

export type { Colour, LetterColourArray, LetterColourPair };
