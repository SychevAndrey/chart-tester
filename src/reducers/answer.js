const updateAnswer = (state, action) => {
  if (state === undefined) {
    return {
      allin: [],
      fold: [],
      raise: [],
      iso: [],
      isos: [],
    }
  }

  switch (action.type) {
    case 'ANSWER_UPDATE_HAND':
      return updateHands(state, action.payload);
    default: return state.answer;
  }
}

export default updateAnswer;

function updateHands(state, hand) {
  const { answer, flag } = state;
  console.log(answer, flag)
  const idx = answer[flag].indexOf(hand);
  
  if (idx === -1) {
    const newArray = [...answer[flag], hand];
    return {
      ...answer,
      [flag]: newArray
    }
  } else {
    const newArray = [
      ...answer[flag].slice(0, idx),
      ...answer[flag].slice(idx + 1)
    ];
    return {
      ...answer,
      [flag]: newArray
    }
  }
}
