import React from 'react';
import Navbar from './Navbar';

const Terms = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <h2>Terms and Conditions</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus mi eu interdum sagittis. Proin tristique pellentesque purus, sit amet iaculis arcu hendrerit id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque consectetur tellus vitae mauris iaculis, nec tempor ligula semper. Duis iaculis neque vitae nunc tincidunt varius. Integer non lacus aliquet, cursus nisl id, euismod justo. Praesent eget mauris tristique, ultrices justo id, tristique felis. Ut luctus metus justo, in dignissim tortor iaculis vitae. In venenatis consectetur leo, in aliquet metus mollis vel. Mauris vitae efficitur libero. Sed aliquet rutrum lectus, sit amet ultrices nulla ultrices a. Quisque eget nulla id turpis ultrices bibendum ut nec sem. Aliquam gravida, sapien ac ullamcorper porta, sem metus elementum nisi, et commodo erat odio eget mi.</p>
        <p>Etiam feugiat, sem at semper cursus, nisi mi consectetur quam, at tempus turpis justo vel nulla. Aliquam erat volutpat. Etiam sed dui vitae leo feugiat sagittis ac sit amet arcu. Donec volutpat nibh id nisi posuere, ac vestibulum nisi ullamcorper. Proin ultrices finibus ipsum, et fringilla sapien porttitor sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus in nunc urna. Sed rhoncus interdum velit, a lacinia tortor ullamcorper a. Morbi consectetur ex quis lectus bibendum auctor. Donec cursus risus ac dui ultrices, in efficitur nisl efficitur. Vivamus nec nisl ac quam euismod feugiat. In ut lacus id tellus suscipit varius. Curabitur mattis velit non nibh consectetur, id bibendum elit posuere.</p>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 80px; /* Adjust the margin-top value to give space below the navbar */
          margin-left: 220px; /* Add a margin to the left side to avoid overlapping with the sidebar */
          max-width: 1000px; /* Set a maximum width for the container */
        }

        h2 {
          margin-bottom: 20px;
          font-size: 24px;
          fomt-weight: bold;
        }


        p {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default Terms;
