import './productlist.css';

import React from 'react';

import Productlistcard from '../../cards/productlist-card/Productlistcard';

const Productslist= ()=>{
    return(
        
        <div className='productlist-container'>
            <div className='container'>
                <h2 className='text-center'>Encontraras Todo lo que te Interesa</h2>
                <hr className='mx-auto'></hr>
                <div className='listing-container container row mx-auto'>
                <Productlistcard/>
                <Productlistcard/>
                <Productlistcard/>
                <Productlistcard/>
                </div>
            </div>
        

        </div>
    )
}
export default Productslist;