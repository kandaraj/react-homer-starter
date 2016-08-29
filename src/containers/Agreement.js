/**
 * Created by skandara on 29/08/2016.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/agreementActions';
import NewAgreement from '../components/NewAgreement';

export const Agreement = (props) => {
  console.log(props);
  return <NewAgreement />;
}

Agreement.proptypes = {
  agreement: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapsStateToProps (state) {
  return {
    agreement: state.agreement
  }
}

function mapsDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(Agreement);
