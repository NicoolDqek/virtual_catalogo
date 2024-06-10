import './cartpage.css';

import CartProduct from '../../components/cartproduct/CartProduct';
import Footer from '../../components/layouts/footer/Footer';
import Navbar from '../../components/layouts/navbar/Navbar';

const CartPage = () => {
    return (
        <section>
            <Navbar />
            <div className="cart container my-5 py-5">
                <div className="container mt-5">
                    <h2 className="font-weight-bold">Tu Carrito</h2>
                    <hr />
                </div>
                <table className="mt-5 pt-5">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <CartProduct/>
                        <CartProduct/>
                        <CartProduct/>
                    </tbody>
                </table>
                <div className="cart-total">
                    <table>
                        <tbody>
                            <tr>
                                <td>Subtotal</td>
                                <td>$209.000</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>$209.000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="checkout-container">
                    <button className="btn checkout-btn">Continuar</button>
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default CartPage;
