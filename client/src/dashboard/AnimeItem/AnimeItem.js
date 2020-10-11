import React from 'react';
import './AnimeItem.scss'

const AnimeItem = ({anime}) => {
	return (
		<a className="anime-item" href={anime.url}>
			<div className="anime-item__overlay"></div>
			<div className="anime-item__score">{anime.score}</div>
			<img
				className="anime-item__image"
				src={anime.image_url}
				alt={anime.title}
				crossOrigin="anonymous"
			/>
			<div className="anime-item__title">
				{anime.title}
			</div>
		</a>
	)
}

export default React.memo(AnimeItem)