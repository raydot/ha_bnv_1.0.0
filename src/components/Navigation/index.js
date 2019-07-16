import React from 'react';
import { Link } from 'gatsby';

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);


const NavigationAuth = ({ authUser }) => (
  <div>
	  <nav>              
		// 	<div className='clear'></div>
		<div className='columns'>
			<div className='leftCol'>
				<Link to='/' className='logo'><span>Beyond Napa Valley</span></Link>
			</div>
			
			<div className='rightCol'>
				<ul className='header'>
					<li><Link to='/explore'>Explore</Link></li>
					<li><Link to='/membership'>Membership Benefits</Link></li>
					<li><Link to='/join'>Join</Link></li>
					<li><Link to={ROUTES.LANDING}>Landing</Link></li>
					<li><Link to={ROUTES.HOME}>Home</Link></li>
					<li><Link to={ROUTES.ACCOUNT}>Account</Link></li>
						{!!authUser.roles[ROLES.ADMIN] && (
							<li>
								<Link to={ROUTES.ADMIN}>Admin</Link>
      						</li>
					    )}
					    
					<li><SignOutButton /></li>
				</ul>
			</div>
		</div>
		</nav>
  </div>
);

const NavigationNonAuth = () => (
  <div>
	<nav>              
		<div className='columns'>
			<div className='leftCol'>
				<Link to='/' className='logo'><span>Beyond Napa Valley</span></Link>
			</div>
			
			<div className='rightCol'>
				<ul className='header'>
					<li><Link to='/explore'>Explore</Link></li>
					<li><Link to='/membership'>Membership Benefits</Link></li>
					<li><Link to='/join'>Join</Link></li>
					<li><Link to={ROUTES.LANDING}>Landing</Link></li>
					<li><Link to={ROUTES.SIGN_IN}>Sign In</Link></li>
				</ul>
			</div>
		</div>
	</nav> 
  </div>
);

export default Navigation;
