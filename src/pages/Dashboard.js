import React from 'react';
import Navbar from './Navbar';

const Dashboard = () => {
  return (
    <div>
      <Navbar />

      <div className="dashboard-content">
        <div className="sidebar"></div>

        <div className="main-container">
          <div className="sub-container1">
            <div className="sub-content1">
              <img src="https://i.ibb.co/hXh1gGm/Ellipse-18.png" alt="Image 1"  />
            </div>
            <br /><br />
            <div className='anom-text'>
            <span>Sabtian Haider<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User</span>
           
            </div>
          </div>

          <div className="sub-container large-container">
            
            <div className="sub-content">
              <div className="small-container">
                <div className="item">
                  <span><b>Content Created</b></span>
                  <span>(Current Month)</span>
                  <br />
                  <span>0 Images</span>
                </div>
                <img src="https://i.ibb.co/pWNqTPP/ion-documents.png" alt="Image 2" className="sub-image" />
              </div>

              <div className="small-container">
                <div className="item">
                  <span><b>Images Generated</b></span>
                  <span>(Current Month)</span>
                  <br />
                  <span>0 Images</span>
                </div>
                <img src="https://i.ibb.co/MRr4FZ7/ion-images.png" alt="Image 2" className="sub-image" />
              </div>

              <div className="small-container">
                <div className="item">
                  <span><b>Video Created</b></span>
                  <span>(Current Month)</span>
                  <br />
                  <span>0 Images</span>
                </div>
                <img src="https://i.ibb.co/b3WYC9K/Vector.png" alt="Image 2" className="sub-image2" />
              </div>

              <div className="small-container">
                <div className="item">
                  <span><b>Audio Created</b></span>
                  <span>(Current Month)</span>
                  <br />
                  <span>0 Images</span>
                </div>
                <img src="https://i.ibb.co/Hp21FHJ/Vector.png" alt="Image 2" className="sub-image3" />
              </div>
            </div>
          </div>

          <div className="sub-container3">
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div className="sub-content">
              
              <button className="button">Upgrade </button>
            </div>
          </div>
        </div>

        
      </div>
      <div className="mainContainer">
      <div className="subContainer"><b>Your Content Files</b>
      <br /><br />
      <span>Lorem ipsum dolor sit.</span><button className='sub-button1'>Delete</button><button className='sub-button'>Download</button><br /><br />
      <span>Lorem ipsum dolor sit.</span><button className='sub-button1'>Delete</button><button className='sub-button'>Download</button><br /><br />
      <span>Lorem ipsum dolor sit.</span><button className='sub-button1'>Delete</button><button className='sub-button'>Download</button><br /><br />
      <span>Lorem ipsum dolor sit.</span><button className='sub-button1'>Delete</button><button className='sub-button'>Download</button>
      
      </div>
      <div className="subContainer"><b>Your Audio Files</b>
      <br /><br />
      <span>Lorem ipsum dolor sit.</span><button className='sub-button1'>Delete</button><button className='sub-button'>Download</button><br /><br />
      <span>Lorem ipsum dolor sit.</span><button className='sub-button1'>Delete</button><button className='sub-button'>Download</button><br /><br />
      <span>Lorem ipsum dolor sit.</span><button className='sub-button1'>Delete</button><button className='sub-button'>Download</button><br /><br />
      <span>Lorem ipsum dolor sit.</span><button className='sub-button1'>Delete</button><button className='sub-button'>Download</button>
      </div>
      <div className="subContainer"><b>Your Video Files</b>
      <br /><br />
      <span>Lorem ipsum dolor sit.</span><button className='sub-button1'>Delete</button><button className='sub-button'>Download</button><br /><br />
      <span>Lorem ipsum dolor sit.</span><button className='sub-button1'>Delete</button><button className='sub-button'>Download</button><br /><br />
      <span>Lorem ipsum dolor sit.</span><button className='sub-button1'>Delete</button><button className='sub-button'>Download</button><br /><br />
      <span>Lorem ipsum dolor sit.</span><button className='sub-button1'>Delete</button><button className='sub-button'>Download</button>
      </div>
      <div className="subContainer"><b>Your Image Files</b>
      <br /><br />
      <span>Lorem ipsum dolor sit.</span><button className='sub-button1'>Delete</button><button className='sub-button'>Download</button><br /><br />
      <span>Lorem ipsum dolor sit.</span><button className='sub-button1'>Delete</button><button className='sub-button'>Download</button><br /><br />
      <span>Lorem ipsum dolor sit.</span><button className='sub-button1'>Delete</button><button className='sub-button'>Download</button><br /><br />
      <span>Lorem ipsum dolor sit.</span><button className='sub-button1'>Delete</button><button className='sub-button'>Download</button>
      </div>
      </div>


      

      <style jsx>{`
        .dashboard-content {
          display: flex;
          margin-top: 80px; /* Adjust the margin-top value to give space below the navbar */
        }

        .sidebar {
          width: 220px; /* Adjust the width of the sidebar */
          background-color: #f0f0f0;
        }

        .sub-button{
          float:right;
          background-color: red;
          color:white;
          border-radius: 5px;
          padding:1px;
          margin-right:5px;
        }

        .sub-button1{
          float:right;
          border: 1px solid #ccc;
          border-radius: 5px;
          padding:2px;
        }

        .main-container {
          flex: 1;
          display: flex;
          flex-wrap: wrap;
          width: 1058px;
          margin-right:5px;
          border: 1px solid #ccc;
          margin-left: 20px; /* Adjust the margin-left value to create space between sidebar and main container */
        }

        .sub-container {
          flex: 1 0 calc(50% - 10px);
          padding: 10px;
          
          margin-right: 10px;
          margin-bottom: 10px;
        }
        .sub-container1 {
          flex: 1 0 calc(10% - 10px);
          padding: 10px;
          
          margin-right: 10px;
          margin-bottom: 10px;
        }
        .sub-container3 {
          flex: 1 0 calc(10% - 10px);
          padding: 10px;
         
          margin-right: 10px;
          margin-bottom: 10px;
        }

        .large-container {
          flex: 0 0 calc(50% - 10px);
        }

        .anom-text{
          display: flex;
  justify-content: center;
  align-items: center;
        }

        .sub-content {
          display: flex;
          flex-wrap: wrap;
        }
        .sub-content1 {
          display: flex;
  justify-content: center;
  align-items: center;
        }

        .small-container {
          dislay:flex;
          flex: 0 0 calc(50% - 10px);
          border: 1px solid #ccc;
          padding: 10px;
          margin-right: 10px;
          margin-bottom: 10px;
        }

        .item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-top: 10px;
        }

        .sub-image {
          width: 80px;
          height: 80px;
          object-fit: cover;
          margin-left: auto;
        }
        .sub-image2 {
          width: 80px;
          height: 60px;
          object-fit: cover;
          margin-left: auto;
        }
        .sub-image3 {
          width: 60px;
          height: 70px;
          object-fit: cover;
          margin-left: auto;
        }

        .button {
          padding: 10px 20px;
          background-color: red;
          border-radius:5px;
          color: #fff;
          border: none;
          cursor: pointer;
          margin-left:150px;
        }

        .mainContainer {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 10px;
          margin-left:219px;
          padding:20px;
          width: 1375px; /* Adjust the width as per your requirements */
          height: 400px; /* Adjust the height as per your requirements */
          
        }

        .subContainer {
          border: 1px solid #ccc;
          padding: 10px;
        }
      `}</style>


      
    
    </div>
  );
};

export default Dashboard;
