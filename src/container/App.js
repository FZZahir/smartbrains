import React, {Component} from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation.js';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm.js';
import Rank from '../components/Rank/Rank.js';
import Logo from '../components/Logo/Logo.js';
import Tilt from 'react-parallax-tilt';
import ParticlesBg from 'particles-bg';

class App extends Component {
  constructor(){
    super();
    this.state = {
      inuput: '',
    }
  }
  /*We want to track the events*/
  OnInputChange= (event) =>{
    console.log(event.target.value);
  }
  onSubmit = () =>{
    console.log("Click")
  }
  render() {
    return (
      <div className="App">
      <ParticlesBg type="cobweb" bg={true} />
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm OnInputChange={this.OnInputChange}/>
      
     {/* 
      <FaceRecognition/>*/}
      </div>
      );
  }
}

export default App;