import React, { Component } from 'react'

class PurchaseDetailsRight extends Component {
		constructor(props) {
			super(props)
			this.state = {
				firstName: '',
				lastName: '',
				email: '',
				password: '',
				password2: '',
				sessionToken: null
			}

			// okta
			// this.oktaAuth = new OktaAuth( {url: config.url })
			// this.checkAuthentication = this.checkAuthentication.bind(this)
			// this.checkAuthentication()

		  this.handleSubmit = this.handleSubmit.bind(this);
		  this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
		  this.handleLastNameChange = this.handleLastNameChange.bind(this);
		  this.handleEmailChange = this.handleEmailChange.bind(this);
		  this.handlePasswordChange = this.handlePasswordChange.bind(this);
		}

		// async checkAuthentication() {
		//   const sessionToken = await this.props.auth.getIdToken();
		//   if (sessionToken) {
		//     this.setState({ sessionToken });
		//   }
		// }

		componentDidUpdate() {
		  this.checkAuthentication();
		}

		handleFirstNameChange(e) {
		  this.setState({ firstName: e.target.value });
		}
		handleLastNameChange(e) {
		  this.setState({ lastName: e.target.value });
		}
		handleEmailChange(e) {
		  this.setState({ email: e.target.value });
		}
		handlePasswordChange(e) {
		  this.setState({ password: e.target.value });
		}
		handlePassword2Change(e) {
		  this.setState({ password2: e.target.value });
		}

		handleSubmit(e) {
		  e.preventDefault()
		  fetch('/api/users', {
		    method: 'POST',
		    headers: {
		      Accept: 'application/json',
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify(this.state)
		  })
		    .then(user => {
		      this.oktaAuth
		        .signIn({
		          username: this.state.email,
		          password: this.state.password
		        })
		        .then(res =>
		          this.setState({
		            sessionToken: res.sessionToken
		          })
		        )
		    })
		    .catch(err => console.log);
		}


	render() {
		// if (this.state.sessionToken) {
		// 	this.props.auth.redirect({ sessionToken: this.state.sessionToken})
		// 	return null
		// }
    	return (
    	<div>
    		<h3>Your Purchase</h3>
      	<table>
					<thead>
						<tr>
							<th><strong>Product</strong></th>
							<th><strong>Total</strong></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1 Year Membership</td>
							<td>$250</td>
						</tr>
					</tbody>
					<tfoot>
						<tr rowSpan="2">
							<td><em>Automatically renews on (date) </em><br />
								or put date select box.
							</td>
						</tr>
					</tfoot>
				</table>
				<h3>Have a coupon?</h3>
					    <input
					      className="form-input"
						  type="text"
					    />
					    <button className="flat-button-small" type='submit'>Redeem Gift Code</button>
				<h3>Pay Us!</h3>
				<button className="flat-button button-full-width" type='submit'>Purchase</button>
			</div>				
    	)
  	}
}

 
export default PurchaseDetailsRight