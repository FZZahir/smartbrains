import React, {Component} from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation.js';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm.js';
import Rank from '../components/Rank/Rank.js';
import Logo from '../components/Logo/Logo.js';
import Tilt from 'react-parallax-tilt';
import ParticlesBg from 'particles-bg';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ParticlesBg type="cobweb" bg={true} />
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm/>
      
     {/* 
      <FaceRecognition/>*/}
      </div>
      );
  }
}

export default App;