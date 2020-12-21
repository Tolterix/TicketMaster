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
                    categories: [{id: 1, name:''}],
                    parents: [],
                    children: ['group2']
                },
                {
                    id: 2,
                    name: 'group2',
                    parents: ['group1'],
                    children: ['group3', 'group4']
                },
                {
                    id: 3,
                    name:'group3',
                    parents: ['group2'],
                    children: ['group4']
                },
                {
                    id: 4,
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
            selected: 1
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
