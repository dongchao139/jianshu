import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* doLogin(action) {
    try {
        const res = yield axios.get('/info/moreArticles.json',{account: action.account, pwd: action.pwd});
        const success = res.data.success;
        yield put({ type: 'doLogin', payload: success });
        
    } catch (e) {
        console.log(e);
    }
}

function* mySaga() {
    yield takeEvery('login', doLogin);
}

export default mySaga;