import loadable from '@loadable/component'


import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Testimony from "./components/Testimony/Testimony";


import { Banner1 } from "./components/Banner/Banner1";
import { Banner2 } from "./components/Banner/Banner2";
import { Banner3 } from "./components/Banner/Banner3";
import { Banner4 } from "./components/Banner/Banner4";


const Numbers = loadable(() => import("./components/Numbers/Numbers"))
const MasterForm = loadable(() => import("./components/Form/MasterForm"))
const Reality = loadable(() => import("./components/Reality/Reality"))

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Banner1 />
      <Numbers />
      <Banner2 />
      <BrowserRouter>
        <Switch>
          <Route exact path="/Techo" component={MasterForm} />
        </Switch>
        <Redirect from="/" to="/Techo" />
      </BrowserRouter>
      <Testimony />
      <Banner3 />
      <Reality />
      <Banner4 />

      <Footer />
    </div>
  );
}

export default App;
