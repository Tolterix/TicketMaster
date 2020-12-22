import React from 'react';

const StateContext = React.createContext({});

const StateProvider = (props) => {
    const initialState = {
        user: {
            id: 0,
            groups: [
                {
                    id: 1,
                    name:'group1',
                    parent: 1,
                    categories: [
                        {id: 1, name:'', parent: 'gsdfgfsd', children: ['gsfdg', 'sdfds']}
                    ],
                    children: ['group2']
                },
                {
                    id: 1,
                    name: '363 ISS',
                    parent: 4,
                    categories: [
                        { id: 1, name: 'Client Systems', parent: 'gsdfgfsd', children: ['gsfdg', 'sdfds'] },
                        { id: 2, name: 'Server Administration', parent: 'gsdfgfsd', children: ['gsfdg', 'sdfds'] }
                    ],
                    children: ['group2']
                },
                {
                    id: 2,
                    name: '633 CS',
                    parent: 2,
                    categories: [
                        { id: 3, name: 'Network Infrastructure', parent: 'gsdfgfsd', children: ['gsfdg', 'sdfds'] },
                        { id: 4, name: 'Cyber Security', parent: 'gsdfgfsd', children: ['gsfdg', 'sdfds'] }
                    ],
                    children: ['group2']
                },
            ],
            firstName: 'no first name',
            lastName: 'no last name',
            email: 'email'
        },
        navbarSwitch: 0,
        navbarRedirect: '/',
        tickets: {
            view: 0,
            selected: 0,
            queue: []
        },
        hierarchy: [],
        setState: (newState) => {
            updateState(state => {
                return { ...state, ...newState };
            });
        }
    }

    const [ state, updateState ] = React.useState(initialState);

    return (
        <StateContext.Provider value={ state }>
            { props.children }
        </StateContext.Provider>
    );
}

export { StateProvider };
export { StateContext };
