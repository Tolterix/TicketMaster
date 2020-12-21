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
                        context.user.id !== undefined
                        ? <Redirect to='/tickets' />
                        : <Redirect to='/login' />
                    }
                </Route>

                <Route path='/login'>
                    {
                        context.user.id !== undefined
                        ? <Redirect to='/tickets' />
                        : <LoginView />
                    }
                </Route>

                <Route exact path='/tickets'>
                    {
                        context.user.id !== undefined
                        ? <TicketsView />
                        : <Redirect to='/login' />
                    }
                </Route>

                <Route exact path='/tickets/submit'>
                    {
                        context.user.id !== undefined
                        ? <SubmitView />
                        : <Redirect to='/login' />
                    }
                </Route>

                <Route path='/profile'>
                    {
                        context.user.id !== undefined
                        ? <ProfileView />
                        : <Redirect to='/login' />
                    }
                </Route>

                <Route path='/workcenter'>
                    {
                        context.user.id !== undefined
                        ? <WorkcenterView />
                        : <Redirect to='/login' />
                    }
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
