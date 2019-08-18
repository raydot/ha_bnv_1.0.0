
import React, { Fragment } from 'react';
import { Grid, GridContainer} from 'unsemantic'
import Layout from '../components/layout';
import foleyWinery from '../img/foley-winery.jpg';
import PurchaseDetailsLeft from '../components/Purchase/PurchaseDetailsLeft'
import PurchaseDetailsRight from '../components/Purchase/PurchaseDetailsRight'

 
const Purchase = () => (
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
				<form>
					AEIOUY
					<Grid desktop="50">
						<PurchaseDetailsLeft />
					</Grid>

					<Grid desktop="50">
						<PurchaseDetailsRight />
					</Grid>
				</form>		
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
	  <Purchase />
	</Layout>
  );