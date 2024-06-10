import './signuppage.css';

import React from 'react';

import { Link } from 'react-router-dom';

import Footer from '../../components/layouts/footer/Footer';
import Navbar from '../../components/layouts/navbar/Navbar';

const SignUpPage= ()=>{
    return(
    <section>
        <Navbar/>
        <div className="my-5 py-5">
    <div className="container text-center mt-3 pt-5">
    <h2 className="form-weight-bold">Login</h2>
    <hr className="mx-auto"></hr>
    </div>
    <div className="mx-auto container">
        <form id="login-form">
            <div className="form-group">
                <label>Email</label>
                <input type="text" class="form-control" id="login-email" name="Email" placeholder="Email" required></input>
            </div>
            <div className="form-group">
                <label>Contraseña</label>
                <input type="password" class="form-control" id="login-password" name="password" placeholder="Contraseña" required></input>
            </div>
             <div className="form-group">
                <input type="submit" class="btn" id="login-btn" value="Login"></input>
            </div>
            <div className="form-group">
                <Link id="register-url" class="btn" to="/register">No tengo una cuenta? Registrarse</Link>
            </div>
        </form>
        
    </div>

</div>
        <Footer/>
    </section>

    )
}
export default SignUpPage;