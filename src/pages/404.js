import React, { Fragment } from 'react';
import { Grid, GridContainer} from "unsemantic";
import Layout from '../components/layout';
import foleyWinery from '../img/foley-winery.jpg';



const FourOhFour = () => (
  <Fragment>
	  
		<div className="smallHeader">
			<div className="titleInfo">
				<h1 className="pageTitle">Oooof. This page doesn't exist.</h1>
			</div>
			<div className="hero-overlay"></div>
			<img src={ foleyWinery } alt="Foley Winery" className="wineryImage" />
		</div>
	  
	  <div className="mainContent">
		<GridContainer>
			<Grid desktop="50">
				<p>
					Sometimes things don't go as planned. We get it. In the meantime, take a look at how not to open a bottle of Champagne.
				</p>
			</Grid>
			<Grid desktop="50">
				<div className="video-container">
				<iframe width="560" height="315" src="https://www.youtube.com/embed/Osa_kK7msSY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
			</Grid>
		</GridContainer>
		
		  
	  </div>
	  

    
  </Fragment>
);

export default () => (
  <Layout>
    <FourOhFour />
  </Layout>
);
