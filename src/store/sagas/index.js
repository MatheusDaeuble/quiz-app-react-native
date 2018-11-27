import { all, takeLatest } from 'redux-saga/effects';

import { Types as QuizTypes } from 'store/ducks/quiz';
import { getQuiz} from './quiz';

export default function* rootSaga(){
  return yield all([
    takeLatest(QuizTypes.GET_REQUEST, getQuiz),
  ]);
}
