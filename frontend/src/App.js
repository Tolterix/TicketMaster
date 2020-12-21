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

const App = () => {
    const context = React.useContext(StateContext);

    console.log(context);
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

                <Route path='/tickets'>
                    {
                        context.user.id !== 0
                        ? <TicketsView />
                        : <Redirect to='/login' />
                    }
                </Route>

                <Route path='/tickets/submit'>
                    {
                        context.user.id !== 0
                        ? <SubmitView />
                        : <Redirect to='/login' />
                    }
                </Route>

                <Route path='/profile'>
                    {
                        context.user.id !== 0
                        ? <ProfileView />
                        : <Redirect to='/login' />
                    }
                </Route>

                <Route path='/workcenter'>
                    {
                        context.user.id !== 0
                        ? <WorkcenterView />
                        : <Redirect to='/login' />
                    }
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
