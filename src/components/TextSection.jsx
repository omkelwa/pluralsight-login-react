import React from 'react'
import Logo from '../images/logo.png'

function TextSection() {
  return (
    <>
     <div class="login-section">
            <img src={Logo} alt="logo"/>
            <h4>Email or Username</h4>
            <input type="text"/>
            <h4>Password</h4>
            <input type="text"/>
            <button class="signin-btn">Sign in</button>
            <a class="forgot" href="#">Forgot password</a>
            <a class="sign" href="#">Sign in with company or school</a>
            <hr/>
            <button class="creat-btn">Creat an account</button>
            <p>Copyright @ 2004 - 2022 Pluralsight LLC. All right reserved.</p>
            <span class="terms"><a href="#">Terms of use</a> | <a href="#">Privacy Policy.</a></span>

        
        </div>
    
    </>
  )
}

export default TextSection