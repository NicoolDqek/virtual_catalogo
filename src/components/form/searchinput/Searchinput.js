import './searchinput.css';

import React from 'react';

const Searchinput= ()=>{
    return(
        
        <div className='search-container'>
         <input type='text' className='search-input' placeholder='Buscar Productos'></input>
         <button className='search-button'>Buscar</button>
        </div>
    )
}
export default Searchinput;