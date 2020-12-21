import React from 'react';
import { StateContext } from '../State';
import '../App.css';


const SubmitView = () => {
	const context = React.useContext(StateContext);
	const [ componentState, setComponentState ] = React.useState({
		groupID: 1,
		categoryID: 1,
		title: '',
		description: '',
		submittedBy: context.user.id
	});

	const handleSubmitTicket = async () => {
		var response = await fetch(`http://localhost:8080/tickets`, {
			method: 'POST',
			headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
			body: JSON.stringify(componentState)
		});

		var data = await response.json();

		// TODO: Show an alert with ticket submission status
	}

	const handleGroupSelected = (event) => {
		setComponentState({
			...componentState,
			groupID: Number(event.target.value)
		});
	}

	const handleCategorySelected = (event) => {
		setComponentState({
			...componentState,
			categoryID: Number(event.target.value)
		});
	}

	const handleChange = (event) => {
		setComponentState({
			...componentState,
			[event.target.name]: event.target.value
		});
	}

	return (
		<div className='submit-view'>
			<div id='submit-form'>
				<label htmlFor='organization'>Organization:</label>
				<select name='groupID' id='organization'>
					{
						!context.user.groups
						? null
						: context.user.groups.map(group => (
							<option key={ group.id } value={ group.id }
								onClick={ handleGroupSelected }>
								{ group.name }
							</option>
						))
					}
				</select>

				<label htmlFor='category'>Category:</label>
				<select name='categoryID' id='category'>
					{
						componentState.groupID === undefined
						? null
						: context.user.groups[componentState.groupID - 1]
							.categories.map(category => {
							return (
								<option key={ category.id } value={ category.id }
									onClick={ handleCategorySelected }>
									{ category.name }
								</option>
							);
						})
					}
				</select>

				<label htmlFor='title'>Title:</label>
				<input type='text' name='title' onChange={ handleChange } />

				<label htmlFor='description'>Description:</label>
				<textarea type='text' name='description' onChange={ handleChange } />

				<button type='submit' onClick={ handleSubmitTicket }>Submit</button>
			</div>
		</div>
	);
}

export default SubmitView;
