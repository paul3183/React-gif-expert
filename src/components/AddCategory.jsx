import React, { useState } from 'react';

const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onImputChange = ({target}) => {
        setInputValue( target.value );
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length <=1 ) return;
        // setCategories( categories => [inputValue, ...categories]);
        onNewCategory( inputValue.trim() );
        setInputValue('')
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder='Buscar gifs'
                value={ inputValue }
                onChange={ onImputChange }
            />

        </form>
    );
};

export default AddCategory;