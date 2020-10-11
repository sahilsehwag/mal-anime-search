import actions from './types'

export const setLoading = loading => ({
	type: actions.SET_LOADING,
	payload: { loading },
})

export const setError = error => ({
	type: actions.SET_ERROR,
	payload: { error },
})