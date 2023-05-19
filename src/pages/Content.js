import React from 'react';
import Navbar from './Navbar';

const Content = () => {
    const [firstName, setFirstName] = React.useState("New Documents");
    const [Secondname, setSecondname] = React.useState("Select Workbook Name");
  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="section">
          <div className="section-content">
            <h2>Welcome to Unmadmedia</h2>
            <div className='flex'>
            <span>What do you want to create?   </span>
            <span >0/600</span>
            </div>
            <div className="input-container">
              <textarea type="text" placeholder="Enter something" className='input-text' />
              <button className='submit-button'>Create</button>
            </div>
          </div>
        </div>

        <div className="section2">
          <div className="section-content">
            <div className="input-container1">
              <input type="text" placeholder="Input 1" value={firstName} className='input-text' />
              <input type="text" placeholder="Input 2" value={Secondname}className='input-text' />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          width:100%;
          flex-direction: row;
          align-items: flex-start;
          margin-top: 80px; /* Adjust the margin-top value to give space below the navbar */
          margin-left: 220px; /* Add a margin to the left side to avoid overlapping with the sidebar */
        }

        .section {
          margin-right: 20px;
          width:20%;
          height:400px;
            border: 1px solid #ccc;
        }
        .section2 {
            margin-right: 20px;
            width:60%;
            height:400px;
              border: 1px solid #ccc;
          }

        .section-content {
          display: flex;
          flex-direction: column;
        }

        h2 {
          margin-bottom: 10px;
          font-size: 20px;
            fomt-weight: bold;
        }

        .submit-button{
            background-color: red;
            color: white;
            width: 120px;
            height: 43px;
            border-radius: 4px;
            align-self: flex-end;
            margin-right:10px;
        }

        .input-container1 {
          display: flex;
          flex-direction: row;
          margin-top: 10px;
          padding:2px;
          
            
        }
        .input-container {
            display: flex;
            flex-direction: column;
            margin-top: 10px;
            word-wrap: break-word;
        word-break: break-all;
        height: 80px;
              
          }

        .input-text{
            border: 1px solid #ccc;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            margin:5px;
            padding:2px;
        }

        input {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default Content;
