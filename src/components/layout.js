import React, { Component, Fragment } from 'react';
import { Helmet } from "react-helmet";
import Navigation from './Navigation';
import Footer from './Footer';
import getFirebase, { FirebaseContext } from './Firebase';
import withAuthentication from './Session/withAuthentication';
import CSS from "../css/global.css"
import Grid from "../css/unsemantic-grid-responsive-tablet-no-ie7.css"

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
    <Helmet>
      <script src="https://cdn.firebase.com/libs/firebaseui/4.1.0/firebaseui.js"></script>
      <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/4.1.0/firebaseui.css" />
      <script src="https://www.gstatic.com/firebasejs/ui/4.1.0/firebase-ui-auth__en.js"></script>
      <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/4.1.0/firebase-ui-auth.css" />
      <script src="node_modules/firebaseui/dist/firebaseui.js"></script>
      <link type="text/css" rel="stylesheet" href="node_modules/firebaseui/dist/firebaseui.css" />
      <script src="https://js.stripe.com/v3"></script>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </Helmet>
    <Navigation />
    {children}
    <Footer />
  </Fragment>
));

export default Layout;
