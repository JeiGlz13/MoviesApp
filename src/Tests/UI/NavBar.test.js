import React from 'react';
import {mount} from 'enzyme';
import '@testing-library/jest-dom';
import { NavBar } from '../../components/UI/NavBar';
import { AuthContext } from '../../components/auth/AuthContext';
import { MemoryRouter, Router } from 'react-router-dom';
import { types } from '../../components/types/types';

describe('Pruebas en el <NavBar/>', () => {
    const historyMock = {
        push: jest.fn(),
        location: {},
        listen: jest.fn(),
        replace: jest.fn(),
        createHref: jest.fn()
    }

    const navbarContext = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Jeisson'
        }    
    }
    afterEach(()=>{
        jest.clearAllMocks();
    });

    const wrapper = mount(<AuthContext.Provider value = {navbarContext}>
        <MemoryRouter>
            <Router history = {historyMock}>
                <NavBar  />
            </Router>
        </MemoryRouter>
    </AuthContext.Provider>);

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Jeisson');
    });
    
    test('Debe llamar el logout y el history', () => {
        wrapper.find('button').simulate('click');

        expect(navbarContext.dispatch).toHaveBeenCalledWith({
            type: types.logout
        });
        expect(historyMock.replace).toHaveBeenCalledWith('/login');
    })
    
});
