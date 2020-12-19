import { Component } from 'react';
import './NavigationBar.css';
import AirForceLogo from '../AirForceLogo.png';


function NavigationBar() {
    // const [sidebar, setSidebar] = useState(false)
    // const showSidebar = () => setSidebar(!sidebar)
    return (
        <div className='navbar-grid'> 
            <nav className='nav-menu'>
                <ul className='nav-menu-items'>
                    <div class="box-a">
                        <li className='airforce-logo'> 
                            <a href='/'>
                                <img src = {AirForceLogo}
                                alt='Air Force Logo'/>;
                            </a>
                        </li>
                    </div>
                    <div class="box-b">
                        <li className="nav-text"> 
                            <a href="/tickets">
                                View Tickets
                            </a>
                        </li>
                     </div>
                    <div class="box-c">
                        <li className="nav-text">
                            <a href="/tickets/submit">
                                Submit Ticket
                            </a>
                        </li>
                    </div>
                    <div class="box-d">
                        <li className="nav-text">
                            <a href="/profile">
                                Profile
                            </a>
                        </li>
                    </div>
                    <div class="box-e">
                        <li className="nav-text">
                            <a href="/workcenter">
                                Work Center
                            </a>
                        </li>
                    </div>
                    <div class="box-f">
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