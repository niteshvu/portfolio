import React from 'react';
import './App.css';
import Firebase from 'firebase';
import Background from './Components/Background/background'
import Plate from './Components/Plate/plate'
import Nav from './Components/Nav/nav'
import RouterContainer from './Components/Route Container/routeContainer'
import config from './config';

class App extends React.Component {
  constructor(props){
    super(props);
    Firebase.initializeApp(config);
  }
  render(){
    return (
      <div className="App">
        <Background>
          <Plate>
            <Nav/>
            <RouterContainer/>
          </Plate>
        </Background>
        
      </div>
    );
  }
}

export default App;
