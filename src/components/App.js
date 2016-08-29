import React, { PropTypes } from 'react';

// Includes the child containers and components
import { Header } from '../containers/Header';
import { Footer } from '../containers/footer';
import { Navigation } from '../containers/navigation';
import Splash from '../components/splash';

const App = (props) => {
  return (
    <span>
      <Splash />
      <Header/>
      <Navigation />
      <div id="wrapper">
        <div className="content animate-panel">
          {props.children}
        </div>
        <Footer/>
      </div>
    </span>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
