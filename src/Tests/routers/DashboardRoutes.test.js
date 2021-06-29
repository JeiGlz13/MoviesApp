import React from 'react';
import {mount} from 'enzyme';
import { DashboardRoutes } from '../../routers/DashboardRoutes';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../components/auth/AuthContext';

describe('Pruebas en <DashboardRoutes/>', () => {
    const navbarContext = {
        user: {
            logged: true,
            name: 'Jeisson'
        },
        dispatch: jest.fn()
    }
    test('Debe mostrarse correctamente', () => {
        const wrapper = mount(
            <AuthContext.Provider value = {navbarContext}>
                <MemoryRouter>
                    <DashboardRoutes/>
                </MemoryRouter>      
            </AuthContext.Provider>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Jeisson');
    });
    
});
