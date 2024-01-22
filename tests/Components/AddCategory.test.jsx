import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from '../../src/Components/AddCategory';

describe('Prueba del componente <AddCategory/>', () => { 
    
    const inputValue =  'Gojo';

    // test('Debe cambiar el texto de la caja', () => { 

    //     render( < AddCategory onNewCategory={ () => {} } onErrorMsn={()=>{} } /> );
    //     //screen.debug();
    //     const input = screen.getByRole('textbox');
    //     fireEvent.input( input, { target: { value: inputValue } } );
    //     //screen.debug();
    //     expect( input.value).toEqual( inputValue );

    // });

    test('Debe llamar a onNewCategory si el input tiene algun valor', () => { 
       
        const onNewCategory = jest.fn();
        const onErrorMsn = jest.fn();

        render( < AddCategory onNewCategory={ onNewCategory } onErrorMsn={ onErrorMsn } /> );
        
        const input = screen.getByRole('textbox');
        //console.log(input);
        const form = screen.getByRole('form');
        //screen.debug();
        fireEvent.change( input, { target: { value: inputValue } });
        //screen.debug();
        fireEvent.submit( form );
        //screen.debug();
        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);
        expect( onNewCategory ).toHaveBeenCalledTimes(1);

        expect( onErrorMsn ).toHaveBeenCalled();
        expect( onErrorMsn ).toHaveBeenCalledTimes(1);//una vez por el; change

    });

    test('Debe llamar a onErrorMsn con el valor del input vacio', () => { 
       
        const onNewCategory = jest.fn();
        const onErrorMsn = jest.fn();

        render( < AddCategory onNewCategory={ onNewCategory } onErrorMsn={ onErrorMsn } /> );
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input( input, { target: { value: '' } });      
        fireEvent.change( input, { target: { value: '' } });
        fireEvent.submit( form );

        expect( input.value ).toBe('');
        expect( onNewCategory ).toHaveBeenCalledTimes(0); 
        expect( onErrorMsn ).toHaveBeenCalled();
        expect( onErrorMsn ).toHaveBeenCalledTimes(1);// una por el manejo de error del submit

    });

     
});