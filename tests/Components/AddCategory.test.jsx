import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from '../../src/Components/AddCategory';

describe('Prueba del componente <AddCategory/>', () => { 
    
    test('Debe cambiar el texto de la caja', () => { 

        render( < AddCategory onNewCategory={ () => {} } onErrorMsn={()=>{} } /> );
        //screen.debug();
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: 'Goku' } } );
        //screen.debug();
        expect( input.value).toEqual('Goku');

    });
     
});