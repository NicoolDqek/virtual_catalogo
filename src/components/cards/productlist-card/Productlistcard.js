import './productlist.css';

import { Link } from 'react-router-dom';

import product1 from '../../../assets/imgs/desktop1.avif';

const Productlistcard= ()=>{
    return(

<div className="product text-center col-lg-3 col-md-4 col-sm-12">
      <img className="" src={product1} alt="producto" />
      <div className="star">
        <i className="fa fa-star fa-lg"></i>
        <i className="fa fa-star fa-lg"></i>
        <i className="fa fa-star fa-lg"></i>
        <i className="fa fa-star fa-lg"></i>
        <i className="fa fa-star fa-lg"></i>
      </div>
      <h5 className="p-name">nombre producto</h5>
      <h4 className="p-price">$150.000</h4>
      <Link to='/products-details/:id'>
        <button className="buy-btn" >Comprar Ahora</button>
        </Link>
    </div>
  );
}

export default Productlistcard ;