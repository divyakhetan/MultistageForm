import React from 'react';
import './App.css';
import GoogleLogin from 'react-google-login'
function App() {

  const responseGoogle = async (response) => {
    // console.log(response);

    let defaultOptions = {
    url:'',
    method:'POST',
    mode: 'no-cors',
    headers:{
    'Access-Control-Allow-Origin':'*'
    },
    body:null,
    };

    const res = await fetch("http://89cbcf8c.ngrok.io/oauth/callback", defaultOptions);
    console.log(res);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Login with google
        </p>
         <GoogleLogin
          clientId="697187519434-9d75b54lssed021jia7mplf6aa66rbkh.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        
      </header>
    </div>
  );
}

export default App;
