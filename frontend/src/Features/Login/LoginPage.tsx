import React, { useState } from 'react'
import useFunctionalityAuthentication from '../../hooks/functionalityAuthentication';
import "../../styles.css";
import { loginSchema } from './login';
import LoginComponent from './LoginComponent';
import SignUp from './Signup';

function LoginPage() {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const { onLogin, onSignUp } = useFunctionalityAuthentication()
  const formLogin = (form: loginSchema) => {
    // setIsLoggedIn(true)
    onLogin(form)
    .then((r)=>{

    })
    .catch(e =>{

    })

  }
  const formSignUp = (form: loginSchema) => {
    // setIsLoggedIn(false)
    onSignUp(form)
    .then(r=>{
      setIsLoggedIn(true)
    })
    .catch(e=>{

    })
  }



  return (
    <div className="app">
      {
        !isLoggedIn ? <SignUp onSubmitForm={formSignUp} />
          : <LoginComponent onSubmitForm={formLogin} />
      }


    </div>
  );
}

export default LoginPage