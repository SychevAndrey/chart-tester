export const handAddedtoAnswer = (hand) => {
  return {
    type: 'ANSWER_UPDATE_HAND',
    payload: hand,
  };
};

export const clearAnswer = () => {
  return {
    type: 'ANSWER_DELETE_ALL'
  };
};

export const flagChanged = (flag) => {
  return {
    type: 'ANSWER_UPDATE_FLAG',
    payload: flag
  };
};

export const chartFetched = (question) => {
  return {
    type: 'FETCH_QUESTION_SUCCESS',
    payload: question,
  }
}