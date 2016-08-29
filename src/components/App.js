import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

// Includes the child containers and components
import Header from '../containers/header';

// Include all the root level styles and JS


const App = (props) => {
  return (
    <div>
    <Header/>
    <div>
      {props.children}
    </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
