

import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';

const stripePromise = loadStripe('pk_test_51N9UveSCOOyqFJgR7RagttAZlMeCk10wKTV5tNfKVTBopGA8C9YQUgKjUv0tOfHm9P4r0PzYZlRgv5r3kBFT0d3a00vC9E8msn');

function Subscribe() {
    const [loading, setLoading] = useState(false);
  
    const handleClick = async () => {
      setLoading(true);
      const stripe = await stripePromise;
      console.log('Stripe:', stripe);
      const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: 'price_1N9UyNSCOOyqFJgRTG9dCmUL', quantity: 1 }],
        mode: 'subscription',
        successUrl: 'http://your-website.com/success',
        cancelUrl: 'http://your-website.com/cancel',
      });
      if (error) {
        console.error(error);
        setLoading(false);
      }
    };
  
    return (
      <div>
        <h1>Subscribe to our service</h1>
        <button onClick={handleClick} disabled={loading}>
          {loading ? 'Loading...' : 'Subscribe'}
        </button>
      </div>
    );
  }
  
  export default Subscribe;
  