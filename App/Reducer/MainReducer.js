import { combineReducers } from 'redux';
import ContactReducer from '../Components/ContactComponent/ContactReducer';
import ServivePreferenceReducer from '../Components/ServicePreferenceComponent/ServicePreferenceReducer';

export default combineReducers({

	contactReducer: ContactReducer,
	servivePreferenceReducer:ServivePreferenceReducer
	

});