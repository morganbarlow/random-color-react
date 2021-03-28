import React, { Component } from 'react';

import Header from "./header.js";
import Content from "./content.js";
import Footer from "./footer.js";

export default class App extends Component {
  render() {
    return (
      <div className='page-container'>
        <Header/>        
        
        <Content/>

        <Footer/>
      </div>
    );
  }
}
