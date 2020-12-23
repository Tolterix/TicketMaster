import React from 'react';
import { Redirect } from 'react-router-dom';
import { StateContext } from '../State';

const LoginView = () => {
    const context = React.useContext(StateContext);

    const handleSubmit = async (event) => {
        event.preventDefault();

        let res = await fetch("http://localhost:8080/auth", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: event.target.email.value,
                password: event.target.password.value
            })
        })
        
        if (res.status === 200) {
            let userID = await res.json()

            res = await fetch(`http://localhost:8080/tickets/details?userID=${userID.id}`, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
            })

            res = await fetch(`http://localhost:8080/tickets?userID=${userID.id}&view=1`, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
            })
            
            if (res.status === 200) {
                let ticketQueue = await res.json()
                context.setState({user: userID, tickets: {...context.tickets, queue: ticketQueue.tickets}})
            }

        }
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
