import {SET_ALL_FALSE, SET_TOP_TRUE, SET_MID_TRUE, SET_BOT_TRUE, INCREASE_DIFFICULTY, RESET_DIFFICULTY, RESET_ANSWER_KEY} from '../actions/actions';

const initialState = {
  top: false,
  middle: false,
  bottom: false,
  answerKey: [],
  difficulty: 3
};

export default function reducer(state=initialState, action) {
    if(action.type === SET_ALL_FALSE) {
        return {...state, top: false, middle: false, bottom: false}
    }
    else if(action.type === SET_TOP_TRUE) {
         return {...state, top: true, middle: false, bottom: false, answerKey: [...state.answerKey, action.selector]}
    }
    else if(action.type === SET_MID_TRUE) {
         return {...state, top: false, middle: true, bottom: false, answerKey: [...state.answerKey, action.selector]}
    }
    else if(action.type === SET_BOT_TRUE) {
         return {...state, top: false, middle: false, bottom: true, answerKey: [...state.answerKey, action.selector]}
    }
    else if(action.type === INCREASE_DIFFICULTY) {
         return {...state, top: false, middle: false, bottom: false, difficulty: state.difficulty + 1}
    }
    else if(action.type === RESET_DIFFICULTY) {
        return {...state, difficulty: 3, answerKey: []}
    }
    else if(action.type === RESET_ANSWER_KEY) {
        return {...state, answerKey: []}
    }
    return state;
}