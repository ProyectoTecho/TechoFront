import React from 'react'
import Home from "./components/Home/Home";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import NotFound from "./components/NotFound/NotFound";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound}/>
        </Switch>        
      </BrowserRouter>
    </div>
  );
}

export default App;
