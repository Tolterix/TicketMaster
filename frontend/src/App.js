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

                <Route exact path='/tickets'>
                    {
<<<<<<< HEAD
                        context.user.id !== 0
                        ? <TicketsView />
=======
                        context.user.id !== undefined
                        ? (
                            <div className='container'>
                                <NavigationBar />
                                <TicketsView />
                            </div>
                        )
>>>>>>> aeaa0fafa6be5c31521590bb55ceb3be45aff7c9
                        : <Redirect to='/login' />
                    }
                </Route>

                <Route exact path='/tickets/submit'>
                    {
<<<<<<< HEAD
                        context.user.id !== 0
                        ? <SubmitView />
=======
                        context.user.id !== undefined
                        ? (
                            <div className='container'>
                                <NavigationBar />
                                <SubmitView />
                            </div>
                        )
>>>>>>> aeaa0fafa6be5c31521590bb55ceb3be45aff7c9
                        : <Redirect to='/login' />
                    }
                </Route>

                <Route exact path='/profile'>
                    {
<<<<<<< HEAD
                        context.user.id !== 0
                        ? <ProfileView />
=======
                        context.user.id !== undefined
                        ? (
                            <div className='container'>
                                <NavigationBar />
                                <ProfileView />
                            </div>
                        )
>>>>>>> aeaa0fafa6be5c31521590bb55ceb3be45aff7c9
                        : <Redirect to='/login' />
                    }
                </Route>

                <Route exact path='/workcenter'>
                    {
<<<<<<< HEAD
                        context.user.id !== 0
                        ? <WorkcenterView />
=======
                        context.user.id !== undefined
                        ? (
                            <div className='container'>
                                <NavigationBar />
                                <WorkcenterView />
                            </div>
                        )
>>>>>>> aeaa0fafa6be5c31521590bb55ceb3be45aff7c9
                        : <Redirect to='/login' />
                    }
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
