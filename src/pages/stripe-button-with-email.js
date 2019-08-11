import React from 'react'
import StripeCheckout from 'react-stripe-checkout';


export default class TakeMoney extends React.Component {
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }

  // ...

  render() {
    return (
      // ...
      <StripeCheckout
        token={
          (token) => {
            console.log(token);
          }
        }
        stripeKey="pk_test_JJbMfkIUGHOHwr8xwxByQv1A00rfXJMkHx"
        email="haydn@nautilusdesigns.com"
      />
    )
  }
}