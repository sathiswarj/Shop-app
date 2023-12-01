 

import React, { useState } from "react";
import shopLogo from './images/shop-logo.png'
 import './Auth.css'

const Account = () => {
    const [isSignUp, setIsSignUp] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    

    const handleSwitch = () => {
        setIsSignUp(!isSignUp)
    }


    return (
        <section className="auth-section">
            <div className="auth-container-2">
                {!isSignUp && <img src={shopLogo} alt="stackover flow" className="login-logo"></img>}
                <form>

                    {isSignUp && (
                        <label htmlFor="name"  >
                            <h4>Display name</h4>
                            <input type="text" name="name" id="name" onChange={(e) => { setName(e.target.value) }} />
                        </label>
                    )}
                    <label htmlFor="email" >
                        <h4>Email</h4>
                        <input type="email" name="email" id="email" onChange={(e) => { setEmail(e.target.value) }} />
                    </label>
                    <label htmlFor="password">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h4 className="login-password">Password</h4>
                            <h4>{!isSignUp && <p className="forgot-password" style={{ color: '#007ac6', fontSize: '13px' }}>forgot password ?</p>}</h4>
                        </div>
                        <input type="password" name="password" id="password" onChange={(e) => { setPassword(e.target.value) }} />
                        {isSignUp && <p style={{ color: '#666767', fontSize: '13px' }}>Password must contains at least eight<br />characters,including 1 letter and 1 <br />number</p>}
                    </label>
                    <button type="submit" className="auth-btn">{isSignUp ? 'signup' : 'login'}</button>
                </form>
                <p>{isSignUp ? 'already have a account ?' : "Don't you have an account ?"}
                    <button type="submit" className="handle-switch-btn" onClick={handleSwitch}>{isSignUp ? 'Login' : 'Signup'}</button></p>
            </div>
        </section>
    )
}

export default Account