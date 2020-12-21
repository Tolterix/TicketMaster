import React from 'react';
import { StateContext } from '../State';
import '../App.css';


const SubmitView = () => {
	const context = React.useContext(StateContext);
	const [ groupCategories, setGroupCategories ] = React.useState([]);

	var groups = [
		{ id: 1, name: '363 ISRW', parentID: null },
		{ id: 2, name: '363 ISS', parentID: 1 },
		{ id: 3, name: 'Server Administration', parentID: 2 },
		{ id: 4, name: 'Client Systems', parentID: 2 },
		{ id: 2, name: '36 IS', parentID: 1 }
	];

	var parents = [];

	for (var group of groups) {
		if (group.parentID === null) {
			parents.push({
				id: group.id,
				name: group.name,
				children: []
			});

			continue;
		}

		for (var parent of parents) {

		}
	}

	React.useEffect(async () => {
		var response = await fetch(`https://localhost:8080/groups\
			?userID=${context.user.id}`);

		var data = response.json();
	});

	function displayChildren(group) {
		return (
			<>
				{
					group.children.length === 0
					? <option value={ group.id }>{ group.name }</option>
					: group.children.map(child => (
						displayChildren(child)
					))
				}
			</>
		);
	}

	return (
		<div className='submit-view'>
			<form>
				<label for='organization'>Organization:</label>
				<select name='organization' id='organization'>
					{
						!parents
						? null
						: parents.map(parent => {
							return (
								displayChildren(parent)
							);
						})
					}
				</select>
			</form>
		</div>
	);
}

export default SubmitView;
