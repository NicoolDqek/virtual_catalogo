import React from 'react';

import Productlistcard
  from '../../components/cards/productlist-card/Productlistcard';
import Footer from '../../components/layouts/footer/Footer';
import Navbar from '../../components/layouts/navbar/Navbar';
import ProductDetailsPage
  from '../../components/layouts/singleproduct/ProductDetailsPage';

const ProductsDetailsPage= ()=>{
    return(
        <section>
        <Navbar/>
        <div className='container single-product my-5 pt-5'>
        <ProductDetailsPage/>
        </div>
        <section id="related-products" class="my-5 pb-5">
        <div className="container text-center mt-5 py-5">
            <h3>Relacionados</h3>
            <hr className="mx-auto">
            </hr>
          <div className='row mx-auto container-fluid'>
          <Productlistcard/>
          <Productlistcard/>
          <Productlistcard/>
          <Productlistcard/>
          </div>
        </div>
    </section>
        <Footer/>
        </section>
    )
}
export default ProductsDetailsPage;