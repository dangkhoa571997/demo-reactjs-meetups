import classes from './MeetupItem.module.css';
import Card from '../ui/Card';

function MeetupItem(props) {
	const { meetup } = props;
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
					<button>To Favorite</button>
				</div>
			</Card>
		</li>
	);
}

export default MeetupItem;
