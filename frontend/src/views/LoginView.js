import React from 'react';
import { Redirect } from 'react-router-dom';
import { StateContext } from '../State';

const LoginView = () => {
    const context = React.useContext(StateContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("http://localhost:3001/auth", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: event.target.email.value,
                password: event.target.password.value
            })
        }).then(response => {
            if (response.status === 200
                && response.json().success) {
                fetch("http://localhost:3001/userProfile", {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                }).then(
                    response => {
                        context.setState({user: response.json()});
                    }
                )
            }
        });
    }

    if (context.user.id !== undefined) {
        return (
            <Redirect to='/' />
        );
    }

    return (
        <div className='login-view'>
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

                <button id='login' type='submit'>Login</button>
            </form>
        </div>
    );
}

export default LoginView;
