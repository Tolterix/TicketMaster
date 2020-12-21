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
                    categories: [{id: 1, name:''}],
                    children: ['group2']
                },
                {
                    id: 1,
                    name: '363 ISS',
                    parent: 4,
                    categories: [
                        { id: 1, name: 'Client Systems' },
                        { id: 2, name: 'Server Administration' }
                    ],
                    children: ['group2']
                },
                {
                    id: 2,
                    name: '633 CS',
                    parent: 2,
                    categories: [
                        { id: 3, name: 'Network Infrastructure' },
                        { id: 4, name: 'Cyber Security' }
                    ],
                    children: ['group2']
                },
            ],
            firstName: 'no first name',
            lastName: 'no last name',
            email: 'email'
        },
        tickets: {
            view: 0,
            selected: 0
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
