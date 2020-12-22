import React from 'react';
import { Redirect } from 'react-router-dom';
import { StateContext } from '../State';
import NavigationBar from '../components/NavigationBar';

const ProfileView = () => {
    const context = React.useContext(StateContext);
    
    return (
        <div id='ViewContainer'>
            <div id='ProfileContainer'>
                <label><pre>First Name:     {context.user.firstName}</pre></label>
                <label><pre>Last Name :     {context.user.lastName}</pre></label>
                <br/>
                <label><pre>Email     :     {context.user.email}</pre></label>
                <label id='GroupLabel'>Group</label>
                <div id='GroupsContainer'>
                    {
                        context.user.groups.map(i => {
                            return (
                                <div>
                                    <label>Group Name: {i.name}</label>
                                    <br/>
                                    <label><pre>   Group Parent: {i.parent}</pre></label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProfileView;
