import React, { Fragment } from 'react';
import {Helmet} from "react-helmet";
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
	  
	  <div className="content">
		  
		  <div className="mainContent">
  	          <div className="content synopsis">
  	            <div className="grid-container">
  	            	<div className="grid-100">
	  	            	<div className="signup-content">
		  					<SignInForm />
		  					<SignInGoogle />
		  					
		  					<PasswordForgetLink />
		  					<SignUpLink />
	  					</div>
  	            	</div>
  	            </div>
  	          </div>
  	       </div>
		  
	  </div>
	  

    
  </Fragment>
);

export default () => (
  <Layout>
    <SignInPage />
  </Layout>
);
