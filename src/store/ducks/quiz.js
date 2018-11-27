export const Types = {
  GET_REQUEST: 'quiz/GET_REQUEST',
  GET_SUCCESS: 'quiz/GET_SUCCESS',
};

const initialState = {
  questions: [],
  loading: false,

}

export default function quiz (state = initialState, action){
  switch(action.type){
    case Types.GET_REQUEST:
      return { ...state, loading: true };

    case Types.GET_SUCCESS:
      return {questions: action.payload.questions, loading: false };

    default:
      return state;
  }
};

export const Creators = {
  getQuizRequest: () => ({
    type: Types.GET_REQUEST,

  }),

  getQuizSuccess: questions  => ({
    type: Types.GET_SUCCESS,
    payload: { questions }
  })
};
