import React, { Fragment } from 'react';

import Layout from '../components/layout';
import foleyWinery from '../img/foley-winery.jpg';

import SignInForm, {
  SignInGoogle,
  SignInFacebook,
  SignInTwitter,
} from '../components/SignIn';
import { SignUpLink } from '../components/SignUp';
import { PasswordForgetLink } from '../components/PasswordForget';

const SignInPage = () => (
  <Fragment>
	  
	  <div className="smallHeader">
		  	<div className="titleInfo">
		  		<h1 className="pageTitle">Sign In</h1>
          	</div>
          	<div className="hero-overlay"></div>
          	<img src={ foleyWinery } alt="Foley Winery" className="wineryImage" />
		  	</div>
	  
	  
	  
    <h1>SignIn</h1>
    <SignInForm />
    <SignInGoogle />
    <SignInFacebook />
    <SignInTwitter />
    <PasswordForgetLink />
    <SignUpLink />
  </Fragment>
);

export default () => (
  <Layout>
    <SignInPage />
  </Layout>
);
