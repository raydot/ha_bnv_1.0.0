import React, { Component } from 'react';
import { Link } from 'gatsby';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === '';

    return (
      <form className="form-group" onSubmit={this.onSubmit}>
	    <label>E-mail Address</label>
        <input
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          className="form-input"
        />
        <button className="button" disabled={isInvalid} type="submit">
          Reset My Password
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const PasswordForgetLink = () => (
  <p className="center">
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?????</Link>
  </p>
);

export default withFirebase(PasswordForgetForm);

export { PasswordForgetLink };
