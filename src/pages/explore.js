import React, { Fragment } from 'react';
import { Grid, GridContainer} from "unsemantic"

import Layout from '../components/layout';
import foleyWinery from '../img/foley-winery.jpg';
import exploreWineCounty from "../img/explore-wine-country.jpg"
import MercurySquare from "../img/mercury-square.jpg"
import jRickards from "../img/jrickards.jpg"
import ramazzotti from "../img/ramazzotti-wine.jpg"
import nallewinery from "../img/nalle-winery.jpg"
import taltywine from "../img/talty-wine.jpg"
import alquimista from "../img/alquimista-cellars.jpg"
import hambycellars from "../img/hamby-cellars.jpg"
import camapanaranch from "../img/campana-ranch.jpg"
import brooksnote from "../img/brooks-note-winery.jpg"
import hookladderwinery from "../img/hook-and-ladder-winery.jpg"
import beehunterwine from "../img/bee-hunter-wine.jpg"
import seebasswine from "../img/seebass-wine.jpg"
import barrawinery from "../img/barra-winery.jpg"



const SignInPage = () => (
  <Fragment>
	  
		<div className="smallHeader">
			<div className="titleInfo">
				<h1 className="pageTitle">Explore</h1>
			</div>
			<div className="hero-overlay"></div>
			<img src={ foleyWinery } alt="Foley Winery" className="wineryImage" />
		</div>
	  
	  <div className="mainContent">
          
	          <div className="content">
	            <GridContainer>
	            	<Grid desktop="100">
	            		<h2>When you become a Wine Explorer, you have access to all of the wineries below. Simply walk in and show you're membership ID and that's it. Some are by appointment so do plan in advance. We recommend no more than 3-4 wineries per day too. That wine can easily sneak up on you!</h2>
	            	</Grid>
	            </GridContainer>
	          </div>
	          
	          <GridContainer>
	       <h2>Sonoma - Alexander Valley AVA</h2>
	       </GridContainer>
	       <GridContainer>
	       		<Grid desktop="33">
	       			<img src={jRickards} alt={'J. Rickards Winery'} className="imgFullCol" />
		   			<h3>J. Rickards Winery</h3>
		   			<ul>
		   				<li>Open to the Public | Daily 11-4pm</li>
		   				<li>24505 Chianti Rd, Cloverdale, CA 95425</li>
		   				<li>Phone: (707) 758-3441</li>
		   			</ul>
          
	       		</Grid>
	       		<Grid desktop="33">
	       			<img src={MercurySquare} alt={'Mercury Winery'} className="imgFullCol" />
		   			<h3>Mercury Winery</h3>
		   			<ul>
		   				<li>Open to the Public | Daily 11-6pm</li>
		   				<li>21015 Geyserville Ave, Geyserville, CA 95441</li>
		   				<li>Phone:  (707) 857-9870</li>
		   			</ul>
          
	       		</Grid>
	       		<Grid desktop="33">
	       			<img src={ramazzotti} alt={'Ramazzotti Wine'} className="imgFullCol" />
		   			<h3>Ramazzotti Winery</h3>
		   			<ul>
		   				<li>Open to the Public | Daily 11-5pm</li>
		   				<li>21015 Geyserville Ave, Geyserville, CA 95441</li>
		   				<li>Phone: (707) 814-0016</li>
		   			</ul>
          
	       		</Grid>
	       </GridContainer>
	       
	       <GridContainer>
	       <h2>Sonoma - Dry Creek Valley AVA</h2>
	       </GridContainer>
	       <GridContainer>
	       		<Grid desktop="33">
	       			<img src={nallewinery} alt={'Nalle Winery'} className="imgFullCol" />
		   			<h3>Nalle Winery</h3>
		   			<ul>
		   				<li>Open Saturday - Sunday | 12:00 - 4:30pm</li>
		   				<li>2383 Dry Creek Rd, Healdsburg, CA 95448</li>
		   				<li>Phone: (707) 433-1040</li>
		   			</ul>
          
	       		</Grid>
	       		<Grid desktop="33">
	       			<img src={taltywine} alt={'Talty Winery'} className="imgFullCol" />
		   			<h3>Talty Vineyards</h3>
		   			<ul>
		   				<li>Public | Fri. - Sun. 12 - 4pm</li>
		   				<li>7127 Dry Creek Rd, Healdsburg, CA 95448</li>
		   				<li>Phone: (707) 433-8438</li>
		   			</ul>
          
	       		</Grid>
	       		<Grid desktop="33">
	       			
	       		</Grid>
	       </GridContainer>
	       
	       <GridContainer>
	       <h2>Sonoma - Russian River Valley AVA</h2>
	       </GridContainer>
	       <GridContainer>
	       		<Grid desktop="33">
	       			<img src={alquimista} alt={'Alquimista Cellars'} className="imgFullCol" />
		   			<h3>Alquimista Cellars</h3>
		   			<ul>
		   				<li>By Appointment, call for reservation</li>
		   				<li>Sebastapol, CA (Address provided upon booking)</li>
		   				<li>Phone: (707) 217-9728</li>
		   			</ul>
          
	       		</Grid>
	       		<Grid desktop="33">
	       			<img src={camapanaranch} alt={'Campana Ranch Winery'} className="imgFullCol" />
		   			<h3>Campana Ranch Winery</h3>
		   			<ul>
		   				<li>By Appointment, call for reservation</li>
		   				<li>3631 Mark West Station Rd, Windsor, CA 95492</li>
		   				<li>Phone: (707) 337-0844</li>
		   			</ul>
          
	       		</Grid>
	       		<Grid desktop="33">
	       			<img src={hambycellars} alt={'Hamby Cellars'} className="imgFullCol" />
		   			<h3>Hamby Cellars</h3>
		   			<ul>
		   				<li>By Appointment, call for reservation</li>
		   				<li>Sebastapol, CA (Address provided upon booking)</li>
		   				<li>m.me/hambycellarswine</li>
		   			</ul>
	       		</Grid>
	       </GridContainer>
	       
	       <GridContainer>
	       		<Grid desktop="33">
		   			<img src={hookladderwinery} alt={'Hook and Ladder Winery'} className="imgFullCol" />
		   			<h3>Hook & Ladder Cellars</h3>
		   			<ul>
		   				<li>Open to the Public | 10 - 4:30pm</li>
		   				<li>Please call ahead for reserve tasting</li>
		   				<li>Address: 2134 Olivet Rd, Santa Rosa, CA 95401</li>
		   				<li>Phone: (707) 526-2255</li>
		   			</ul>
	       		</Grid>
	       </GridContainer>
	       
	       <GridContainer>
	       <h2>Marin County - San Francisco Bay Area</h2>
	       </GridContainer>
	       <GridContainer>
	       		<Grid desktop="33">
	       			<img src={brooksnote} alt={'Alquimista Cellars'} className="imgFullCol" />
		   			<h3>Brooks Note Winery</h3>
		   			<ul>
		   				<li>By Appointment, call for reservation</li>
		   				<li>1026 Machin Ave, Novato, CA 94945</li>
		   				<li>Phone: (415) 637-8106</li>
		   			</ul>
          
	       		</Grid>
	       		<Grid desktop="33">
	       		
	       		</Grid>
	       		<Grid desktop="33">
	       			
	       		</Grid>
	       </GridContainer>
	       
	       <GridContainer>
	       <h2>Mendocino - Anderson Valley</h2>
	       </GridContainer>
	       <GridContainer>
	       		<Grid desktop="33">
	       			<img src={beehunterwine} alt={'Bee Hunter Winery'} className="imgFullCol" />
		   			<h3>Bee Hunter Wine</h3>
		   			<ul>
		   				<li>Public | Mon - Friday 9 - 5pm | Sat/Sun 11 - 5pm</li>
		   				<li>14251 CA-128, Boonville, CA 95415</li>
		   				<li>Phone: (707) 895-3995</li>
		   			</ul>
	       		</Grid>
	       		<Grid desktop="33">
	       			<img src={seebasswine} alt={'Seebass Family Wines Tasting Room'} className="imgFullCol" />
		   			<h3>Seebass Family Wines Tasting Room</h3>
		   			<ul>
		   				<li>Public | Sat. - Thurs. 11 - 5pm | Fri. 11 - 7pm</li>
		   				<li>14077 CA-128, Boonville, CA 95415</li>
		   				<li>Phone: (707) 895-9378</li>
		   			</ul>
	       		</Grid>
	       		<Grid desktop="33">
	       			
	       		</Grid>
	       </GridContainer>
	       
	       <GridContainer>
	       <h2>Mendocino - Ukiah</h2>
	       </GridContainer>
	       <GridContainer>
	       		<Grid desktop="33">
	       			<img src={barrawinery} alt={'Barra of Mendocino Winery'} className="imgFullCol" />
		   			<h3>Barra of Mendocino</h3>
		   			<ul>
		   				<li>Public | 10 - 5pm Daily</li>
		   				<li>7051 N State St, Redwood Valley, CA 95470</li>
		   				<li>Phone: (707) 485-0322</li>
		   			</ul>
	       		</Grid>
	       		<Grid desktop="33">
	       			
	       		</Grid>
	       		<Grid desktop="33">
	       			
	       		</Grid>
	       </GridContainer>
	          
	          </div>
	  

    
  </Fragment>
);

export default () => (
  <Layout>
    <SignInPage />
  </Layout>
);
