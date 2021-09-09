import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import { useContext } from 'react';
import FavoriteContext from '../../store/FavoriteContext';

function MeetupItem(props) {
	const { meetup } = props;
	const favoriteCtx = useContext(FavoriteContext);

	const itemIsFavorite = favoriteCtx.itemIsFavorite(meetup.id);

	function toggleFavoriteStatusHandler() {
		if (itemIsFavorite) {
			favoriteCtx.removeFavorite(meetup.id);
		} else {
			favoriteCtx.addFavorite({ ...meetup });
		}
	}

	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					<img src={meetup.image} alt={meetup.title} />
				</div>
				<div className={classes.content}>
					<h3>{meetup.title}</h3>
					<p>{meetup.address}</p>
					<p>{meetup.description}</p>
				</div>
				<div className={classes.actions}>
					<button onClick={toggleFavoriteStatusHandler}>
						{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
					</button>
				</div>
			</Card>
		</li>
	);
}

export default MeetupItem;
