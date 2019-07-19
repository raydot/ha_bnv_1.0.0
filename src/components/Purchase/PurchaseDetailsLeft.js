import React, { Component } from 'react'

class PurchaseDetailsLeft extends Component {
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
			<div className="form-setup">
				<h3>Personal Info</h3>
				<form>
					<div className="form-group">
						<label>E-mail Address</label>
						<input
					      className="form-input"
					      type="email"
					    />
						<label>First Name</label>
					    <input
					      className="form-input"
					      type="text"
					    />
					    <label>Last Name:</label>
					    <input
					      className="form-input"
					      type="text"
					    />
			    </div>
			    
			    <div className="form-group">
				    <h3>Billing Address</h3>
				    <label>Address:</label>
				    <input
				      className="form-input"
				      type="text"
				      id="lastName"
				      
				    />
				    <input
				      className="form-input"
				      type="text"
				      placeholder="Optional"
				    />
			    <label>City:</label>
			    <input
			      className="form-input"
				  type="text"
			    />
			    <label>State:</label>
			    <select name="state" id="state">
				  <option value="" selected="selected">Select a State</option>
				  <option value="AL">Alabama</option>
				  <option value="AK">Alaska</option>
				  <option value="AZ">Arizona</option>
				  <option value="AR">Arkansas</option>
				  <option value="CA">California</option>
				  <option value="CO">Colorado</option>
				  <option value="CT">Connecticut</option>
				  <option value="DE">Delaware</option>
				  <option value="DC">District Of Columbia</option>
				  <option value="FL">Florida</option>
				  <option value="GA">Georgia</option>
				  <option value="HI">Hawaii</option>
				  <option value="ID">Idaho</option>
				  <option value="IL">Illinois</option>
				  <option value="IN">Indiana</option>
				  <option value="IA">Iowa</option>
				  <option value="KS">Kansas</option>
				  <option value="KY">Kentucky</option>
				  <option value="LA">Louisiana</option>
				  <option value="ME">Maine</option>
				  <option value="MD">Maryland</option>
				  <option value="MA">Massachusetts</option>
				  <option value="MI">Michigan</option>
				  <option value="MN">Minnesota</option>
				  <option value="MS">Mississippi</option>
				  <option value="MO">Missouri</option>
				  <option value="MT">Montana</option>
				  <option value="NE">Nebraska</option>
				  <option value="NV">Nevada</option>
				  <option value="NH">New Hampshire</option>
				  <option value="NJ">New Jersey</option>
				  <option value="NM">New Mexico</option>
				  <option value="NY">New York</option>
				  <option value="NC">North Carolina</option>
				  <option value="ND">North Dakota</option>
				  <option value="OH">Ohio</option>
				  <option value="OK">Oklahoma</option>
				  <option value="OR">Oregon</option>
				  <option value="PA">Pennsylvania</option>
				  <option value="RI">Rhode Island</option>
				  <option value="SC">South Carolina</option>
				  <option value="SD">South Dakota</option>
				  <option value="TN">Tennessee</option>
				  <option value="TX">Texas</option>
				  <option value="UT">Utah</option>
				  <option value="VT">Vermont</option>
				  <option value="VA">Virginia</option>
				  <option value="WA">Washington</option>
				  <option value="WV">West Virginia</option>
				  <option value="WI">Wisconsin</option>
				  <option value="WY">Wyoming</option>
				</select>
				<label>Zip Code</label>
			    <input
			      className="form-input"
				  type="text"
				  size="5"
			    />
			  </div>
			</form>
			</div>
		          		
	    	)
	  	}
	}


export default PurchaseDetailsLeft