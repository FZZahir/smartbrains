import React, {Component} from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation.js';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm.js';
import Rank from '../components/Rank/Rank.js';
import Logo from '../components/Logo/Logo.js';
import Tilt from 'react-parallax-tilt';
import ParticlesBg from 'particles-bg';
/*const Clarifai = require('clarifai');*/
import Clarifai from 'clarifai'; /*new way rather than old require way*/
const app = new Clarifai.App({
    apiKey: '2795a8038cf04b13b778c692f75fad67'
});
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
  OnSubmit = () =>{
    console.log("Click");
    app.model.predict("45fb9a671625463fa646c3523a3087d5","https://sample.clarifai.com/face-det.jpg").then(
      function(response){
        //do something
        console.log(response);
      },
      function(err){
        //do something error
      }
    );
  }
  render() {
    return (
      <div className="App">
      <ParticlesBg type="cobweb" bg={true} />
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm OnInputChange={this.OnInputChange} OnSubmit={this.OnSubmit}/>
      
     {/* 
      <FaceRecognition/>*/}
      </div>
      );
  }
}

export default App;
