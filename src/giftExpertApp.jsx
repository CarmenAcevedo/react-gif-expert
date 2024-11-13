import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GiftExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch']);

    // console.log(categories);

    const onAddCategory = ( newCategory ) => {
        // console.log(newCategory);

        if ( categories.includes(newCategory) ) return;
            
        // console.log('Valorant');
        // setCategories([ ...categories, 'Valorant' ]);
        setCategories([ newCategory , ...categories ]);
        // setCategories( cat => [ ...cat, 'Valorant'] );
        
    }
    
    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={ setCategories } 
                onNewCategory = { (value) => onAddCategory( value ) }
            />
            
            {
                categories.map( ( category ) =>(
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                ))
            }
            
            {/* <li>ABC</li> */}
                

            {/* Gif Item */}

        </>
    )
}