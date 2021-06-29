import React from 'react';
import {mount} from 'enzyme';
import { MoviesScreen } from '../../../components/movies/MoviesScreen';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Pruebas en <MoviesScreen/>', () => {
    const history = {
        length: 10,
        goBack: jest.fn(),
        push: jest.fn()
    }


   test('Debe mostrar el componente redirect si no hay argumentos en el url', () => {
        const wrapper = mount(<MemoryRouter initialEntries = {['movie']} >
            <MoviesScreen history = {history} />
        </MemoryRouter>);
      expect(wrapper).toMatchSnapshot(); 
      expect(wrapper.find('Redirect').exists()).toBe(true);
   });
    
   test('Debe mostrar un heroe si el parametro existe ', () => {
       const wrapper = mount(
       <MemoryRouter initialEntries = {['/movie/gang-Goodfellas']} >
            <Route path = "/movie/:movieId" component = {MoviesScreen}/>
        </MemoryRouter>);

        expect(wrapper.find('.row').exists()).toBe(true);
   });

   test('Debe rgresar a la pantalla anterior con PUSH', () => {
    const history = {
        length: 1,
        goBack: jest.fn(),
        push: jest.fn()
    }

    const wrapper = mount(
        <MemoryRouter initialEntries = {['/movie/gang-Goodfellas']} >
             <Route path = "/movie/:movieId" component = {(props) => <MoviesScreen history = {history} />}/>
         </MemoryRouter>);

         wrapper.find('button').simulate('click');

         expect(history.push).toHaveBeenCalledWith('/');
         expect(history.goBack).not.toHaveBeenCalled();
   });
   
   test('Debe regresar a la pantalla anterior', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries = {['/movie/gang-Goodfellas']} >
             <Route path = "/movie/:movieId" component = {(props) => <MoviesScreen history = {history} />}/>
         </MemoryRouter>);

         wrapper.find('button').simulate('click');
         expect(history.push).not.toHaveBeenCalled();
         expect(history.goBack).toHaveBeenCalledWith();
   });
   
   test('Debe llamar el redirect si movie no existe', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries = {['/movie/gang-Goodfellas25']} >
             <Route path = "/movie/:movieId" component = {(props) => <MoviesScreen history = {history} />}/>
         </MemoryRouter>);

         expect(wrapper.text()).toBe('');
   });
   
});
