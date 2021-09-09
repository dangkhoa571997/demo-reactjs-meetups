import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
	const { meetups } = props;
	return (
		<ul className={classes.list}>
			{meetups.map((meetup) => (
				<MeetupItem key={meetup.id} meetup={meetup} />
			))}
		</ul>
	);
}

export default MeetupList;
