import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SongList from './components/SongList';
import SongListHeading from './components/SongListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';
import SongPlayer from './components/SongPlayer';
import axios from "axios";

const App = () => {
	const [songs, setSongs] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	// const [songUrl, setSongUrl] = useState('https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3c/82/ea/3c82ea38-65e5-6c19-b8ff-3cd1687d7e4e/mzaf_10323297497082452419.plus.aac.ep.m4a');
	const [songUrl, setSongUrl] = useState('');

	const options = {
		method: 'GET',
		url: 'https://shazam-core.p.rapidapi.com/v1/search/multi',
		params: {offset: '10', query: `${searchValue}`, search_type: 'SONGS_ARTISTS'},
		headers: {
		
		  'X-RapidAPI-Key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA',
		  'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
	  }
	};

	const getSongRequest = (searchValue) => {
		axios.request(options).then(function (response) {
			if (response.data.tracks) {	
		  		setSongs(response.data.tracks.hits);
			}
		  	// console.log(response.data.tracks.hits[0].track.images.background);
		  	}).catch(function (error) {
			console.error(error);
		  	}
		);
	  }

	useEffect(() => {
		getSongRequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		const songFavourites = JSON.parse(
			localStorage.getItem('react-song-app-favourites')
		);

		if (songFavourites) {
			setFavourites(songFavourites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-song-app-favourites', JSON.stringify(items));
	};

	const addFavouriteSong = (song) => {
		const newFavouriteList = [...favourites, song];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavouriteSong = (song) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.track !== song.track
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const handleUrl = (song) => {

		// const songUrl = 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3c/82/ea/3c82ea38-65e5-6c19-b8ff-3cd1687d7e4e/mzaf_10323297497082452419.plus.aac.ep.m4a';
		setSongUrl(song.track.hub.actions[1].uri);
	};

	return (
		<div className='container-fluid song-app'>
		
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<SongListHeading heading='My Music Collection' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<SongList
					songs={songs}
					handleUrl = {handleUrl}
					handleFavouritesClick={addFavouriteSong}
					favouriteComponent={AddFavourites}
				/>
			</div>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<SongListHeading heading='Favourites' />
			</div>
			<div className='row'>
				<SongList
					handleUrl = {handleUrl}
					songs={favourites}
					handleFavouritesClick={removeFavouriteSong}
					favouriteComponent={RemoveFavourites}
					
				/>

			</div>
			<div>
				{/* <SongPlayer songUrl={'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3c/82/ea/3c82ea38-65e5-6c19-b8ff-3cd1687d7e4e/mzaf_10323297497082452419.plus.aac.ep.m4a'}/> */}
			
				<SongPlayer 
					songs = {songs}
					// handleUrl = {handleUrl}
					songUrl={songUrl} />
				
			</div>

		</div>
		
	);
};

export default App;
