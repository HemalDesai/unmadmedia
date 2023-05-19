import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faSearch,faBell, faUser, faCog, faBriefcase, faChartBar, faEnvelope, faCalendar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';


const stripePromise = loadStripe('pk_test_51N9UveSCOOyqFJgR7RagttAZlMeCk10wKTV5tNfKVTBopGA8C9YQUgKjUv0tOfHm9P4r0PzYZlRgv5r3kBFT0d3a00vC9E8msn');


function Navbar() {
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
  
  <>
    <nav className="navbar">
      <ul>
        <li><a href="/Dashboard">Dashboard</a></li>
        <li><a href="/Content">Generate</a></li>
        <li><a href="#">Blogs</a></li>
        <li><a href="/Terms">Terms &amp; Conditions</a></li>
        <li><a href="/Homee">Home</a></li>
        <li>
          <FontAwesomeIcon icon={faSearch} />
        </li>
        <li>
          <FontAwesomeIcon icon={faBell} />
        </li>
        <li className="user-profile">
          <div className="user-info">
            <span className="user-name">John Doe</span>
            <span className="user-role">user</span>
          </div>
          <img className="profile-photo" src="https://i.ibb.co/MVqFxbj/Image.png" alt="User Profile" />
        </li>
      </ul>
    </nav>

    <aside>
      <div className="sidebar-top">
        <div className="sidebar-top-item">
          <p className="sidebar-top-label">Content:&nbsp;</p>
          <p></p>
          <p className="sidebar-top-value"> 200 words</p>
        </div>
        <div className="sidebar-top-item">
          <p className="sidebar-top-label">Images:&nbsp;&nbsp;</p>
          <p className="sidebar-top-value red-text">200 Files</p>
        </div>
        <div className="sidebar-top-item">
          <p className="sidebar-top-label">Audio:&nbsp;&nbsp;&nbsp;</p>
          <p className="sidebar-top-value">200 Files</p>
        </div>
        <div className="sidebar-top-item">
          <p className="sidebar-top-label">Video:&nbsp;&nbsp;&nbsp;</p>
          <p className="sidebar-top-value red-text">200 Files</p>
        </div>
        <div className="sidebar-top-item">
          <button className="sidebar-button" onClick={handleClick} disabled={loading} >{loading ? 'Loading...' : 'Upgrade'}</button>
        </div>
      </div>

      <ul>
        <li><img src="https://i.ibb.co/VjFgnbR/material-symbols-space-dashboard-rounded.png" /><a href="/Dashboard">Dashboard</a></li>
        <li><img src="https://i.ibb.co/ydc2XRk/ion-documents.png" /><a href="#">Text</a></li>
        <li><img src="https://i.ibb.co/v1MZnQc/Vector.png" /><a href="#">Audio</a></li>
        <li><img src="https://i.ibb.co/r62530g/Vector.png" /><a href="#">Images</a></li>
        <li><img src="https://i.ibb.co/R9kjCrJ/Vector.png" /><a href="#">Support</a></li>
        <li><img src="https://i.ibb.co/bmktznK/Vector.png" /><a href="/Settings">Settings</a></li>
        <li><img src="https://i.ibb.co/nkLz7Xj/Path.png" /><a href="/Signin">Logout</a></li>
      </ul>
    </aside>

    <style jsx>{`
      .navbar {
        position: absoulte;
        z-index: 1;
        top: 0;
         left: 0;
        width: 100%;
        height:20px;
        font-weight: semi-bold;
        
        background-color: white;
        padding: 20px;
      }

      .navbar ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: flex-end;
      }

      .navbar li {
        margin-left: 20px;
      }

      .navbar a {
        color: #000;
        text-decoration: none;
        transition: color 0.3s;
      }

      .navbar a:hover {
        color: red;
      }

      aside {
        width: 200px;
        margin-top: 60px; /* Adjust the margin-top value to give space below the navbar */
        background-color: white;
        padding: 20px;
        height:1000px;
        position: absolute;
        border-right: 1px solid #ccc;
        z-index: 2;
      }

      .sidebar-top {
        margin-bottom: 20px;
        
      }

      .sidebar-top-item {
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
      }

      .sidebar-top-label {
        font-weight: bold;
      }

      .sidebar-top-value {
        
        color:red;
      }

      .red-text {
        color: red;
      }
      .sidebar-button{
        background-color: red;
        // add border radius
        border-radius: 5px;
        //add shadow
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        color:white;
        width:100px;
        height:30px;
        margin-left:20px;
      }

      aside ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }

      aside li {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
      }

      aside li a {
        color: #000;
        text-decoration: none;
        margin-left: 10px;
        transition: color 0.3s;
      }

      aside li a:hover {
        color: red;
      }

      .user-profile {
        display: flex;
        align-items: center;
      }

      .user-info {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 10px;
      }

      .user-name {
        margin-bottom: 2px;
      }

      .user-role {
        font-size: 12px;
      }

      .profile-photo {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
    `}</style>
  </>
);
    }

export default Navbar;
