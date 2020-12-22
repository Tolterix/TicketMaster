import React from 'react';
import { Redirect } from 'react-router-dom';
import './NavigationBar.css';
import AirForceLogo from './AirForceLogo.png';
import { StateContext } from '../State';


function NavigationBar() {
    const context = React.useContext(StateContext);

    const handleClick = (event) => {
        event.preventDefault()

        context.setState({
            navbarSwitch: 1,
            navbarRedirect: ('/' + event.target.name)
        })
    }

    if (window.location.toString().includes(context.navbarRedirect) && context.navbarSwitch == 1) {
        context.setState({
            navbarSwitch: 0,
            navbarRedirect: '/'
        })
    }

    return (
        <div className='navbar-grid'>
            <nav className='nav-menu'>
                <ul className='nav-menu-items'>
                    {
                        context.navbarSwitch == 0 ? <div></div>
                        : <Redirect to={context.navbarRedirect}> Logout </Redirect>
                    }
                    <li className='airforce-logo'>
                        <button className='navbarButton' onClick={handleClick} name=''>
                            <img src = {AirForceLogo} alt='Air Force Logo'/>
                        </button>
                    </li>
                    <li className="nav-text">
                        <button className='navbarButton' onClick={handleClick} name='tickets'>
                            View Tickets
                        </button>
                    </li>
                    <li className="nav-text">
                        <button className='navbarButton' onClick={handleClick} name='tickets/submit'>
                            Submit Ticket
                        </button>
                    </li>
                    <li className="nav-text">
                        <button className='navbarButton' onClick={handleClick} name='profile'>
                            Profile
                        </button>
                    </li>
                    <li className="nav-text">
                        <button className='navbarButton' onClick={handleClick} name='workcenter'>
                            Work Center
                        </button>
                    </li>
                    <li className="nav-text">
                        <button className='navbarButton' onClick={handleClick} name='logout'>
                            Log Out
                        </button>
                    </li>
                </ul>
            </nav>
      </div>
    );



}
export default NavigationBar;
