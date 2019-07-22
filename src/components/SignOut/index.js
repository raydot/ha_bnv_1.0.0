import React from 'react';
import { Link } from 'gatsby';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <Link
    
    onClick={firebase ? firebase.doSignOut : () => {}}
  >
    Sign Out
  </Link>
);

export default withFirebase(SignOutButton);
