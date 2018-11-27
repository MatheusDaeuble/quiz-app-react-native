import api from 'services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as QuizActions } from 'store/ducks/quiz';

export function* getQuiz () {
  try{
    const response = yield call (api.get, '/quiz/' + Math.floor(Math.random() * (3) + 1));
    yield put(QuizActions.getQuizSuccess(response.data.questions));

  } catch (error) {
    yield put(QuizActions.getQuizSuccess([]));
  }
}
