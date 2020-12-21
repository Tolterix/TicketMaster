import React from 'react';
import { Redirect } from 'react-router-dom';
import { StateContext } from '../State';

const LoginView = () => {
    const context = React.useContext(StateContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("http://localhost:8080/auth", {
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
            if (response.status === 200) {
                response.json().then(i => {
                    context.setState({user: i})
                })
            }
        })
    }

    if (context.user.id !== 0) {
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
