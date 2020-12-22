import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { StateContext } from './State';

import LoginView from './views/LoginView';
import TicketsView from './views/TicketsView';
import SubmitView from './views/SubmitView';
import ProfileView from './views/ProfileView';
import WorkcenterView from './views/WorkcenterView';
import NavigationBar from './components/NavigationBar';

const App = () => {
    const context = React.useContext(StateContext);

    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    {
                        context.user.id !== 0
                        ? <Redirect to='/tickets' />
                        : <Redirect to='/login' />
                    }
                </Route>

                <Route path='/login'>
                    {
                        context.user.id !== 0
                        ? <Redirect to='/profile' />
                        : <LoginView />
                    }
                </Route>

                <Route exact path='/tickets'>
                    {
                        context.user.id !== undefined
                        ? (
                            <div className='container'>
                                <NavigationBar />
                                <TicketsView />
                            </div>
                        )
                        : <Redirect to='/login' />
                    }
                </Route>

                <Route exact path='/tickets/submit'>
                    {
                        context.user.id !== undefined
                        ? (
                            <div className='container'>
                                <NavigationBar />
                                <SubmitView />
                            </div>
                        )
                        : <Redirect to='/login' />
                    }
                </Route>

                <Route exact path='/profile'>
                    {
                        context.user.id !== undefined
                        ? (
                            <div className='container'>
                                <NavigationBar />
                                <ProfileView />
                            </div>
                        )
                        : <Redirect to='/login' />
                    }
                </Route>

                <Route exact path='/workcenter'>
                    {
                        context.user.id !== undefined
                        ? (
                            <div className='container'>
                                <NavigationBar />
                                <WorkcenterView />
                            </div>
                        )
                        : <Redirect to='/login' />
                    }
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
