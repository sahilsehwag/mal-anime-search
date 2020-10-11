import React,{
	useState,
	useEffect,
} from 'react';
import {
	useDispatch,
	useSelector,
} from 'react-redux'

import { searchAnimes } from 'dashboard/actions'
import AnimeList from 'dashboard/AnimeList/AnimeList'

import './Dashboard.scss'

const Dashboard = () => {
	const [page, setPage]   = useState(1)
	const [query, setQuery] = useState('')

	const animes   = useSelector(state => state.dashboard.animes)
	const url      = useSelector(state => state.dashboard.url)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(searchAnimes(query, page))
	}, [dispatch, page])

	const loadMoreHandler = _ => setPage(page+1)
	const searchHandler   = _ => page !== 1 ? setPage(1) : dispatch(searchAnimes(query, page))

	const keyupHandler = e => {
		if (e.keyCode === 13)
			page !== 1 ? setPage(1) : dispatch(searchAnimes(query, page))
	}

	return (
		<div className="dashboard">
			<h1 className="title">Anime Search</h1>
			<div className="-l-search-anime">
				<div className="search-anime">
					<input
						className="search-anime__input"
						type="text"
						onChange={e => setQuery(e.target.value)}
						onKeyUp={keyupHandler}
						value={query}
					/>
					<div
						className="search-anime__button"
						onClick={searchHandler}
					>
						Go
					</div>
				</div>
				<div className="request-url">Requesting: <b>{url}</b></div>
			</div>
			<AnimeList/>
			{animes.length !== 0 && <div className="load-more" onClick={loadMoreHandler}>Load More...</div>}
		</div>
	);
}

export default Dashboard;
