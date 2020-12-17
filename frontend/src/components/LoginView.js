import React from 'react';

class LoginView extends React.Component {
    render() {
        return (
            <div id='login-view'>
                <form id='login-form'>
                    <label for='email'>Email:</label>
                    <input
                        type='text'
                        id='email'
                        name='email'
                        placeholder='email@example.com'
                    />
                    <label for='password'>Password:</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='password'
                    />
                </form>
            </div>
        );
    }
}

export default LoginView;
