import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import LoginView from './components/LoginView';

const StateContext = React.createContext({});
const StateProvider = (props) => {
    const initialState = {
        isAuthenticated: false,
        email: "",
        setState: (property, value) => {
            updateState((state) => ({ ...state, [property]: value }));
        }
    }

    const [ state, updateState ] = React.useState(initialState);

    return (
        <StateContext.Provider value={ state }>
            { props.children }
        </StateContext.Provider>
    );
}

const App = () => {
    const context = React.useContext(StateContext);

    return (
        <StateProvider>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        {
                            context.isAuthenticated
                            ? <Redirect to='/tickets' />
                            : <Redirect to='/login' />
                        }
                    </Route>

                    <Route path='/login'>
                        {
                            context.isAuthenticated
                            ? <Redirect to='/tickets' />
                            : <LoginView />
                        }
                    </Route>

                    <Route path='/tickets'>
                        
                    </Route>

                    <Route path='/tickets/submit'>
                    </Route>

                    <Route path='/workcenter'>
                    </Route>
                </Switch>
            </Router>
        </StateProvider>
    );
}

export default App;
export { StateContext };
