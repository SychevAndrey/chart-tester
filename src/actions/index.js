export const handAddedtoAnswer = (hand) => {
  return {
    type: 'ANSWER_UPDATE_HAND',
    payload: hand,
  };
};

export const flagChanged = (flag) => {
  return {
    type: 'ANSWER_UPDATE_FLAG',
    payload: flag
  };
};
