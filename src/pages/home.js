import React from 'react';
import { compose } from 'recompose';
import foleyWinery from '../img/foley-winery.jpg';

import Layout from '../components/layout';
import {
  withAuthorization,
  withEmailVerification,
} from '../components/Session';
import Messages from '../components/Messages';

const HomePageBase = () => (
  <div>
    <div className="smallHeader">
			<div className="titleInfo">
				<h1 className="pageTitle">Welcome John Snow</h1>
			</div>
			<div className="hero-overlay"></div>
			<img src={ foleyWinery } alt="Foley Winery" className="wineryImage" />
		</div>
	  
	  <div className="content">
		  Test
	  </div>
    
    
    
    <h1>Home Page</h1>
    <p>
    root/home.js  This is the "dashboard"
    The Home Page is accessible by every signed in user.
    </p>
    <Messages />
  </div>
);

const condition = authUser => !!authUser;

const HomePage = compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePageBase);

export default () => (
  <Layout>
    <HomePage />
  </Layout>
);
