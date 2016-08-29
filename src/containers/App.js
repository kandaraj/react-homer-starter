import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Includes the child containers and components
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';
import Splash from '../components/splash';
import * as actions from '../actions/agreementActions';

const App = (props) => {
  console.log(props);
  return (
    <span>
      <Splash />
      <Header metaData={props.metaData}/>
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

function mapsStateToProps(state) {
  return({
    user: state.user,
    metaData : state.metaData
  });
}
function mapsDispatchToProps(dispatch) {
  return({
    actions: bindActionCreators(actions, dispatch)
  })
}
export default connect(mapsStateToProps, mapsDispatchToProps)(App);
