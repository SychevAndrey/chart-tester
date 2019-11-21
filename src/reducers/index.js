import updateAnswer from './answer';
import updateQuestion from './question';

export const reducer = (state, action) => {
  return {
    question: updateQuestion(state, action),
    answer: updateAnswer(state, action),
    flag: updateFlag(state, action),
  }
};


const updateFlag = (state , action) => {
  if (action.type === "ANSWER_UPDATE_FLAG") {
    return action.payload ;
  }
  if (state === undefined) {
    return "allin";
  }
  return state.flag;
}
