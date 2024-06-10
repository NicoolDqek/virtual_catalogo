import './accountpage.css';

import React from 'react';

import { Link } from 'react-router-dom';

import Footer from '../../../src/components/layouts/footer/Footer';
import Navbar from '../../../src/components/layouts/navbar/Navbar';

const AccountPage = () => {
 const linkStyle = { textDecoration: 'none', color: 'inherit' };
    return (
     
        
            <section>
        <Navbar/>
        <div>
         <div className=" my-5 py-5">
        <div className="row container mx-auto">
            <div className="text-center mt-3 pt-5 col-lg-6 col-md-12 col-sm-12">
                <h3 className="font-weight-bold">Informacion de Cuenta</h3>
                <hr className="mx-auto"></hr>
                <div className="account-info">
                    <p>Nombres <span>gmail.com</span></p>
                    <p><a href="" id="order-btn"><Link to="/cart" style={linkStyle}>Tus pedidos</Link></a></p>
                    <p><a href="" id="logout-btn">Cerrar Sesion</a></p>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <form id="account-form">
                    <h3>Cambiar Contraseña</h3>
                    <hr className="mx-auto"></hr>
                    <div className="form-group">
                        <label>Contraseña</label>
                        <input type="password" class="form-control" id="account-password" name="Contraseña"
                            placeholder="Contraseña" required></input>
                    </div>
                    <div className="form-group">
                        <label>Confirmar Contraseña</label>
                        <input type="password" class="form-control" id="account-password-comfirm"
                            name="Contraseña Confirmada" placeholder="Confirmar Contraseña" required></input>
                    </div>
                    <div className="form-group">
                        <input type="submit" class="btn" value="Confirmar" id="change-pass-btn"></input>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
       <Footer/> 
       
            </section>
        
            
             

    );
}
export default AccountPage;