import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component{
  state = {
     advice : ''
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
     })
     .catch((error) => {
       console.log(error);
     })
  }

  

  render(){
    return (
      <>
      <div className="main">
        <div class="card w-70">
           <div class="header">
            Wellcome! Advice is ready..
          </div> 
          <div class="card-body">
            <h5 class="card-title"> {this.state.advice} </h5>
            <a href="#" class="btn btn-primary" onClick = {this.fetchAdvice} >New Advice</a>
          </div>
        </div>

      </div>
      
    </>
    );
  }
}

export default App;
