export const SET_ALL_FALSE = 'SET_ALL_FALSE';
export const setAllFalse = () => ({
  type: SET_ALL_FALSE
});

export const SET_TOP_TRUE = 'SET_TOP_TRUE';
export const setTopTrue = (selector) => ({
  type: SET_TOP_TRUE,
  selector
});

export const SET_MID_TRUE = 'SET_MID_TRUE';
export const setMidTrue = (selector) => ({
  type: SET_MID_TRUE,
  selector
});

export const SET_BOT_TRUE = 'SET_BOT_TRUE';
export const setBotTrue = (selector) => ({
  type: SET_BOT_TRUE,
  selector
});

export const INCREASE_DIFFICULTY = 'INCREASE_DIFFICULTY';
export const increaseDifficulty = () => ({
  type: INCREASE_DIFFICULTY
});

export const RESET_DIFFICULTY = 'RESET_DIFFICULTY';
export const resetDifficulty = () => ({
  type: RESET_DIFFICULTY
});

export const RESET_ANSWER_KEY = 'RESET_ANSWER_KEY';
export const resetAnswerKey = () => ({
  type: RESET_ANSWER_KEY
});