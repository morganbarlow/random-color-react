import React, { Component } from 'react';

import Header from "./header.js";
import Content from "./content.js";
import Footer from "./footer.js";

import Main from "../style/main.scss"

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
