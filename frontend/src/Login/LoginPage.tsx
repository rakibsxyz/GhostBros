import React from 'react'
import "../styles.css";


function LoginPage() {

    const onSubmitForm = () =>{

    }
    const renderFormLoginForm = (
        <div className="form">
          <form onSubmit={onSubmitForm}>
            <div className="input-container">
              <label>Username </label>
              <input type="email" name="uname" required />
              {/* {renderErrorMessage("uname")} */}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
              {/* {renderErrorMessage("pass")} */}
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      );

      const renderFormSignUpForm = (
        <div className="form">
          <form onSubmit={onSubmitForm}>
            <div className="input-container">
              <label>Email </label>
              <input type="email" name="uname" required />
              {/* {renderErrorMessage("uname")} */}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
              {/* {renderErrorMessage("pass")} */}
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      );


  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {/* {isSubmitted ? <div>User is successfully logged in</div> : renderForm} */}
        {renderFormLoginForm}
        {/* {renderFormSignUpForm} */}
      </div>
      <div className="login-form">
        <div className="title">Sign Up</div>
        {/* {isSubmitted ? <div>User is successfully logged in</div> : renderForm} */}
        {/* {renderFormLoginForm} */}
        {renderFormSignUpForm}
      </div>
    </div>
  );
}

export default LoginPage