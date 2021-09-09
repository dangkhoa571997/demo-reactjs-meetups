import MeetupList from '../components/meetups/MeetupList';
import { useState, useEffect } from 'react';

function AllMeetupsPage() {
	const [isLoading, setIsLoading] = useState(true);
	const [loadedMeetups, setLoadedMeetups] = useState([]);

	useEffect(() => {
		return fetch('https://deme-reactjs-meetups-default-rtdb.firebaseio.com/meetups.json')
			.then((response) => response.json())
			.then((data) => {
				const parsedMeetups = (Object.keys(data) || []).map((key) => {
					const meetup = {
						id: key,
						...data[key],
					};
					return meetup;
				});
				setIsLoading(false);
				setLoadedMeetups(parsedMeetups);
			});
	}, []);

	return (
		<section>
			<h1>All Meetups</h1>
			{isLoading ? <p>Loading...</p> : <MeetupList meetups={loadedMeetups} />}
		</section>
	);
}

export default AllMeetupsPage;
