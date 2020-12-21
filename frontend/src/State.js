import React from 'react';

const StateContext = React.createContext({});

const StateProvider = (props) => {
    const initialState = {
        user: {
            id: 2,
            groups: [
                {
                    name:'group1',
                    parents: [],
                    children: ['group2']
                },
                {
                    name: 'group2',
                    parents: ['group1'],
                    children: ['group3', 'group4']
                },
                {
                    name:'group3',
                    parents: ['group2'],
                    children: ['group4']
                },
                {
                    name:'group4',
                    parents: ['group2', 'group3'],
                    children: []
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
