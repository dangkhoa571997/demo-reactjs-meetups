import { useHistory } from 'react-router-dom';

import MeetupForm from '../components/meetups/MeetupForm';

function NewMeetupPage() {
	const history = useHistory();
	function addMeetupHandler(meetupData) {
		fetch('https://deme-reactjs-meetups-default-rtdb.firebaseio.com/meetups.json', {
			method: 'POST',
			body: JSON.stringify(meetupData),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(() => {
			history.replace('/');
		});
	}

	return (
		<div>
			<h1>New Meetup</h1>
			<MeetupForm onData={addMeetupHandler} />
		</div>
	);
}

export default NewMeetupPage;
