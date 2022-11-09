import React, { useState } from 'react';
import {AddCategory, GifGrid} from './components/index'

const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;

        // console.log(newCategory);
        // setCategories( cat => [ ...cat, 'valorant' ] );
        setCategories( [ newCategory, ...categories] );
    }
    
    // console.log(categories);
    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory 
            // setCategories= {setCategories}
                onNewCategory={value => onAddCategory(value)}
            />

            {/* listado */}
            <button onClick={ onAddCategory }>Agregar</button>
         
                { 
                
                    categories.map( category => (
                            <GifGrid 
                                key={category}
                                category={category}/>
                    ))
                } 
        </>
    );
};

export default GifExpertApp;