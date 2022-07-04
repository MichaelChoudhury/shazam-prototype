import React from 'react';

const SongList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.songs.map((song, index) => (
				<div className='image-container d-flex justify-content-start m-3'>

				<button onClick = {() => props.handleUrl(song)}>Play</button>

					<img src= {song.track.images.background} alt='song' width="280" height="280"></img>
				
					<div
						onClick={() => props.handleFavouritesClick(song)}
						className='overlay d-flex align-items-center justify-content-center'
					>
					
					<div>
					
					<p>{song.track.title}</p>
					{/* <p>{song.track.hub.actions[1].uri}</p> */}
					</div>

						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default SongList;