import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {Spinner} from 'react-bootstrap';


class App extends React.Component{

  

  state = {
     advice : '',
     loading: true
  };

  componentDidMount() {
    this.fetchAdvice ();
  }

  fetchAdvice = () => {
     axios.get("https://api.adviceslip.com/advice")
     .then( (responce) => {
       console.log(responce.data.slip.advice);
       const {advice} = responce.data.slip;
       this.setState ({advice });
       this.setState.loading(false);

     })
     .catch((error) => {
       console.log(error);
     })
  }

  

  render(){
    return (
      <>
      {this.state.loading ? 
      <div className="main">
        <div class="card w-70">
           <div class="header">
            Wellcome! Advice is ready.sdaaaaaaaaaaaaaaaaa.
          </div> 
          <div class="card-body">
            <h5 class="card-title"> {this.state.advice} </h5>
            <a href="#" class="btn btn-primary" onClick = {this.fetchAdvice} >New Advice</a>
          </div>
        </div>

      </div>
      
      :   <Spinner animation="grow" variant="secondary" />

      }
      
    </>
    );
  }
}

export default App;
