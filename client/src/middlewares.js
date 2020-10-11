import actions from 'common/types'

export const startLoader = store => next => action => {
	if (action.type !== actions.SET_LOADING) {
		store.dispatch({
			type: actions.SET_LOADING,
			payload: { loading: true }
		})
	}
	return next(action)
}

export const endLoader = store => next => action => {
	if (action.type !== actions.SET_LOADING) {
		store.dispatch({
			type: actions.SET_LOADING,
			payload: { loading: false }
		})
	}
	return next(action)
}