import React from 'react';
import { Page, Button } from 'react-onsenui';
import { connect } from 'react-redux';

import { renderSettings } from './actions';

const LoginPage = props => {

  return (
    <Page>
      <h1>Login</h1>
      <Button onClick={props.switchPage}>Switch To Settings</Button>
    </Page >);
}

const mapDispatchToProps = dispatch => {
  return {
    switchPage: () => dispatch(renderSettings())
  };
}

export default connect(null, mapDispatchToProps)(LoginPage);;

