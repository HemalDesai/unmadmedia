import React from 'react';

const headerStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '20px',
};

const contentStyle = {
  display: 'flex',
  alignItems: 'center',
};

const titleStyle = {
  marginRight: '10px',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#0070f3',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const imageStyle = {
  width: '700px',
  height: '800px',
  marginRight: '20px',
  marginLeft: '40px',
};

const formStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: '30px',
  rowGap: '30px',
  alignItems: 'center',
  marginTop: '30px',
};

const inputStyle = {
  marginBottom: '10px',
  padding: '5px',
  border: '1px solid #ccc',
  borderRadius: '5px', // Added border radius
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Added box shadow
};

const headingStyle = {
  textAlign: 'center',
  marginBottom: '100px',
  fontSize: '24px', // Increased font size
  fontWeight: 'bold', // Added font weight
  

};

const textStyle = {
//   textAlign: 'center',   
  marginTop: '10px',
};

const footerStyle = {
    backgroundColor: '#D2001A',
    padding: '20px',
   
  };
  
  const footerContainerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    columnGap: '3px',
    marginLeft: '20px',
  };
  
  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
  };
  
  const linkStyle = {
    textDecoration: 'none',
    color: '#FFFFFF',
    marginBottom: '10px',
  };

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>Ready to generate it ?</h1>
        <button style={buttonStyle}>Get Started</button>
      </div>
    </header>
  );
};


const Footer = () => {
    return (
      <footer style={footerStyle}>
        <div style={footerContainerStyle}>
          <div style={columnStyle}>
            <a href="#" style={linkStyle}>Column 1 Link 1</a>
            <a href="#" style={linkStyle}>Column 1 Link 2</a>
            <a href="#" style={linkStyle}>Column 1 Link 3</a>
          </div>
          <div style={columnStyle}>
            <a href="#" style={linkStyle}>Column 2 Link 1</a>
            <a href="#" style={linkStyle}>Column 2 Link 2</a>
            <a href="#" style={linkStyle}>Column 2 Link 3</a>
          </div>
          <div style={columnStyle}>
            <a href="#" style={linkStyle}>Column 3 Link 1</a>
            <a href="#" style={linkStyle}>Column 3 Link 2</a>
            <a href="#" style={linkStyle}>Column 3 Link 3</a>
          </div>
          <div style={columnStyle}>
            <a href="#" style={linkStyle}>Column 4 Link 1</a>
            <a href="#" style={linkStyle}>Column 4 Link 2</a>
            <a href="#" style={linkStyle}>Column 4 Link 3</a>
          </div>
          
        </div>
        <p style={linkStyle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure incidunt cupiditate earum nisi illum dolorem quas, iusto veritatis mollitia, suscipit explicabo fuga totam enim dolores sed. Eius reprehenderit error aliquid esse aliquam?</p>
        <hr></hr>
        <p style={linkStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laborum debitis error veritatis est soluta eos repudiandae. Dolorem, fugit quis?</p>

      </footer>
    );
  };



const Signup = () => {
  return (
    <div>
      <Header />
      <div style={contentStyle}>
        <img
          src="https://i.ibb.co/8sgfTzg/Sign-up-rafiki-1.png"
          alt="Your Image"
          style={imageStyle}
        />
        <div>
          <h1 style={headingStyle}>Welcome to Unmadmedia </h1>
          <form style={formStyle}>
            <input type="text" placeholder="Username" style={inputStyle} />
            <input type="email" placeholder="Email" style={inputStyle} />
            <input type="password" placeholder="Password" style={inputStyle} />
            <input
              type="password"
              placeholder="Confirm Password"
              style={inputStyle}
            />
            <button style={buttonStyle}>Submit</button>
          </form>
          <a href="/Signin" style={textStyle}>Already have an account? Sign in</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
