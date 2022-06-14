import React from 'react'
import "../styles.css";
import { loginSchema } from './login';
import LoginComponent from './LoginComponent';
import SignUp from './Signup';

function LoginPage() {

    const onSubmitForm = (data:loginSchema ) =>{

    }
   
   

  return (
    <div className="app">
      <LoginComponent onSubmitForm={onSubmitForm} />
      <SignUp onSubmitForm={onSubmitForm} />
    </div>
  );
}

export default LoginPage