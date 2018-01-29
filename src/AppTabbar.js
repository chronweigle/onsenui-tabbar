import React from 'react';
import { Page, Tabbar, Tab } from 'react-onsenui';
import { connect } from 'react-redux';

import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SettingsPage from './SettingsPage';

const AppTabbar = props => {
  const login = navigator => [
    {
      content: <HomePage key="home" navigator={props.navigator} />,
      tab: <Tab key="home" label="Home" icon="md-home" />
    },
    {
      content: <LoginPage key="login" navigator={props.navigator} />,
      tab: <Tab key="login" label="Login" icon="md-account-o" />
    }
  ];

  const settings = navigator => [
    {
      content: <HomePage key="home" navigator={props.navigator} />,
      tab: <Tab key="home" label="Home" icon="md-home" />
    },
    {
      content: <SettingsPage key="settings" navigator={props.navigator} />,
      tab: <Tab key="settings" label="Settings" icon="md-settings" />
    }
  ];

  return (
    <Page>
      <Tabbar position='bottom' index={0} renderTabs={props.loginPage ? login : settings} />
    </Page>
  );
};

export default connect(({ tabReducer: loginPage }) => loginPage)(AppTabbar);