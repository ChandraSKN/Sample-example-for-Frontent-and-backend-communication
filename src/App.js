import './App.css';

import React, { Fragment } from "react";
import Display from './Components/Display';
import Header from './Components/Header'


function App() {
  return (
    <Fragment>
      <Header/>
    <div className="body">
      <Display/>
    </div>
    </Fragment>
  );
}

export default App;
