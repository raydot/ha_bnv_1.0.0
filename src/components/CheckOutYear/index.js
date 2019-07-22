import React from 'react';
import { Link } from 'gatsby';


const CheckOutYear = () => (
	var stripe = Stripe('pk_live_JiuW8AAXc0SFjR3eWDnqV45d00xmHijzzA');

	var checkoutButton = document.getElementById('checkout-button-plan_EuCdHA7rQWL0sl');
	checkoutButton.addEventListener('click', function () {
	  // When the customer clicks on the button, redirect
	  // them to Checkout.
	  stripe.redirectToCheckout({
		items: [{plan: 'plan_EuCdHA7rQWL0sl', quantity: 1}],
  
		// Do not rely on the redirect to the successUrl for fulfilling
		// purchases, customers may not always reach the success_url after
		// a successful payment.
		// Instead use one of the strategies described in
		// https://stripe.com/docs/payments/checkout/fulfillment
		successUrl: window.location.protocol + '//beyondnapavalley.com/dashboard',
		cancelUrl: window.location.protocol + '//beyondnapavalley.com/canceled',
	  })
	  .then(function (result) {
		if (result.error) {
		  // If `redirectToCheckout` fails due to a browser or network
		  // error, display the localized error message to your customer.
		  var displayError = document.getElementById('error-message');
		  displayError.textContent = result.error.message;
		}
	  });
	});
);


export default CheckOutYear;
