import React from 'react';
import { Redirect } from 'react-router-dom';
import { StateContext } from '../App.js';

function LoginView() {
    const context = React.useContext(StateContext);

    const handleSubmit = async (event) => {
        event.preventDefault();

        var response = await fetch("http://localhost:8080/auth", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: event.target.email.value,
                password: event.target.password.value
            })
        });

        if (response.status === 200
            && response.json().success) {
            context.setState('isAuthenticated', true);
        }

        context.setState('isAuthenticated', true);
    }

    if (context.isAuthenticated) {
        return (
            <Redirect to='/tickets' />
        );
    }

    return (
        <div id='login-view'>
            <form id='login-form' onSubmit={ handleSubmit }>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type='text'
                        id='email'
                        name='email'
                    />
                </div>

                <div>
                    <label htmlFor='password'>Password:</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                    />
                </div>

                <input id='login' type='submit' value='Login' />
            </form>
        </div>
    );
}

export default LoginView;
