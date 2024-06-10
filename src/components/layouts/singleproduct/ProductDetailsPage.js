import './productdetailspage.css';

import React from 'react';

import reloj1 from '../../../assets/imgs/reloj1.avif';

const ProductDetailsPage = () => {
    return (
        <section className='product-details'>
            <div className="row mt-5">
                <div className="col-lg-5 col-md-6 col-sm-12">
                    <img className="main-img" src={reloj1} alt="producto" id="mainImg" />
                    <div className="small-img-group">
                        <div className="small-img-col">
                            <img src={reloj1} alt="producto pequeño" width="100%" className="small-img" />
                        </div>
                        <div className="small-img-col">
                            <img src={reloj1} alt="producto pequeño" width="100%" className="small-img" />
                        </div>
                        <div className="small-img-col">
                            <img src={reloj1} alt="producto pequeño" width="100%" className="small-img" />
                        </div>
                        <div className="small-img-col">
                            <img src={reloj1} alt="producto pequeño" width="100%" className="small-img" />
                        </div>
                        <div className="small-img-col">
                            <img src={reloj1} alt="producto pequeño" width="100%" className="small-img" />
                        </div>
                    </div>
                </div>

                <div className="detail col-lg-6 col-md-12 col-12">
                    <h6>Categoría</h6>
                    <h3 className="py-4">Nombre sección</h3>
                    <h2>$160.000</h2>
                    <div className="stock-info mt-4 mb-3">
                        <h6>Stock disponible: #</h6>
                    </div>
                    <input type="number"  id="product-quantity" />
                    <button className="buy-btn">Agregar al Carrito</button>
                    <h4 className="mt-5 mb-5">Detalles del Producto</h4>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla iusto, voluptate velit fugit quaerat rerum omnis sit optio consectetur culpa adipisci? Reprehenderit dolorem, laboriosam error vitae corrupti accusamus tenetur amet? Itaque ipsam voluptas vero odio quae, aliquam rerum earum esse dolorem cupiditate accusamus architecto quis dolorum. Ullam autem maxime architecto aliquam delectus cumque vel mollitia non nesciunt quibusdam, maiores aliquid.</span>
               
                </div>
            </div>

        </section>
    );
}

export default ProductDetailsPage;
