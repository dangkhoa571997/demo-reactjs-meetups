import { createContext, useState } from 'react';

const FavoriteContext = createContext({
	favorites: [],
	totalFavorites: 0,
	addFavorite: (meetup) => {},
	removeFavorite: (meetupId) => {},
	itemIsFavorite: (meetupId) => {},
});

export function FavoriteContextProvider(props) {
	const [favorites, setFavorites] = useState([]);

	function addFavoriteHandler(meetup) {
		setFavorites((preFavorites) => {
			return preFavorites.concat(meetup);
		});
	}

	function removeFavoriteHandler(meetupId) {
		setFavorites((preFavorites) => {
			return preFavorites.filter((meetup) => meetup.id !== meetupId);
		});
	}

	function itemIsFavoriteHandler(meetupId) {
		return favorites.some((meetup) => meetup.id === meetupId);
	}

	const context = {
		favorites,
		totalFavorites: favorites.length,
		addFavorite: addFavoriteHandler,
		removeFavorite: removeFavoriteHandler,
		itemIsFavorite: itemIsFavoriteHandler,
	};

	return <FavoriteContext.Provider value={context}>{props.children}</FavoriteContext.Provider>;
}

export default FavoriteContext;
