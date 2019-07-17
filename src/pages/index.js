import React, { Fragment } from 'react';
import foleyWinery from '../img/foley-winery.jpg';
import Layout from '../components/layout';

const LandingPage = () => (
  <Fragment>
	  <div className="smallHeader">
			<div className="titleInfo">
				<h1 className="pageTitle">Become a Wine Explorer</h1>
			</div>
			<div className="hero-overlay"></div>
			<img src={ foleyWinery } alt="Foley Winery" className="wineryImage" />
		</div>
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
