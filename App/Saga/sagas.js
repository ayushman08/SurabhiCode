import { put, call, takeEvery, takeLatest, select, cps } from 'redux-saga/effects';
import API from '../Constants/APIUrls';
import API_CONST from '../Constants/APIConstants';
import ACTION_TYPES from '../Action/ActionTypes';


//Call for fetching data from api
const _apiCall = (url, data) => {
	console.log('Api request',data);
	return fetch(url, data)
		.then((res) => {
			console.log('Api response',res);
			return { res: res, res_json: res.json() };
		})
		.catch((e) => {
			throw e;
		});
};

const _woocomerce = (url) => {
	console.log('Api request',url);
	return Api.get(url)
	.then((data) => {
		console.log("DATA>>>>> "+JSON.stringify(data));
		return data;
	})
	.catch((e) => {
		throw e;
	});
}

//get response json
const _extJSON = (p) => {
	return p.then((res) => res);
};

function* userSignup(action) {
    var postData = action.data;
    console.log("Post data>>>>"+postData)
	try {
		let response = yield call(_apiCall, API.SIGNUP_USER, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(postData)
		});
        var responseJSON = yield call(_extJSON, response.res_json);
        console.log(responseJSON)
		yield put({
			type: ACTION_TYPES.SIGNUP_USER_RES,
			payload: responseJSON
		});
	} catch (e) {
		console.log('Error: ' + e);
	}
}

function* sendServicePreference(action) {
    var postData = action.data;
    console.log("Post data>>>>"+postData)
	try {
		let response = yield call(_apiCall, API.SIGNUP_USER, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(postData)
		});
        var responseJSON = yield call(_extJSON, response.res_json);
        console.log(responseJSON)
		yield put({
			type: ACTION_TYPES.SERVICE_PREF_RES,
			payload: responseJSON
		});
	} catch (e) {
		console.log('Error: ' + e);
	}
}



function* rootSaga() {

	//Login
	yield takeLatest(API_CONST.N_USER_SIGNUP, userSignup);
	yield takeLatest(API_CONST.N_SERVICE_PREF, sendServicePreference);


}

export default rootSaga;
