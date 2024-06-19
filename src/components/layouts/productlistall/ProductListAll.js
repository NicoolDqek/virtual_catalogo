import './productlistall.css';

import React from 'react';

import { ProductData } from '../../../util/ProductData';
import Productlistcard from '../../cards/productlist-card/Productlistcard';
import Footer from '../footer/Footer';

const ProductsListAll = () => {
    console.log(ProductData)
    return (
    <section>
        <div className='my-2 py-4' id='featured'>
            <div className='container mt-5 py-5'>
             <h3>Productos Disponibles</h3>
             <hr class="mx-0"></hr>
             <p>descripcion de la seccion</p>
            </div>
        
            <div className='row mx-auto container'>
                {ProductData.map((product)=>{
                    return(
                        <Productlistcard productData={product} />
                    )
                })}
                
                </div>
        </div>
    <Footer/>
    </section>
    )
}
export default ProductsListAll;