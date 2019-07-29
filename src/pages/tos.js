import React, { Fragment } from 'react';
import { Grid, GridContainer} from "unsemantic";
import Layout from '../components/layout';
import foleyWinery from '../img/foley-winery.jpg';



const TermsOfService = () => (
  <Fragment>
	  
		<div className="smallHeader">
			<div className="titleInfo">
				<h1 className="pageTitle">Our Terms of Service</h1>
			</div>
			<div className="hero-overlay"></div>
			<img src={ foleyWinery } alt="Foley Winery" className="wineryImage" />
		</div>
	  
	  <div className="mainContent">
	  <GridContainer>
                <Grid desktop="100">
                  <p>Please read these terms and conditions ("terms", "terms and conditions") carefully before using beyondnapavalley.com website (the "service") operated by Beyond Napa Valley.</p>
                  
                  
                  <h3>TERMS OF SERVICE AGREEMENT</h3>
                  <p>
                  PLEASE READ THE FOLLOWING TERMS OF SERVICE AGREEMENT CAREFULLY. BY ACCESSING OR USING OUR SITES AND OUR SERVICES, YOU HEREBY AGREE TO BE BOUND BY THE TERMS AND ALL TERMS INCORPORATED HEREIN BY REFERENCE. IT IS THE RESPONSIBILITY OF YOU, THE USER, CUSTOMER, OR PROSPECTIVE CUSTOMER TO READ THE TERMS AND CONDITIONS BEFORE PROCEEDING TO USE THIS SITE. IF YOU DO NOT EXPRESSLY AGREE TO ALL OF THE TERMS AND CONDITIONS, THEN PLEASE DO NOT ACCESS OR USE OUR SITES OR OUR SERVICES. THIS TERMS OF SERVICE AGREEMENT IS EFFECTIVE AS OF 05/01/19.</p>

                  <h3>Conditions of Use</h3>

                  <p>We will provide their services to you, which are subject to the conditions stated below in this document. Every time you visit this website, use its services or make a purchase, you accept the following conditions.</p>

                  <h3>Privacy Policy</h3>

                  <p>Before you continue using our website we advise you to read our privacy policy regarding our user data collection. It will help you better understand our practices.</p>

                  <h3>Copyright</h3>

                  <p>Content published on this website (digital downloads, images, texts, graphics, logos) is the property of Beyond Napa Valley and/or its content creators and protected by international copyright laws. The entire compilation of the content found on this website is the exclusive property of Beyond Napa Valley, with copyright authorship for this compilation by Haydn Adams.</p>

                  <h3>Membership Eligibility</h3>

                  <p>The Site is available to members who are 21 years and older and who have not been suspended or removed by Beyond Napa Valley for any reason. By becoming a member you represent that you are of legal age and that you reside in the United States. If you do not qualify, you may not use the Site. As a member, you agree to provide accurate, current and complete information about yourself as prompted by the Site’s registration form. Members may not have more than one active account.</p>

                  <h3>Communications</h3>

                  <p>The entire communication with us is electronic. Every time you send us an email or visit our website, you are going to be communicating with us. You hereby consent to receive communications from us. If you subscribe on our website, you are going to receive regular emails from us. We will continue to communicate with you by posting news and notices on our website and by sending you emails. You also agree that all notices, disclosures, agreements and other communications we provide to you electronically meet the legal requirements that such communications be in writing.</p>

                  <h3>Applicable Law</h3>

                  <p>By visiting this website, you agree that the laws of the state of California, without regard to principles of conflict laws, will govern these terms and conditions, or any dispute of any sort that might come between Beyond Napa Valley and you, or its business partners and associates.</p>

                  <h3>Disputes</h3>

                  <p>Any dispute related in any way to your visit to this website or to products you purchase from us shall be arbitrated by state or federal court and you consent to exclusive jurisdiction and venue of such courts.</p>

                  <h3>License and Site Access</h3>

                  <p>We grant you a limited license to access and make personal use of this website. You are not allowed to download or modify it. This may be done only with written consent from us.</p>

                  <h3>User Account</h3>

                  <p>If you are an owner of an account on this website, you are solely responsible for maintaining the confidentiality of your private user details (username and password). You are responsible for all activities that occur under your account or password.</p>

                  <h3>Links</h3>

                  <p>Either Beyond Napa Valley or any third parties may provide links to other websites and/or resources. Thus, you acknowledge and agree that we are not responsible for the availability of any such external sites or resources, and as such, we do not endorse nor are we responsible or liable for any content, products, advertising or any other materials, on or available from such third party sites or resources. Furthermore, you acknowledge and agree that Beyond Napa Valley shall not be responsible or liable, directly or indirectly, for any such damage or loss which may be a result of, caused or allegedly to be caused by or in connection with the use of or the reliance on any such content, goods or Services made available on or through any such site or resource.</p>

                  <h3>Indemnity</h3>
                  
                  <p>All users herein agree to insure and hold Beyond Napa Valley, our subsidiaries, affiliates, agents, employees, officers, partners and/or licensors blameless or not liable for any claim or demand, which may include, but is not limited to, reasonable attorney fees made by any third party which may arise from any content a user of our site may submit, post, modify, transmit or otherwise make available through our Services, the use of Beyond Napa Valley or your connection with these Services, your violations of the Terms of Service and/or your violation of any such rights of another person.</p>
                  
                  <h3>User Submissions</h3>

                  <p>Except for any personally identifiable information we may collect from you under the guidelines established in our Privacy Policy, any material, information or other communication you transmit, upload or post to this Site (“Communications”) will be considered non-confidential and non-proprietary. Beyond Napa Valley will have no obligations with respect to the Communications. Beyond Napa Valley and its designees will be free to copy, disclose, distribute, incorporate and otherwise use the Communications and all data, images, sounds, text, and other things embodied therein for any and all commercial or noncommercial purposes.</p>

                  <h3>Term and Termination</h3>

                  <p>These terms and conditions are applicable to you upon your accessing the Site and/or completing the registration or shopping process. These terms and conditions, or any of them, may be modified or terminated by Beyond Napa Valley without notice at any time for any reason. The provisions relating to Copyrights and Trademarks, Disclaimer, Claims, Limitation of Liability, Indemnification, Applicable Laws, Arbitration and General, shall survive any termination.</p>

                  <p>Please enjoy responsibly.</p>

                </Grid>
              </GridContainer>
		
		  
	  </div>
	  

    
  </Fragment>
);

export default () => (
  <Layout>
    <TermsOfService />
  </Layout>
);
