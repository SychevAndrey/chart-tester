const updateQuestion = (state, action) => {
  if (state === undefined) {
    return {
      allin: [],
      fold: [],
      raise: [],
      iso: [],
      isos: [],
      loading: true,
      error: null,
    }
  }
  switch (action.type) {
    case 'FETCH_QUESTION_REQUEST':
      return {
        allin: [],
        fold: [],
        raise: [],
        iso: [],
        isos: [],
        loading: true,
        error: null
      };
    case 'FETCH_QUESTION_SUCCESS':
      const { allin, fold, raise, iso, isos } = action.payload;
      return {
        allin,
        fold,
        raise,
        iso,
        isos,
        loading: false,
        error: null,
      };
    case 'FETCH_QUESTION_FAILURE':
      return {
        allin: [],
        fold: [],
        raise: [],
        iso: [],
        isos: [],
        loading: false,
        error: action.payload,
      };
    
    default: return state.question;
  }
}

export default updateQuestion;