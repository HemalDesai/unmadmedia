import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';

const stripePromise = loadStripe('pk_test_51N9UveSCOOyqFJgR7RagttAZlMeCk10wKTV5tNfKVTBopGA8C9YQUgKjUv0tOfHm9P4r0PzYZlRgv5r3kBFT0d3a00vC9E8msn');

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

const LandingPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const handleClick2 = () => {
    router.push('/Signup');
  };
  
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
  const [randomTexts, setRandomTexts] = useState([]);

  useEffect(() => {
    setRandomTexts(generateRandomTexts());
  }, []);

  const generateRandomTexts = () => {
    return [
      'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Eu ac egestas et faucibus massa neque. Nibh sit sit in massa velit tempor risus leo tortor. ',
      'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Eu ac egestas et faucibus massa neque. Nibh sit sit in massa velit tempor risus leo tortor.',
      'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Eu ac egestas et faucibus massa neque. Nibh sit sit in massa velit tempor risus leo tortor.',
      'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Eu ac egestas et faucibus massa neque. Nibh sit sit in massa velit tempor risus leo tortor.',
      'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Eu ac egestas et faucibus massa neque. Nibh sit sit in massa velit tempor risus leo tortor.',
      'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Eu ac egestas et faucibus massa neque. Nibh sit sit in massa velit tempor risus leo tortor.',
      
    ];
  };

  return (
    <div>
      <div className='navbar'>
        <a href='/Homee' className='navbar-linkss1' >Home</a>
        <a href='/Content' className='navbar-linkss' >Generate</a>
        <a href='/' className='navbar-linkss' >Blogs</a>
        <a href='/Terms' className='navbar-linkss' >Terms &amp; Conditions</a>
        <a href='/Dashboard' className='navbar-linkss' >Dashboard</a>
        <button className='navbar-button' onClick={handleClick2}>Get Started</button>
        {/* <img src="https://i.ibb.co/TrGhR5d/bgggg.png" className='navbar-image'></img> */}

      </div>






      <div className="container">
        <div className="overlay"></div>
        <div className="content">
          <h1>Welcome to Umadmedia</h1>
          <button className="get-started-button" onClick={handleClick2}>Get Started</button>
        </div>
      </div>

      <div className="subcontainer">
        {randomTexts.map((text, index) => (
          <div key={index} className="subcontent">
            <p>{text}</p>
          </div>
        ))}

      </div>
      <div className='get-started-button-container'>
        <button className="get-started-button" onClick={handleClick2}>Get Started</button>
      </div>
      <div className='get-started-button-container'>
        <h1 className='heading-testi'>What people say about us</h1>
      </div>
      <div className='get-started-button-container'>
        <p className='heading-testi-p'>Lorem ipsum dolor sit amet consectetur. Sem aliquam ipsum feugiat urna tincidunt lectus lacinia sit.</p>
      </div>

      <div className="container-card">
      <div className="card"><b>Lorem ipsum dolor sit amet</b><br /><br />
      <p>Lorem ipsum dolor sit amet consectetur. Eu nibh massa morbi dignissim adipiscing. Hendrerit libero gravida sagittis nulla elementum.</p>
      <br /><br /><br /><br /><br /><br />
      <div className='card-bottom'>
      <img src="https://images.unsplash.com/photo-1684340459162-e3a3d6d9dbc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80" alt="Image 1" className="card-image" />
      <div>
      <b>John Doe</b><br />
      <span>@sabtain123</span>
      </div>
      </div>
      </div>
      <div className="card"><b>Lorem ipsum dolor sit amet</b><br /><br />
      <p>Lorem ipsum dolor sit amet consectetur. Eu nibh massa morbi dignissim adipiscing. Hendrerit libero gravida sagittis nulla elementum.</p>
      <br /><br /><br /><br /><br /><br />
      <div className='card-bottom'>
      <img src="https://images.unsplash.com/photo-1684340459162-e3a3d6d9dbc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80" alt="Image 1" className="card-image" />
      <div>
      <b>John Doe</b><br />
      <span>@sabtain123</span>
      </div>
      </div>
      </div>
      <div className="card"><b>Lorem ipsum dolor sit amet</b><br /><br />
      <p>Lorem ipsum dolor sit amet consectetur. Eu nibh massa morbi dignissim adipiscing. Hendrerit libero gravida sagittis nulla elementum.</p>
      <br /><br /><br /><br /><br /><br />
      <div className='card-bottom'>
      <img src="https://images.unsplash.com/photo-1684340459162-e3a3d6d9dbc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80" alt="Image 1" className="card-image" />
      <div>
      <b>John Doe</b><br />
      <span>@sabtain123</span>
      </div>
      </div>
      </div>
    </div>
    <div className='content-left'>
      <img src="https://i.ibb.co/zQjgSFM/Home-screen-pana-3.png" className='content-image-left'></img>
      <div className='contents-left'>
      <h1 className='content-left-heading'><b>Lorem ipsum dolor sit amet consectetur.</b></h1>
      <br />
      <span>Lorem ipsum dolor sit amet consectetur. Nulla turpis enim sagittis auctor pharetra viverra arcu leo faucibus. Velit risus id eu aenean quam. Consequat massa rhoncus parturient aliquam</span>
      </div>
    </div>

    <div className='content-left'>
      
      <div className='contents-left'>
      <h1 className='content-left-heading'><b>Lorem ipsum dolor sit amet consectetur.</b></h1>
      <br />
      <span>Lorem ipsum dolor sit amet consectetur. Nulla turpis enim sagittis auctor pharetra viverra arcu leo faucibus. Velit risus id eu aenean quam. Consequat massa rhoncus parturient aliquam</span>
      </div>
      <img src="https://i.imgur.com/wzq4msM.png" className='content-image-left'></img>
    </div>

    <div className='content-left'>
      <img src="https://i.imgur.com/vNoyyK1.png" className='content-image-left'></img>
      <div className='contents-left'>
      <h1 className='content-left-heading'><b>Lorem ipsum dolor sit amet consectetur.</b></h1>
      <br />
      <span>Lorem ipsum dolor sit amet consectetur. Nulla turpis enim sagittis auctor pharetra viverra arcu leo faucibus. Velit risus id eu aenean quam. Consequat massa rhoncus parturient aliquam</span>
      </div>
    </div>

    <div className='content-left'>
      
      <div className='contents-left'>
      <h1 className='content-left-heading'><b>Lorem ipsum dolor sit amet consectetur.</b></h1>
      <br />
      <span>Lorem ipsum dolor sit amet consectetur. Nulla turpis enim sagittis auctor pharetra viverra arcu leo faucibus. Velit risus id eu aenean quam. Consequat massa rhoncus parturient aliquam</span>
      </div>
      <img src="https://i.imgur.com/qMHWFCb.png" className='content-image-left'></img>
    </div>

    <div className='content-left'>
      <img src="https://i.imgur.com/nZzoiHv.png" className='content-image-left'></img>
      <div className='contents-left'>
      <h1 className='content-left-heading'><b>Lorem ipsum dolor sit amet consectetur.</b></h1>
      <br />
      <span>Lorem ipsum dolor sit amet consectetur. Nulla turpis enim sagittis auctor pharetra viverra arcu leo faucibus. Velit risus id eu aenean quam. Consequat massa rhoncus parturient aliquam</span>
      </div>
    </div>

    <div className='content-left'>
      
      <div className='contents-left'>
      <h1 className='content-left-heading'><b>Lorem ipsum dolor sit amet consectetur.</b></h1>
      <br />
      <span>Lorem ipsum dolor sit amet consectetur. Nulla turpis enim sagittis auctor pharetra viverra arcu leo faucibus. Velit risus id eu aenean quam. Consequat massa rhoncus parturient aliquam</span>
      </div>
      <img src="https://i.ibb.co/zQjgSFM/Home-screen-pana-3.png" className='content-image-left'></img>
    </div>

    <div className='text297'>
    <b>Lorem <span className='text213'>ipsum</span> dolor</b>
    </div>
    <div className='text287'>
   <p>Lorem ipsum dolor sit amet consectetur.</p>
    </div>


    <div className="container-card">
      <div className="card">
        <br /><br />
        <div className='card-heading'><b>AI-PRO</b></div>
        <div className='card-heading1'><b><b>$2.89</b></b></div>
        <div className='card-heading'>USD / Month</div>
        
        <button onClick={handleClick} disabled={loading} className='card-heading-button'>
          {loading ? 'Loading...' : 'Subscribe Now'}
        </button>
        <br /><br />
        <div className='card-heading-231'>
          <div className='random-345'>
            <img  src="https://i.imgur.com/wmyM76X.png" className='tick-image'></img>
            <span>Lorem ipsum dolor sit</span>
          </div>
          <div className='random-345'>
            <img  src="https://i.imgur.com/wmyM76X.png" className='tick-image'></img>
            <span>Lorem ipsum dolor sit</span>
          </div>
          <div className='random-345'>
            <img  src="https://i.imgur.com/wmyM76X.png" className='tick-image'></img>
            <span>Lorem ipsum dolor sit</span>
          </div>
          <div className='random-345'>
            <img  src="https://i.imgur.com/wmyM76X.png" className='tick-image'></img>
            <span>Lorem ipsum dolor sit</span>
          </div>
        </div>
        <br /><br />
      </div>
      <div className="card">
        <br /><br />
        <div className='card-heading'><b>AI-PRO</b></div>
        <div className='card-heading1'><b><b>$2.89</b></b></div>
        <div className='card-heading'>USD / Month</div>
        <button onClick={handleClick} disabled={loading} className='card-heading-button'>
          {loading ? 'Loading...' : 'Subscribe Now'}
        </button>
        <br /><br />
        <div className='card-heading-231'>
          <div className='random-345'>
            <img  src="https://i.imgur.com/wmyM76X.png" className='tick-image'></img>
            <span>Lorem ipsum dolor sit</span>
          </div>
          <div className='random-345'>
            <img  src="https://i.imgur.com/wmyM76X.png" className='tick-image'></img>
            <span>Lorem ipsum dolor sit</span>
          </div>
          <div className='random-345'>
            <img  src="https://i.imgur.com/wmyM76X.png" className='tick-image'></img>
            <span>Lorem ipsum dolor sit</span>
          </div>
          <div className='random-345'>
            <img  src="https://i.imgur.com/wmyM76X.png" className='tick-image'></img>
            <span>Lorem ipsum dolor sit</span>
          </div>
        </div>
        <br /><br />
      </div>
      <div className="card">
        <br /><br />
        <div className='card-heading'><b>AI-PRO</b></div>
        <div className='card-heading1'><b><b>$2.89</b></b></div>
        <div className='card-heading'>USD / Month</div>
        <button onClick={handleClick} disabled={loading} className='card-heading-button'>
          {loading ? 'Loading...' : 'Subscribe Now'}
        </button>
        <br /><br />
        <div className='card-heading-231'>
          <div className='random-345'>
            <img  src="https://i.imgur.com/wmyM76X.png" className='tick-image'></img>
            <span>Lorem ipsum dolor sit</span>
          </div>
          <div className='random-345'>
            <img  src="https://i.imgur.com/wmyM76X.png" className='tick-image'></img>
            <span>Lorem ipsum dolor sit</span>
          </div>
          <div className='random-345'>
            <img  src="https://i.imgur.com/wmyM76X.png" className='tick-image'></img>
            <span>Lorem ipsum dolor sit</span>
          </div>
          <div className='random-345'>
            <img  src="https://i.imgur.com/wmyM76X.png" className='tick-image'></img>
            <span>Lorem ipsum dolor sit</span>
          </div>
        </div>
        <br /><br />
      </div>
    </div>

    <div className='contact'>
          <div className='contact-heading'><b>Contact Us</b></div>
          <form >
            
            <div className='forms'>
            <input type="text" className='name-input' placeholder='Name'></input>
            <input type="text" className='name-input' placeholder='Email'></input>
            </div>
            <div>
            <textarea type="text" className='message-input' placeholder='Message'></textarea>
            </div>
            <button className='contact-submit'>Submit</button>
          </form>
    </div>

    
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
    
  

  


      


      <style jsx>{`

      .navbar-linkss{
        margin-left:20px;
        margin-top: 12px;
      }
      .navbar-linkss:hover {
        color:red;
      }
      .navbar-linkss1:hover {
        color:red;
      }
      .navbar-button{
        margin-left: 20px;
        background-color: red;
        color: white;
        padding-left: 12px;
        padding-right: 12px;
        padding-top: 5px;
        padding-bottom: 5px;
        border-radius: 5px;
        margin-top: 10px;
      }
      .navbar-linkss1{
        margin-left:600px;
        margin-top: 12px;
      }

      .navbar{
        background-color: #011320;
        color:white;
        display: flex;

      }

      .contact-submit{
        margin-left: 800px;
        margin-top: 40px;
        background-color: red;
        color: white;
        padding-left: 12px;
        padding-right: 12px;
        padding-top: 5px;
        padding-bottom: 5px;
        margin-bottom: 20px;

        border-radius: 5px;
      }

      .forms{
        display: flex;
      }
      .contact{
        margin-left:50px;
        margin-right:50px;
        border: 1px solid black;
        margin-bottom: 50px;
      }
      
      .name-input{
        margin-left: 190px;
        margin-top: 40px;
        border: 1px solid grey;
        border-radius: 5px;
        padding:2px;
        width:300px;
      }
      .message-input{
        margin-left: 190px;
        margin-top: 40px;
        border: 1px solid grey;
        border-radius: 5px;
        padding:2px;
        width:800px;
      }

      .contact-heading{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 36px;

      }
      .tick-image{
        width: 26px; /* Adjust the size of the circular image */
        height: 24px; /* Adjust the size of the circular image */

      }
      .card-heading-231{
        margin-left: 80px;
      }

      .random-345{
        display: flex;
        margin-top: 10px;

      }
        .card-heading{
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .card-heading-button{
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: red;
          color: white;
          margin-left:120px;
          padding:5px;
          margin-top:10px;
          border-radius: 15px;
        }
        .card-heading1{
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 36px;
        }
      
        .container {
          background-image: url('https://i.ibb.co/TrGhR5d/bgggg.png');
          background-size: cover;
          background-position: center;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .text213{
          color:red;
        }

        .text297{
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 40px;
          font-size: 36px;
        }
        .text287{
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 10px;
          font-size: 16px;
        }

        .heading-testi{
          color:black;
          margin-top: 30px;
        }
        .heading-testi-p{
          color:black;
        
        }

        .content-left-heading{
          color:black;
        }
        .content-image-left{
          width:50%;
          height:100%
          margin:left: 40px;
        }

        .content-left{
          display: flex;

        }
        .contents-left{
          padding: 60px;
        }

        .container-card {
          display: flex;
          justify-content: space-between;
          padding: 20px;
        }

        .card-bottom{
          display: flex;  
        }
      
        .card {
          flex: 1;
          padding: 20px;
          margin-right: 20px; /* Add spacing between the cards */
          border: 3px solid white;
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
          border-radius: 6px;
          transition: border-color 0.3s;
          word-wrap: break-word; /* Add word-wrap property to enable text wrapping */
        }

        .card-image {
          
          width: 40px; /* Adjust the size of the circular image */
          height: 40px; /* Adjust the size of the circular image */
          border-radius: 50%; /* Create a circular shape */
          object-fit: cover; /* Ensure the image fits within the circle */
          margin-left:10px;
          margin-right:10px;
        }
      
        .card:last-child {
          margin-right: 0; /* Remove margin from the last card */
        }
      
        .card:hover {
          border-color: red;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5); /* Adjust the alpha value (0.5) to control the overlay intensity */
        }

        .content {
          text-align: center;
          position: relative;
          z-index: 1; /* Set a higher z-index to place it above the overlay */
        }

        h1 {
          font-size: 36px;
          color: #fff;
          margin-bottom: 20px;
        }

        .get-started-button {
          padding: 10px 20px;
          font-size: 18px;
          background-color: red;
          border: none;
          border-radius: 4px;
          color: white;
          cursor: pointer;
        }

        .get-started-button-container{
          display: flex;
          justify-content: center;  
          align-items: center;
        }

        

        .subcontainer {
          display: flex;
          flex-wrap: wrap;
          width:100%;
          background-color: white;
          margin: 40px auto;
        }

        .subcontent {
          flex: 0 0 calc(33.33% - 20px); /* Adjust the width calculation based on your desired padding */
          padding: 20px;
          margin: 10px;
          border-radius: 4px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
