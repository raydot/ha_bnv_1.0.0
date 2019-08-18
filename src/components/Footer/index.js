import React from 'react';
import { Link } from 'gatsby';


const Footer = () => (
  <div>
    <footer className="site-footer">
			<div className="site-footer--container">
			
			<div className="grid-container">
				<div className="grid-33">
				<h3>Our Mission</h3>
				<p>To empower wine explorers to go out and seek out that next bottle of amazing wine.</p>
				
				</div>
				<div className="grid-33">
				<h3>Connect on Social Media</h3>
					<ul>
						<li><a href="https://www.facebook.com/beyondnapavalley/"><span>Facebook</span></a></li>
						<li><a href="https://www.instagram.com/beyondnapavalley/"><span>Instagram</span></a></li>
						<li><a href="https://twitter.com/beyond_napa"><span>Twitter</span></a></li>
					</ul>
				
				</div>
				<div className="grid-33">
					<h3>Other Resources</h3>
					<ul>
						<li><Link to="/">Support</Link></li>
						<li><a href="https://www.facebook.com/beyondnapavalley/"><span>Privacy Policy</span></a></li>
						<li><a href="https://www.facebook.com/beyondnapavalley/"><span>Subscribe to our Newsletter</span></a></li>
					</ul>
					
				</div>
			</div>
				<p className="center">Copyright &copy;{(new Date().getFullYear())} Beyond Napa Valley | Please drink responsibly</p>
			</div>
		</footer>
  </div>
);


export default Footer;
