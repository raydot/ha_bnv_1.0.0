import React, { Component } from 'react'
import { Grid, GridContainer} from 'unsemantic'
//import { Route, NavLink } from "react-router-dom"
import { Link, NavLink } from 'react-router-dom'

import MustardVines from '../img/mustard-vines.jpg'
import foleyWinery from '../img/foley-winery.jpg'
 
class Join extends Component {
	// handleSubmit(event) {
	// 	event.preventDefault()
	// 	const data = new FormData(event.target)
	
	// 	console.log(data)

	// 	// fetch('/register', {
	// 	// 	method: 'GET',
	// 	// 	body: data
	// 	// })
	// }

	constructor(props) {
			super(props)
			console.log('v?', this.props.location.state.viz)
		}

  render() {
    return (
      <div>
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
	       </div>
       </div> 
    );
  }
}
 
export default Join