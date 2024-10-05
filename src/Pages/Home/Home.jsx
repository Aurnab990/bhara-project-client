import React from 'react';
import Navbar from '../../Layouts/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import CatagorySection from './CatagorySection/CatagorySection';
import HotProduct from './HotDeals/HotProduct';
// import AllProducts from '../AllProducts/AllProducts';
import AboutSection from '../AboutUs/AboutSection';
import FAQSection from './FAQSection/FAQSection';
import Footer from '../../Layouts/Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import Allitems from '../AllItems/Allitems';

const Home = () => {
    const items = useLoaderData();
    return (
        <div>
            <Header></Header>
            <CatagorySection></CatagorySection>
            <HotProduct></HotProduct>
            {/* <AllProducts></AllProducts> */}
            <Allitems items={items}></Allitems>
            <AboutSection></AboutSection>
            <FAQSection></FAQSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;