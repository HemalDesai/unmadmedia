import React from 'react';
import Navbar from './Navbar';

const Settings = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="profile-image">
          <img src="https://i.ibb.co/hXh1gGm/Ellipse-18.png" alt="Profile" />
        </div>
        <h2 className="heading">MANAGE PASSWORD</h2>
        <form>
          <div className="form-group">
            
            <input type="password" id="old-password" name="old-password" placeholder='Old Password' />
          </div>
          <div className="form-group">
            
            <input type="password" id="new-password" name="new-password" placeholder='New Password' />
          </div>
          <div className="form-group">

            <input type="password" id="confirm-password" name="confirm-password" placeholder='Confirm Password' />
          </div>
          <button className='save-button' type="submit">Save</button>
        </form>
        <span className='extra-text'>Manage your Subscription</span>
        <span className='extra-text'>Manage your Account</span>
        <span className='extra-text'>Contact support</span>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          position: absolute;
          flex-direction: column;
          align-items: center;
          z-index: 3;
          margin-top:50px;
        }

        .extra-text{
            font-weight: semi-bold;  
            padding:10px;
        }

        .profile-image {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          overflow: hidden;
          margin-bottom: 20px;
        }

        .save-button{
            background-color: red;
            color: white;
        }

        .profile-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .heading {
          margin-bottom: 20px;
        }

        form {
          display: flex;
          flex-direction: column;
        }

        .form-group {
          margin-bottom: 15px;
        }

        label {
          font-weight: bold;
        }

        input {
          padding: 5px;
          border-radius: 4px;
          border: 1px solid #ccc;
        }

        button {
          padding: 10px 20px;
          background-color: #f0f0f0;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Settings;
