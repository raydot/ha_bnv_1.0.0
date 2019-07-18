import React, { Fragment } from 'react';
import { Helmet } from "react-helmet";
import Layout from '../components/layout';
import foleyWinery from '../img/foley-winery.jpg';
import digitalCard from '../img/wine-explorer-digital-card.png';



const GoCheckEmail = () => (
  <Fragment>
	  	<Helmet>
        	<title>Dashboard | Beyond Napa Valley</title>
			<meta name="description" content="Helmet application" />
      	</Helmet>
		<div className="smallHeader">
			<div className="titleInfo">
				<h1 className="pageTitle">Hold Up. Go Check Your Email</h1>
			</div>
			<div className="hero-overlay"></div>
			<img src={ foleyWinery } alt="Foley Winery" className="wineryImage" />
		</div>
	  
	  <div className="mainContent">
	          
		          
		          
		          <div className="mainContent">
		          
		          <div className="grid-container">
			          	<div className="grid-100">
		            		<p className="center">
			            		<strong>You need to go check your email to authenaticate that you are a real person. </strong>
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
