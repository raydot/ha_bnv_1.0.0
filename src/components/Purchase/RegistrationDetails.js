import React from 'react'
import { NavLink } from 'react-router-dom'

// import OktaAuth from '@okta/okta-auth-js'
// import { withAuth } from '@okta/okta-react'

// import config from '../app.config'

// FORMIK & YUP, THOSE WACKY KIDS!
import { Formik } from 'formik'
import validate from './forms/validate-spected'
import getValidationSchema from './forms/getValidationSchema-spected'


const initialValues = {
	email: '',
	firstName: '',
	lastName: '',
	password: '',
	passwordConfirmation: '',
	consent: false
}



export default function SignUpFormContainer() {
	return (
		<Formik
			initialValues={ initialValues }
			validate={ validate(getValidationSchema) }
			onSubmit={ onSubmit }
			render={ SignUpForm } 
		/>
	)
}



///IS THE ID FIELD REALLY NEEDED?
function SignUpForm(props) {

	const { isSubmitting, errors, handleChange, onSubmit } = props

	return (
		<div className="form-setup grey-signup-box">
				<h2>Create Account</h2>
				<div className='form'>
					<div className="form-group">
					<form>
						<label>E-mail Address</label> <span className="form-field-error"> { errors.email }</span>
						<input
					      className="form-input"
					      type="email"
					      name="email"
					      onChange={handleChange}
					    />
					  
						<label>First Name</label><span className="form-field-error">{ errors.firstName }</span>
					    <input
					      className="form-input"
					      type="text"
					      name="firstName"
					      onChange={handleChange}
					    />
					   
					   <label>Last Name</label> <span className="form-field-error"> { errors.lastName }</span>
					    <input
					      className="form-input"
					      type="text"
					      name="lastName"
					      onChange={handleChange}
					    />
					    


					    <label>Password</label> <span className="form-field-error">{ errors.password }</span>
					    <input
					      className="form-input"
					      type="password"
					      name="password"
					      onChange={handleChange}
					    />
					    

					    <label>Confirm Password</label> <span className="form-field-error">{ errors.passwordConfirmation }</span>
					    <input
					      className="form-input"
					      name="passwordConfirmation"
					      type="password"
					      onChange={handleChange}
					    />
					    
			  	<button className="flat-button button-full-width" type="submit" onClick={onSubmit}>{isSubmitting ? 'Loading...' : 'Become a Wine Explorer!'}</button>
				</form>
				</div>
			</div>
			
			<p className="small">By signing in you agree to Beyond Napa Valley <NavLink to="/tos">Terms and Conditions</NavLink></p>
			<p className="center">Already have an account? <NavLink to="/login">Sign in</NavLink></p>
		</div>
	)
}

function onSubmit(values, { setSubmitting, setErrors }) {
	console.log('ON SUBMIT')
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
		.catch(err => console.log)
	setTimeout(() => {
		console.log('User has been successfully saved!', values)
		setSubmitting(false)
	}, 2000)
} 
