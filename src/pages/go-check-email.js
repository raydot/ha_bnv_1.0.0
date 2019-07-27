import React, { Fragment } from 'react';
import { Helmet } from "react-helmet";
import Layout from '../components/layout-no-nav';
import foleyWinery from '../img/foley-winery.jpg';
//import digitalCard from '../img/wine-explorer-digital-card.png';



const GoCheckEmail = () => (
  <Fragment>
	  	<Helmet>
        	<title>Dashboard | Beyond Napa Valley</title>
			<meta name="description" content="Helmet application" />
      	</Helmet>
		<div className="smallHeader">
			<div className="titleInfo">
				<h1 className="pageTitle">Awesome! Now go Check Your Email</h1>
			</div>
			<div className="hero-overlay"></div>
			<img src={ foleyWinery } alt="Foley Winery" className="wineryImage" />
		</div>
	  
	  <div className="mainContent">
	          
		          
		          
		          <div className="mainContent">
		          
		          <div className="grid-container">
			          	<div className="grid-100">
		            		<p className="center">
			            		<strong>We need to ensure you're a real person. Strange but true. We'll be right here when you get back.  </strong>
		            		</p>
		            	</div>
		            </div>
		          
		          
		            
		            
		            </div>
		            
		            
		            
		           
		          </div>
		              
	  

    
  </Fragment>
);

export default () => (
  <Layout>
    <GoCheckEmail />
  </Layout>
);
