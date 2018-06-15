
import React, { Component } from 'react';

export default class Home extends Component {
    
  render() {
     let curretTime=new Date().toDateString().toUpperCase();
     
    return (
                    
               <h1>This is sample react app</h1>
    )
  }
};
