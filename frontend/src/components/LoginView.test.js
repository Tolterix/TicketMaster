import React from 'react';
import { shallow } from 'enzyme';

import LoginView from './LoginView';

describe('<LoginView />', () => {
    var wrapper;
    beforeEach(() => {
        wrapper = shallow(<LoginView />);
    });

    describe('#handleSubmit()', () => {
        it('should exist', () => {
            expect(wrapper.instance().handleSubmit).not.toEqual(undefined);
        });

        it('should be a function', () => {
            expect(typeof(wrapper.instance().handleSubmit)).toEqual('function');
        });

        it('should require one argument', () => {
            expect(() => wrapper.instance().handleSubmit()).toThrow(Error);
        });

        it('should call event.preventDefault()', () => {
            const event = { preventDefault: jest.fn() };

            wrapper.instance().handleSubmit(event);

            expect(event.preventDefault).toHaveBeenCalled();
        });
    });

    describe('#login-form', () => {
        it('clicking login calls handleSubmit()', () => {
            wrapper.instance().handleSubmit = jest.fn();
            wrapper.instance().forceUpdate();

            const form = wrapper.find('#login-form');
            form.simulate('submit');

            expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
        });
    });
});
