
import actions from './types'

export default (state={
	loading: false,
	error: null,
}, action) => {
	switch (action.type){
		case actions.SET_ERROR:
		case actions.SET_LOADING:
			return {
				...state,
				...action.payload
			}
		default: return state
	}
}