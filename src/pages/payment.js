
import React, { Fragment } from 'react';
import { Grid, GridContainer} from 'unsemantic'
import Layout from '../components/layout';
import foleyWinery from '../img/foley-winery.jpg';

 
const Payment = () => (
	<Fragment>
		<div className="smallHeader">
		<div className="titleInfo">
			<h1 className="pageTitle">Make Payment<span className="smallerType">&trade;</span> Member</h1>
		</div>
		<div className="hero-overlay"></div>
		<img src={ foleyWinery } alt="Foley Winery" className="wineryImage" />
		</div>
   
	    <div className="content">          	
	    	<GridContainer>
	       		<Grid desktop="100">
	            	<form>
	            	AEIOUY
	            	</form>		
				</Grid>
		  	</GridContainer>
	    </div>
		
		<Grid>
			<GridContainer>
	       		<p className="smallerType center">* Limited to a case at select wineries | ** Coming 2019 / 2020 | All purchases are non-refundable | Please drink responsibly</p>
	       	</GridContainer>
		</Grid>  
	</Fragment>
)

 
export default () => (
	<Layout>
	  <Payment />
	</Layout>
  );