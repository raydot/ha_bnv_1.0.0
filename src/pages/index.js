import React, { Fragment } from 'react';

import Layout from '../components/layout';

const LandingPage = () => (
  <Fragment>
    <h1>Landing</h1>
    <p>
      This is root/index.js<br />
      The Landing Page is open to everyone, even though the user isnt
      signed in.
    </p>
  </Fragment>
);

export default () => (
  <Layout>
    <LandingPage />
  </Layout>
);
