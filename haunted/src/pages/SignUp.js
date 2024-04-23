import React, { useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './SignUp.css'

const SignUp = ({ SignUp }) => {

    const formRef = useRef()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(formRef.current)
        const data = Object.fromEntries(formData)
        const userInfo = {
            user: {email: data.email, password: data.password}
        }

        SignUp(userInfo)
        navigate('/myitems')
        e.target.reset()
    }

    return (
        <div className='signup-container'>
            <h2>Sign Up</h2>
            <form className="sign-up-card" ref={formRef} onSubmit={handleSubmit}>
                <h5>Email</h5>
                <input type='email' name='email'placeholder='email'/>
                <h5>Password</h5>
                <input type='text' name='password' placeholder='create password'/>
                <h5>Confirm Password</h5>
                <input type='text' name='password_confirmation' placeholder='confirm password'/>
                <input type='submit' value='Submit' className='submit-button'/>
                <span>Already Have an Account?
                <Link to='/login'className='login'>Log In!</Link></span>
            </form>
        </div>
    )
}

export default SignUp