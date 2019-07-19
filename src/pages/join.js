import React, { Fragment } from 'react';
import { Helmet } from "react-helmet";
import { Grid, GridContainer} from "unsemantic";
import Layout from '../components/layout';
import foleyWinery from '../img/foley-winery.jpg';
import MustardVines from '../img/mustard-vines.jpg';


const Join = () => (
  <Fragment>
	  <Helmet>
        	<title>Join | Beyond Napa Valley</title>
			<meta name="description" content="Become a Wine Explorer | Beyond Napa Valley" />
      	</Helmet>
		<div className="smallHeader">
			<div className="titleInfo">
				<h1 className="pageTitle">Join</h1>
			</div>
			<div className="hero-overlay"></div>
			<img src={ MustardVines } alt="Foley Winery" className="wineryImage" />
		</div>
	  
	  <div className="mainContent">
		  
		<GridContainer>
			<Grid desktop="33">
				<button 
					onClick={ handleButtonClicked }
					value='80'
				>
					<p>Buy a 1-Day Pass</p>
					<p>$80 (non subsciption)</p>
					<p>Needs a calendar option to choose day</p>
				</button>
			</Grid>
			<Grid desktop="33">
				<button 
					onClick={ handleButtonClicked }
					value='180'
				>
					<p>Buy a 3-Day Pass</p>
					<p>$180 (non subscription)</p>
					<p>Needs a calendar option to choose day</p>
				</button>
			</Grid>
			<Grid desktop="33">
				<button 
					onClick={ handleButtonClicked }
					value='250'
				>
					<p>Buy a Year Pass</p>
					<p>$250 / year (subscription)</p>
				</button>
			</Grid>
		</GridContainer>
          
	  </div>
	  

    
  </Fragment>
);

var handleButtonClicked = function(e) {
	//setState({
		// Retrieve 'value' attribute
		//message: `Button ${e.currentTarget.value} clicked`
	//})
	message: `Button ${e.currentTarget.value} clicked`
	console.log('hello!', e.currentTarget.value)
}

//this.handleButtonClick = this.handButtonClick.bind(this)

export default () => (
  <Layout>
    <Join />
  </Layout>
);
