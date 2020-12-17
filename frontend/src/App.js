import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import LoginView from './components/LoginView';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/login'>
                        <LoginView />
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
