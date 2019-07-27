import React, { Component, Fragment } from 'react';

//import Navigation from './Navigation';
import Footer from './Footer';
import getFirebase, { FirebaseContext } from './Firebase';
import withAuthentication from './Session/withAuthentication';
//import CSS from "../css/global.css"
//import Grid from "../css/unsemantic-grid-responsive-tablet-no-ie7.css"

class Layout extends Component {
  state = {
    firebase: null,
  };

  componentDidMount() {
    const app = import('firebase/app');
    const auth = import('firebase/auth');
    const database = import('firebase/database');

    Promise.all([app, auth, database]).then(values => {
      const firebase = getFirebase(values[0]);

      this.setState({ firebase });
    });
  }

  render() {
    return (
      <FirebaseContext.Provider value={this.state.firebase}>
        <AppWithAuthentication {...this.props} />
      </FirebaseContext.Provider>
    );
  }
}

const AppWithAuthentication = withAuthentication(({ children }) => (
  <Fragment>
    {children}
    <Footer />
  </Fragment>
));

export default Layout;
