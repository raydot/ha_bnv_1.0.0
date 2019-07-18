import React, { Fragment } from 'react';
import { Helmet } from "react-helmet";
import Layout from '../components/layout';
import foleyWinery from '../img/foley-winery.jpg';
import digitalCard from '../img/wine-explorer-digital-card.png';



const Dashboard = () => (
  <Fragment>
	  	<Helmet>
        	<title>Dashboard | Beyond Napa Valley</title>
			<meta name="description" content="Helmet application" />
      	</Helmet>
		<div className="smallHeader">
			<div className="titleInfo">
				<h1 className="pageTitle">Welcome</h1>
			</div>
			<div className="hero-overlay"></div>
			<img src={ foleyWinery } alt="Foley Winery" className="wineryImage" />
		</div>
	  
	  <div className="mainContent">
	          
		          
		          
		          <div className="content greyBG">
		          
		          <div className="grid-container">
			          	<div className="grid-100">
		            		<h2>A Snapshot</h2>
		            	</div>
		            </div>
		          
		          
		            <div className="grid-container">
			            <div className="grid-30">
		            	
		            		
		            		
		            		<img src={ digitalCard } alt="Digital Membership Card" className="imgFullCol" />
		            		<p><strong>Show Digital Membership Card to Winery</strong></p>
		            		<p>Only show image if yearly membership or if dates are current</p>
		            	</div>
		            	
		            	<div className="grid-70">
		            		<h3>My Plan:</h3>
		            		<p><em>Your membership refreshes 08 Jul 2022</em></p>
		            		<p>or</p>
		            		<p>Your membership runs from July 1 2019 to July 4 2019</p>
		            		<p>or</p>
		            		<p>Your currently on the free membership plan. Upgrade to start utilizing the discounts full membership has to offer.</p>
		            	</div>
		            </div>
		            
		            </div>
		            
		            
		            
		            <div className="grid-container">
		            	<div className="grid-100">
		            		<h2>Upcoming Events</h2>
		            		<p>There are none at this time. But keep checking back.</p>
		            	</div>
		            </div>
		          </div>
		              
	  

    
  </Fragment>
);

export default () => (
  <Layout>
    <Dashboard />
  </Layout>
);
