import React, { useState } from 'react'
import "../styles.css";
import { loginSchema } from './login';
import LoginComponent from './LoginComponent';
import SignUp from './Signup';

function LoginPage() {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const onLogin = (data: loginSchema) => {
    setIsLoggedIn(true)

  }
  const onSignUp = (data: loginSchema) => {
    setIsLoggedIn(false)
  }



  return (
    <div className="app">
      {
        isLoggedIn ? <SignUp onSubmitForm={onSignUp} />
          : <LoginComponent onSubmitForm={onLogin} />
      }


    </div>
  );
}

export default LoginPage