import React from "react";
import { Redirect } from "react-router-dom";
import { StateContext } from "../State";

function NavigationBar() {
    const context = React.useContext(StateContext);

    const handleClick = (event) => {
        event.preventDefault();

        if (!window.location.toString().endsWith(event.target.name)
            && context.navbarSwitch === 0) {
                context.setState({
                    navbarSwitch: 1,
                    navbarRedirect: `/${event.currentTarget.name}`
                });
        }
    }

    if (window.location.toString().endsWith(context.navbarRedirect)
        && context.navbarSwitch === 1) {
        context.setState({
            navbarSwitch: 0,
            navbarRedirect: "/"
        });
    }

    return (
        <>
            {
                context.navbarSwitch === 0
                ? null
                : <Redirect to={ context.navbarRedirect } />
            }
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion">
                <a className="sidebar-brand d-flex align-items-center justify-content-center">
                    <div className="sidebar-brand-text mx-3">
                        TicketMaster
                    </div>
                </a>

                <hr className="sidebar-divider" />

                <div className="sidebar-heading">
                    Tickets
                </div>

                <li className="nav-item active">
                    <a className="nav-link" name="tickets" onClick={ handleClick }>
                        <span>View Tickets</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" name="tickets/submit" onClick={ handleClick }>
                        <span>Submit a Ticket</span>
                    </a>
                </li>

                <hr className="sidebar-divider" />

                <div className="sidebar-heading">
                    Profile
                </div>

                <li className="nav-item">
                    <a className="nav-link" name="profile" onClick={ handleClick }>
                        <span>My Profile</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" name="workcenter" onClick={ handleClick }>
                        <span>My Workcenter</span>
                    </a>
                </li>

                <hr className="sidebar-divider" />

                <li className="nav-item">
                    <a className="nav-link" name="logout" onClick={ handleClick }>
                        <span>Logout</span>
                    </a>
                </li>
            </ul>
        </>
    );
}
export default NavigationBar;
