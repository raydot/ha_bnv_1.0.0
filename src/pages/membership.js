import React, { Fragment } from 'react';
import { Helmet } from "react-helmet";
import Layout from '../components/layout';
import foleyWinery from '../img/foley-winery.jpg';
import MustardVines from '../img/mustard-vines.jpg';


const SignInPage = () => (
  <Fragment>
	  <Helmet>
        	<title>Membership Benefits | Beyond Napa Valley</title>
			<meta name="description" content="Explore the benefits that the Wine Explorer Membership has to offer." />
      	</Helmet>
		<div className="smallHeader">
			<div className="titleInfo">
				<h1 className="pageTitle">Membership Benefits</h1>
			</div>
			<div className="hero-overlay"></div>
			<img src={ foleyWinery } alt="Foley Winery" className="wineryImage" />
		</div>
	  
	  <div className="mainContent">
		  
		  <div className="content synopsis">
	            <div className="grid-container">
	            	<div className="grid-100">
	            		<p>Beyond Napa Valley’s Wine Explorer membership allows you to access a curated list of participating wineries with exclusive discounts. This membership is for the wine explorer who wants to get out and explore the wine regions of the world.</p>
	            		<p>

With membership you’ll get the following:</p>
	            	</div>
	            </div>
	          </div>
	          
	          <div className="content greyBG">
	            <div className="grid-container">
				  <div className="grid-50">
				    <h3>Complimentary tasting for you + guest</h3>
				    <p>With our membership, all of your tastings are complimentary as well as your guest. We want you to get out and explore without the worry of what the tasting fee might be.</p>
				    <h3>25% off enhanced / reserve tasting</h3>
				    <p>Have you ever been to a winery where you were tempted to try a reserve flight of wine but the cost prohibited you from trying it? With the card, we bring the cost down for you, allowing you to go ahead and try that reserve flight of wine.</p>
				  </div>
				  <div className="grid-50">
				    <h3>10% off Wine Purchases</h3>
				    <p>Find a wine you like? Awesome. Grab it. Our membership allows you to purchase all wine at the winery for 10% off. From the most widely distributed to the reserve blend, you get it all at a reduced price.</p>
				    
				    <h3>Additional 5% off your wine purchase the day you join the wine club*</h3>
				    <p>Sometimes you just fall in love with all of the wine a winery has to offer. The best way to enjoy the wines at a greater discount is to join the wine club. We want to make the experience a little better by giving you an additional 5% of the winery’s discount when joining.</p>
				    
				    <p className="smallerType">* Limited to a case of wine at select wineries.</p>
				  </div>
				</div>
	          </div>
		  
		  
		  <div className="smallHeader">
		  	<div className="titleInfo">
		  		<h2 className="pageTitle">And yes! There is an app for this!</h2>
          	</div>
          	<div className="hero-overlay"></div>
          	<img src={ MustardVines } alt="Mustard Vines" className="wineryImage" />
          </div>
          
	  </div>
	  

    
  </Fragment>
);

export default () => (
  <Layout>
    <SignInPage />
  </Layout>
);
