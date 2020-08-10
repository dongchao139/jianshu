import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchDatas(action) {
    const resp = yield axios.get('/info/details.json');
    console.log(action.payload);
    yield put({
        type: 'initDetailDatas',
        payload: resp.data.data
    });
}

function* mySaga() {
    yield takeEvery('getDatas', fetchDatas);
}

export default mySaga;