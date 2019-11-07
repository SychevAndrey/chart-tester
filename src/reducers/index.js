const initialState = {
  question: {
    allin: [],
  },
  answer: {
    allin: [],
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ALLIN':
      const newState = state.answer.allin.push(action.payload)
      return {
        newState
      }
      default: return state;
  }
};