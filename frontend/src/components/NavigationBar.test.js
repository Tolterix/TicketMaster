import React from 'react';
import { shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import NavigationBar from './NavigationBar';

describe('Navigation Bar', () => {
    it('renders without crashing', () => {
        const navWrapper = shallow(<NavigationBar/>);
        expect(navWrapper).toBeTruthy()
     });
    it ('renders onto the DOM', () => {
        const navMenu = document.createElement('nav-menu');
        ReactDOM.render(<NavigationBar/>, navMenu)
    })
})