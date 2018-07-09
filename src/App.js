import React, { Component } from 'react';
import Particles from 'react-particles-js';
import ButtonAppBar from './components/ButtonAppBar/ButtonAppBar';
import Avatar from './components/Avatar/Avatar';
import CardList from './CardList';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import './App.css';
import { apps } from './apps';

import CssBaseline from '@material-ui/core/CssBaseline';


const particlesOptions = {
    particles: {
      line_linked: {
        shadow: {
          enable: true,
          color: "#3CA9D1",
          blur: 5
        }
      }
    }
  }
  


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div className='App'>
        <Particles className='particles'
              params={particlesOptions}
            />
            
          <ButtonAppBar />
          <Avatar />
          <CardList apps={apps} />
          <BottomNavigation />
         
        </div>
        </React.Fragment>
    );
  }
}

export default App;
