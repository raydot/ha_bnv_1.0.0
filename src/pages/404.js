import React, { Fragment } from 'react';

import Layout from '../components/layout';
import foleyWinery from '../img/foley-winery.jpg';



const SignInPage = () => (
  <Fragment>
	  
		<div className="smallHeader">
			<div className="titleInfo">
				<h1 className="pageTitle">404</h1>
			</div>
			<div className="hero-overlay"></div>
			<img src={ foleyWinery } alt="Foley Winery" className="wineryImage" />
		</div>
	  
	  <div className="content">
		  
		  <h1>Sorry, the page you're looking for cannot be found.</h1>
		  
	  </div>
	  

    
  </Fragment>
);

export default () => (
  <Layout>
    <SignInPage />
  </Layout>
);
