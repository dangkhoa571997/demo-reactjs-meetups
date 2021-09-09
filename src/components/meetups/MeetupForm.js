import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './MeetupForm.module.css';

function MeetupForm(props) {
	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();
	const descInputRef = useRef();

	function submitHandler(event) {
		event.preventDefault();
		const meetupData = {
			title: titleInputRef.current.value,
			image: imageInputRef.current.value,
			address: addressInputRef.current.value,
			description: descInputRef.current.value,
		};
		props.onData(meetupData);
	}

	return (
		<Card>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor="title">Meetup Title</label>
					<input type="text" required id="title" ref={titleInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="image">Meetup Image</label>
					<input type="url" required id="image" ref={imageInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="address">Address</label>
					<input type="text" required id="address" ref={addressInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="desc">Description</label>
					<textarea rows="5" required id="desc" ref={descInputRef} />
				</div>
				<div className={classes.actions}>
					<button>Add Meetup</button>
				</div>
			</form>
		</Card>
	);
}

export default MeetupForm;
