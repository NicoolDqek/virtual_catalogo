import './productlistall.css';

import React from 'react';

import Productlistcard from '../../cards/productlist-card/Productlistcard';
import Footer from '../footer/Footer';

const ProductsListAll = () => {
    return (
    <section>
        <div className='my-2 py-4' id='featured'>
            <div className='container mt-5 py-5'>
             <h3>Nombre de seccion</h3>
             <hr class="mx-0"></hr>
             <p>descripcion de la seccion</p>
            </div>
            
            <div className='row mx-auto container'>
                    <Productlistcard/>
                    <Productlistcard/>
                    <Productlistcard/>
                    <Productlistcard/>
                    <Productlistcard/>
                    <Productlistcard/>
                    <Productlistcard/>
                    <Productlistcard/>
                    <Productlistcard/>
                    <Productlistcard/>
                    <Productlistcard/>
                    <Productlistcard/>
                    <Productlistcard/>
                    <Productlistcard/>
                    <Productlistcard/>
                    <Productlistcard/>
                    <Productlistcard/>
                    <Productlistcard/>
                    <Productlistcard/>
                    <Productlistcard/> 
                </div>
        </div>
    <Footer/>
    </section>
    )
}
export default ProductsListAll;