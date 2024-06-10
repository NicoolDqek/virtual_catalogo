import React from 'react';

import Footer from '../../components/layouts/footer/Footer';
import Productlist from '../../components/layouts/productlist/Productlist';
import Showcase from '../../components/layouts/showcase/Showcase';

const HomePage= ()=>{
    return(
    <section>
        <Showcase/> 
        <Productlist/>
        <Footer/>
    </section>

    )
}
export default HomePage;