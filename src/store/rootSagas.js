import headerSagas from '../common/header/store/headerSagas';
import homeSagas from '../pages/home/store/homeSaga';
import detailSaga from '../pages/detail/store/detailSaga';
import loginSaga from '../pages/login/store/loginSaga';
import {all} from 'redux-saga/effects';

const rootSaga = function*() {
  yield all([
    headerSagas(), homeSagas(), detailSaga(), loginSaga()
  ])
}
export default rootSaga;