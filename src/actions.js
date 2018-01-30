export const SUBMIT_GUESS = 'SUBMIT_GUESS';
export const submitGuess = guess => ({
  type: SUBMIT_GUESS,
  guess,
});

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({ type: NEW_GAME });
