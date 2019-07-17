import React, { Fragment } from 'react';
import foleyWinery from '../img/foley-winery.jpg';
import Layout from '../components/layout';
import SignUpForm from '../components/SignUp';

const SignUpPage = () => (
  <Fragment>
	  <div className="smallHeader">
			<div className="titleInfo">
				<h1 className="pageTitle">Sign Up to become a Wine Explorer Member</h1>
			</div>
			<div className="hero-overlay"></div>
			<img src={ foleyWinery } alt="Foley Winery" className="wineryImage" />
		</div>
		<div className="signup-content">
			<SignUpForm />
		</div>
  </Fragment>
);

export default () => (
  <Layout>
    <SignUpPage />
  </Layout>
);
