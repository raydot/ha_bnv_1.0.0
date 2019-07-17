import React, { Fragment } from 'react';

import Layout from '../components/layout';
import foleyWinery from '../img/foley-winery.jpg';



const SignInPage = () => (
  <Fragment>
	  
		<div className="smallHeader">
			<div className="titleInfo">
				<h1 className="pageTitle">Explore</h1>
			</div>
			<div className="hero-overlay"></div>
			<img src={ foleyWinery } alt="Foley Winery" className="wineryImage" />
		</div>
	  
	  <div className="content">
		  
		  Test
		  
	  </div>
	  

    
  </Fragment>
);

export default () => (
  <Layout>
    <SignInPage />
  </Layout>
);
