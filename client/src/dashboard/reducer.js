import actions from './types'

export default (state={
	animes: [],
	url: '',
}, action) => {
	switch (action.type){
		case actions.SET_URL:
		case actions.SET_ANIMES:
			return {
				...state,
				...action.payload
			}
		case actions.APPEND_ANIMES:
			return {
				...state,
				animes: [...state.animes, ...action.payload.animes],
			}
		default: return state
	}
}