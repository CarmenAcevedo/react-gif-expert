import React, { useState } from "react";
// import { setCategories } from '../giftExpertApp';

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('Hulk');

    // const onInputChange = (event) => {
    //     console.log(event.target.value);
    //     setInputValue( event.target.value );
        
         // setInputValue('Hola');
    // }

    const onInputChange = ({target}) => {
        console.log(target.value);
        setInputValue( target.value );
        
    }

    const onSubmit = ( event ) => {
        // console.log(event);
        event.preventDefault();
        // console.log(inputValue);
        
        if ( inputValue.trim().length <= 1 ) return;      
        
        
        // setCategories( categories => [ inputValue, ...categories ] );
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifts" 
                value={ inputValue }
                // onChange={ (event) => onInputChange(event) }
                onChange={ onInputChange }
            />
        </form>
    )
}
