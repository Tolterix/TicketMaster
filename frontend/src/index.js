import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import App from './App';
import { StateProvider } from './State';

ReactDOM.render(
    <CookiesProvider>
        <StateProvider>
            <App />
        </StateProvider>
    </CookiesProvider>,
    document.getElementById('root')
);
