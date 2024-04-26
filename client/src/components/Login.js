// client/src/components/Login.js
import React, { useState } from 'react';
import Webpage from './Webpage'; // Import the Webpage component
import { Link } from 'react-router-dom';
const spacing = 10;
const Login = ({ onLogin }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Your authentication logic can be added here
    // For simplicity, let's assume a successful login
    setIsLoggedIn(true);
    onLogin(); // Call the onLogin prop
  };

  if (isLoggedIn) {
    // Render Webpage component after successful login
    return <Webpage />;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', paddingBottom: '60px' }}>

  {/* Welcome Message */}
<div style={{ textAlign: 'center', marginBottom: '30px', fontSize: '0.5em', padding: '10px', fontFamily: 'Arial, sans-serif' }}>
    <br />
    <h1 style={{ fontWeight: 'bold' }}>Welcome to NutriHub</h1>
    <br />
    {/* This is a comment line */}
</div>
<div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
 <div style={{ width: '400px', padding: '40px', border: '1px solid #D3D3D3', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffffff', marginBottom: '30px' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '2em', color: '#333' }}>Login</h2>
    <form onSubmit={handleLogin}>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="username" style={{ display: 'block', marginBottom: '5px', fontSize: '1em', color: '#666' }}>Username:</label>
        <input type="text" id="username" name="username" style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #D3D3D3', borderRadius: '5px', fontSize: '1em' }} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', fontSize: '1em', color: '#666' }}>Password:</label>
        <input type="password" id="password" name="password" style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #D3D3D3', borderRadius: '5px', fontSize: '1em' }} />
      </div>
      <button type="submit" style={{ width: '100%', padding: '10px', background: '#2196f3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background 0.3s ease', ':hover': { background: '#1976d2' } }}>
        Login
      </button>
    </form>
    <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.8em', color: '#666' }}>
      <p>New user? <a href="/register" style={{ color: '#2196f3', textDecoration: 'none' }}>Register</a></p>
      </div>
 </div>
</div>

{/* Image Below Welcome Message */}


<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
   
<div style={{ textAlign: 'left', marginBottom: '30px', fontSize: '10px', padding: '10px', fontFamily: 'Arial, sans-serif' }}>
    <br />
    <h1 style={{ fontWeight: 'bold', fontSize: '16px' }}>Some Editorials about Health and Nutrition</h1>
    <br />
    {/* This is a comment line */}
</div>


      {/* Image Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '30px', width: '45%' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <img src="https://media.istockphoto.com/id/1204583112/photo/nutritionist-is-consulting-the-patient-about-healthy-diet-with-vegetables-and-fruits.jpg?s=612x612&w=0&k=20&c=9xqlMsfAvyJ_rbWXmICrJgFAIalLhPe-7uUehX3wdnk=" alt="Image 1" style={{ width: '200px', marginRight: '10px' }} />
          <Link to="/web1" style={{ textDecoration: 'none', color: 'blue' }}>Healthy Eating Refresh: Letter from the Editor</Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <img src="https://www.julienutrition.com/wp-content/uploads/2021/10/nutrition-consultant-JM-Nutrition.jpg" alt="Image 2" style={{ width: '200px', marginRight: '10px' }} />
          <Link to="/web2" style={{ textDecoration: 'none', color: 'blue' }}>Why Pleasure Matters When It Comes to What You Eat</Link>
        </div>
      </div>
      {/* Right half content goes here */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '30px', width: '45%' }}>
        {/* Add similar content for the right half here */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOYgIkrYQk6fi2ZvNZ_E8M8R_Lh8otHVk6Ng&s" alt="Image 1" style={{ width: '200px', marginRight: '10px' }} />
          <Link to="/web3" style={{ textDecoration: 'none', color: 'blue' }}>Eat It or Leave It?</Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <img src="https://domf5oio6qrcr.cloudfront.net/medialibrary/15040/40afc76c-d383-4a9a-99e0-d5da518ca6ef.jpg" alt="Image 2" style={{ width: '200px', marginRight: '10px' }} />
          <Link to="/web5" style={{ textDecoration: 'none', color: 'blue' }}>Eating high-quality carbohydrates may stave off middle-age weight gain</Link>
        </div>
      </div>
    </div>
    {/* Side-by-side Boxes with Space */}
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', marginBottom: '30px' }}>
        {/* Box 1 - What is Nutrition? */}
        <div style={{ border: '2px solid #D3D3D3', padding: '20px', backgroundColor: '#e6e6fa', width: '100%', outline: '1px solid #666666' }}>
          <h2>What is Nutrition?</h2>
          <p>
            According to Merriam-webster, nutrition is “the act or process of nourishing or being nourished. The sum of the processes by which an animal or plant takes in and utilizes food substances.”
          </p>
          <p>
            Proteins, carbohydrates, fat, vitamins, minerals, and electrolytes are essential nutrients. Typically, 85% of daily energy usage comes from fat and carbohydrates and 15% from protein.
          </p>
        </div>

        {/* Space */}
        <div style={{ width: '20%' }}></div>
        <br />
        <br />

        {/* Box 2 - Benefits of Nutrition */}
        <div style={{ border: '2px solid #D3D3D3', padding: '20px', backgroundColor: '#e6e6fa', width: '90%', outline: '1px solid #666666' }}>
          <h2>Benefits of Nutrition</h2>
          <p>
          * Healthy heart<br />
          * Reduced cancer risk<br />
          * Better mood<br />
          * Improved gut health<br />
          * Improved memory<br />
          * Weight loss<br />
          * Diabetes management<br />
          * Strong bones and teeth<br />
          * The health of the next generation<br />
          * Getting a good night's sleep<br />
          </p>
        </div>
      </div>


<div style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2.5em', border: '2px solid #D3D3D3', width: '98%', padding: '10px', fontFamily: 'Arial, sans-serif', background: '#e6e6fa' }}>
<h1>Why Choose NutriHub For Online Nutritionist Consultation?</h1>
<p>
NutriHub is providing the best nutritionist from various cities of India. <br></br>

We offer the continual delivery of superior customer support while simultaneously providing industry-leading customer satisfaction. <br></br>
<br />
Your data(such as medical reports, prescriptions etc.) are well kept and safe,<br></br> and we will also send your reports on your mail, which makes it very easy for our clients to download required information.
</p>
</div>      
{/* Login Box */}

</div>
  );
};

export default Login;