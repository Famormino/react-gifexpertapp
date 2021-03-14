import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Rick and Morty']);

    return (
        <>
            <h2 className="titulo-principal card animate__animated animate__fadeIn">GifExpertApp</h2>
            <AddCategory setcategories = { setcategories } />
            
            <hr /> 
            
                <ol>
                    {
                       categories.map( category =>( 
                            <GifGrid 
                            key= { category }
                            category= { category } />
                       ))
                    }
                </ol>
            
        </>
    )
}

export default GifExpertApp
