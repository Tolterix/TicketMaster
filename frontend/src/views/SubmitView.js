import React from "react";
import { StateContext } from "../State";

const SubmitView = () => {
	const context = React.useContext(StateContext);
	const [ componentState, setComponentState ] = React.useState({
		groupID: 1,
		categoryID: 1,
		title: "",
		description: "",
		submittedBy: context.user.id
	});

	const handleSubmitTicket = async () => {
		var response = await fetch(`http://localhost:8080/tickets`, {
			method: "POST",
			headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
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
		<>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-10 col-lg-12 col-md-9">
						<div className="card-body p-0">
							<div className="row">
								<div className="col-lg-6 d-none d-lg-block"></div>
								<div className="col-lg-6">
									<div className="user">
										<canvas height="0px" width="700px"></canvas>
										<div className="form-group">
											<div className="h6 mb-0 font-weight-bold text-gray-800">
												Select an organization:
											</div>
											<select className="form-control form-control-user">
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
										</div>
										<div className="form-group">
											<div className="h6 mb-0 font-weight-bold text-gray-800">
												Select a category:
											</div>
											<select className="form-control form-control-user">
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
										</div>
										<div className="form-group">
											<div className="h6 mb-0 font-weight-bold text-gray-800">
												Enter a ticket title:
											</div>
											<input type="text" className="form-control form-control-user" onChange={ handleChange } />
										</div>
										<div className="form-group">
											<div className="h6 mb-0 font-weight-bold text-gray-800">
												Enter a ticket description:
											</div>
											<textarea type="text" className="form-control form-control-user" onChange={ handleChange } />
										</div>
										<div className="form-group">
											<button className="btn btn-secondary" onClick={ handleSubmitTicket }>Submit</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default SubmitView;
