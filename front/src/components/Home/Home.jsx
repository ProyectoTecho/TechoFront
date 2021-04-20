import loadable from '@loadable/component'
import React from 'react'

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Testimony from "../Testimony/Testimony";

import { Banner1 } from "../Banner/Banner1";
import { Banner2 } from "../Banner/Banner2";
import { Banner3 } from "../Banner/Banner3";
import { Banner4 } from "../Banner/Banner4";
import './index.css'

const Numbers = loadable(() => import("../Numbers/Numbers"))
const MasterForm = loadable(() => import("../Form/MasterForm"))
const Reality = loadable(() => import("../Reality/Reality"))

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header />
            <Banner1 />
            <Numbers />
            <Banner2 />
                <MasterForm />
            <Testimony />
            <Banner3 />
            <Reality />
            <Banner4 />
            <Footer />
        </div>
    )
}

export default Home
