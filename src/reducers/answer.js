const initialAnswer = {
  '3bet': [],
  '4bet': [],
  allin: [],
  check: [],
  iso: [],
  isos: [],
  fold: [],
  limp: [],
  raise: [],
  raise3: [],
  raise4: [],
  raise5: [],
  raise6: [],
  raise7: [],
};

const updateAnswer = (state, action) => {
  if (state === undefined) {
    return {...initialAnswer};
  }

  switch (action.type) {
    case 'ANSWER_UPDATE_HAND':
      return updateHands(state, action.payload);
    case 'ANSWER_DELETE_ALL':
      return { ...initialAnswer};
    default: return state.answer;
  }
}

export default updateAnswer;

function updateHands(state, hand) {
  const { answer, flag } = state;
  const idx = answer[flag].indexOf(hand);
  let newArray = [];

  //checking if we already added this hand to another property
  for (let p in answer) {
    if (answer[p].indexOf(hand) >= 0) {
      newArray = [
        ...answer[p].slice(0, answer[p].indexOf(hand)),
        ...answer[p].slice(answer[p].indexOf(hand) + 1)
      ];
      return {
        ...answer,
        [p]: newArray
      }
    }
  }
  
  if (idx === -1) {
    newArray = [...answer[flag], hand];
    return {
      ...answer,
      [flag]: newArray
    }
  } else {
    newArray = [
      ...answer[flag].slice(0, idx),
      ...answer[flag].slice(idx + 1)
    ];
    return {
      ...answer,
      [flag]: newArray
    }
  }
}
