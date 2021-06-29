import React from 'react';
import {mount} from 'enzyme'
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';
describe('Pruebas en <SearchScreen/>', () => {
    
    test('Debe mostrarse correctamente con valores por defecto', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path = "/search" component = {SearchScreen} />
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Buscar pelicula');
    });

    test('Debe mostrar Casino y el input con el valor del querystring', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=Casino']}>
                <Route path = "/search" component = {SearchScreen} />
            </MemoryRouter>
        );

        expect(wrapper.find('input').prop('value')).toBe('Casino');
    });

    test('Debe mostrar un error si no se encuentra la pelicula', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=Casino3']}>
                <Route path = "/search" component = {SearchScreen} />
            </MemoryRouter>
        );

        expect(wrapper.find('.alert-danger').exists()).toBe(true);
        expect(wrapper.find('.alert-danger').text().trim()).toBe('No se encontro Casino3');
    });
    
    test('Debe llamar el push del history', () => {
        const history = {
            push: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=Casino3']}>
                <Route path = "/search" component = {() => <SearchScreen history = {history} />} />
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change', {target: {
            name: 'searchText',
            value: 'casino'
        }});

        wrapper.find('form').prop('onSubmit')({preventDefault(){}});
        expect(history.push).toHaveBeenCalledWith('?q=casino');
    })
    
    
})
