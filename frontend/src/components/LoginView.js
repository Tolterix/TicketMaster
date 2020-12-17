import React from 'react';

class LoginView extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div id='login-view'>
                <form id='login-form' onSubmit={ this.handleSubmit }>
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

                    <input id='login' type='submit' value='Login' />
                </form>
            </div>
        );
    }
}

export default LoginView;
