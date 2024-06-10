import './registerpage.css';

import React from 'react';

import { Link } from 'react-router-dom';

import Footer from '../../components/layouts/footer/Footer';
import Navbar from '../../components/layouts/navbar/Navbar';

const RegisterPage = () => {
    return (
        <section>
            <Navbar />
            <div className="my-5 py-5">
                <div className="container text-center mt-3 pt-5">
                    <h2 className="form-weight-bold">Registrarse</h2>
                    <hr className="mx-auto"></hr>
                </div>
                <div className="mx-auto container">
                    <form id="register-form">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" class="form-control" id="register-name" name="name" placeholder="Name" required></input>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" class="form-control" id="register-email" name="Email" placeholder="Email" required></input>
                        </div>
                        <div className="form-group">
                            <label>Contraseña</label>
                            <input type="password" class="form-control" id="register-password" name="password" placeholder="Contraseña" required></input>
                        </div>
                        <div className="form-group">
                            <label>Confirmar Contraseña</label>
                            <input type="password" class="form-control" id="register-confirm-password" name="confirmpassword" placeholder="Confirmar Contraseña" required></input>
                        </div>
                        <div className="form-group">
                            <input type="submit" class="btn" id="register-btn" value="Registrarse"></input>
                        </div>
                        <div className="form-group">
                            <Link id="register-url" class="btn" to="/signup">Ya tienes una cuenta? Ingresar</Link>
                </div>
            </form>
        </div>
</div >
    <Footer />
    </section >

    )
}
export default RegisterPage;