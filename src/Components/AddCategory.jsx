import { Component, useState } from "react";

const addCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');
    const [errorMsn, setErrorMsn] = useState('');
    
    const onChangeInputValue = ({ target }) => {
        setInputValue(target.value.trim())
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length == 0 ) {
            setErrorMsn('Para la busqueda debe haber al menos un caracter')
            console.log(errorMsn);
            return;

        }

        setErrorMsn('')

        //onAddCategories(
            //(cat) => [
                //inputValue, ...cat
           // ]
        //);
        onNewCategory(inputValue.trim());
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
            <a>{errorMsn}</a>
        </form>
    )
}

export default addCategory