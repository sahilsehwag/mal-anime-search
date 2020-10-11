import actions from './types'
import { setError } from 'common/actions'

export const searchAnimes = (query, page=1, limit=18) => {
	return async (dispatch) => {
		try {
			const URL = `https://api.jikan.moe/v3/search/anime?q=${query}&page=${page}`
			const response = await fetch(URL)
			const json = await response.json()

			if (page === 1)
				dispatch({
					type: actions.SET_ANIMES,
					payload: {animes: json.results}
				})
			else
				dispatch({
					type: actions.APPEND_ANIMES,
					payload: {animes: json.results}
				})

			dispatch({
				type: actions.SET_URL,
				payload: {url: URL}
			})
		} catch(e) {
			dispatch(setError(Error('Some error occured while fetching animes')))
		}
	}
}