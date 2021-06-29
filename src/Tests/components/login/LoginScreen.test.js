import React from 'react';
import {mount} from 'enzyme';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { AuthContext } from '../../../components/auth/AuthContext';
import { types } from '../../../components/types/types';

describe('Pruebas en el <LoginScreen/>', () => {
    const navbarContext = {
        dispatch: jest.fn(),
        user: {
            logged: false,
            name: 'Jeisson'
        }    
    }
    const history = {
        replace: jest.fn()
    };
   test('Debe mostrarse correctamente', () => {
       const wrapper = mount(<AuthContext.Provider value = {navbarContext} >
           <LoginScreen history = {history} />
       </AuthContext.Provider>);
       expect(wrapper).toMatchSnapshot();
   });
    test('Debe realizar el dispatch y la navegacion', () => {
        const wrapper = mount(<AuthContext.Provider value = {navbarContext} >
            <LoginScreen history = {history} />
        </AuthContext.Provider>);
        const handleClick = wrapper.find('button').prop('onClick');
        handleClick();
        expect(navbarContext.dispatch).toHaveBeenCalledWith({type: types.login, payload:{
            name: 'Jeisson'
        }});

        expect(history.replace).toHaveBeenCalledWith('/');

        localStorage.setItem('lastPath', '/war');
        handleClick();
        expect(history.replace).toHaveBeenCalledWith('/war');
    });
    
});
