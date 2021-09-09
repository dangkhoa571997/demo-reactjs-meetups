import { Link } from 'react-router-dom';
import { useContext } from 'react';
import FavoriteContext from '../../store/FavoriteContext';

import classes from './MainNavigation.module.css';

function MainNavigation() {
	const favoriteCtx = useContext(FavoriteContext);

	return (
		<header className={classes.header}>
			<h1 className={classes.logo}>React Meetups</h1>
			<nav>
				<ul>
					<li>
						<Link to="/">All Meetups</Link>
					</li>
					<li>
						<Link to="/favorites">
							Favorites
							<span className={classes.badge}>{favoriteCtx.totalFavorites}</span>
						</Link>
					</li>
					<li>
						<Link to="/new-meetup">New Meetup</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
