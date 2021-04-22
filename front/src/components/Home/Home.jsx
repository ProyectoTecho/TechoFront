import loadable from '@loadable/component'
import React from 'react'

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Testimony from "../Testimony/Testimony";

import { BannerNumbers } from "../Banner/BannerNumbers";
import { BannerForm } from "../Banner/BannerForm";
import { BannerTestimony } from "../Banner/BannerTestimony";
import { BannerReality } from "../Banner/BannerReality";
import { BannerFooter } from "../Banner/BannerFooter";
import './index.css'

const Numbers = loadable(() => import("../Numbers/Numbers"))
const MasterForm = loadable(() => import("../Form/MasterForm"))
const Reality = loadable(() => import("../Reality/Reality"))

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header />
            <BannerNumbers />
            <Numbers />
            <BannerForm />
                <MasterForm />
            <BannerTestimony />    
            <Testimony />
            <BannerReality />
            <Reality />
            <BannerFooter />
            <Footer />
        </div>
    )
}

export default Home
