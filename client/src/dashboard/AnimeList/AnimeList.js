import React,{
	useCallback,
} from 'react';
import {
	useSelector,
} from 'react-redux'

import './AnimeList.scss'
import AnimeItem from 'dashboard/AnimeItem/AnimeItem'


const AnimeList = () => {
	const animes   = useSelector(state => state.dashboard.animes)

	const renderAnimeItems = useCallback(() => {
		return animes.map(anime => {
			return <AnimeItem key={anime.mal_id} anime={anime}/>
		})
	}, [animes])

	return (
		<div className="anime-list">
			{renderAnimeItems()}
		</div>
	)
}

export default React.memo(AnimeList)