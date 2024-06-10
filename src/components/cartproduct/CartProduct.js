import './cartproduct.css';

import React from 'react';

import ear from '../../assets/imgs/earpods1.avif';

const CartProduct = () => {
    return (
        
        <tr>
        <td>
            <div className="product-info">
                <img src={ear} alt=""></img>
                <div>
                    <p>Nombre producto</p>
                    <small><span>$</span>150.000</small>
                    <br></br>
                    <a className="remove-btn" href="#">Remover</a>
                </div>
            </div>
        </td>
        <td>
        <input type="number" value="1"></input>
        <a href="#" className="edit-btn">Editar</a>
    </td>
    <td>
        <span>$</span>
        <span className="product-price">150.000</span>
    </td>
</tr>

    );
}
export default CartProduct;