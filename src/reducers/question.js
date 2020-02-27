let InitialQuestion = {};

Object.defineProperty(InitialQuestion, 'loading', {
  value: false,
  enumerable: false
});

Object.defineProperty(InitialQuestion, 'error', {
  value: null,
  enumerable: false,
})

const updateQuestion = (state, action) => {
  if (state === undefined) {
    return {
      ...InitialQuestion
    }
  }
  switch (action.type) {
    case 'FETCH_QUESTION_REQUEST':
      return {
        ...InitialQuestion,
        loading: true,
      };
    case 'FETCH_QUESTION_SUCCESS':
      const { ...props } = action.payload;
      return {
        ...props,
        ...InitialQuestion,
      };
    case 'FETCH_QUESTION_FAILURE':
      return {
        ...InitialQuestion,
        error: action.payload,
      };
    
    default: return state.question;
  }
}

export default updateQuestion;