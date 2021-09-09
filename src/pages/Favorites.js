import { useContext, useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import FavoriteContext from '../store/FavoriteContext';

function FavoritesPage() {
	const favoriteCtx = useContext(FavoriteContext);
	const [isLoading, setIsLoading] = useState(true);

	let content = <p>You got no favorites yet. Start adding some?</p>;

	if (favoriteCtx.totalFavorites > 0) {
		content = <MeetupList meetups={favoriteCtx.favorites} />;
	}

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsLoading(false);
		}, 500);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<section>
			<h1>Favorite Meetups</h1>
			{isLoading ? 'Loading...' : content}
		</section>
	);
}

export default FavoritesPage;
