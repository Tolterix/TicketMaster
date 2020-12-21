import { Component } from 'react';
import './NavigationBar.css';
import AirForceLogo from './AirForceLogo.png';


function NavigationBar() {
    return (
        <div className='navbar-grid'> 
            <nav className='nav-menu'>
                <ul className='nav-menu-items'>
                    <div className="box-a">
                        <li className='airforce-logo'> 
                            <a href='/'>
                                <img src = {AirForceLogo}
                                alt='Air Force Logo'/>
                            </a>
                        </li>
                    </div>
                    <div className="box-b">
                        <li className="nav-text"> 
                            <a href="/tickets">
                                View Tickets
                            </a>
                        </li>
                     </div>
                    <div className="box-c">
                        <li className="nav-text">
                            <a href="/tickets/submit">
                                Submit Ticket
                            </a>
                        </li>
                    </div>
                    <div className="box-d">
                        <li className="nav-text">
                            <a href="/profile">
                                Profile
                            </a>
                        </li>
                    </div>
                    <div className="box-e">
                        <li className="nav-text">
                            <a href="/workcenter">
                                Work Center
                            </a>
                        </li>
                    </div>
                    <div className="box-f">
                    <li className="nav-text">
                        <a href="/logout">
                            Log Out
                        </a>
                    </li>
                    </div>
                </ul>
            </nav>
      </div>
    );



}
export default NavigationBar; 