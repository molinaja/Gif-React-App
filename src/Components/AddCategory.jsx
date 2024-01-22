import { Component, useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory,  onErrorMsn}) => {

    const [inputValue, setInputValue] = useState('');  
    
    const onChangeInputValue = ({ target }) => {
        onErrorMsn('');
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        let errormsn = '';
        if (inputValue.trim().length === 0 ) {
            
            errormsn = "Debe haber minimo un caracter";
            onErrorMsn(errormsn);
        }else{

            onNewCategory(inputValue.trim());

        }
        
        setInputValue('');

    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                id="Categoria"
                type="text"
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={(event) => onChangeInputValue(event)}
            />
        </form>
    )
}

AddCategory.propTypes = {

    onNewCategory: PropTypes.func.isRequired,
    onErrorMsn: PropTypes.func.isRequired,


}

//export default AddCategory