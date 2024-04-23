import React, { useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './SignIn.css'

const SignIn = ({ login }) => {

    const formRef = useRef()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(formRef.current)
        const data = Object.fromEntries(formData)
        const userInfo = {
            user: {email: data.email, password: data.password}
        }

        login(userInfo)
        navigate('/myitems')
        e.target.reset()
    }

    return (
        <div className='signin-container'>
            <h2>Log In</h2>
            <form className='login-form' ref={formRef} onSubmit={handleSubmit}>
                <input type='email' name='email' placeholder='Enter Email...' />
                <input type='text' name='password' placeholder='Enter Password' />
                <input className='submit-button' type='submit' value='Submit' />
                <h5>New to Haunted?<Link className='signup-link' to='/sugnup'>Sign Up Here!</Link></h5>
            </form>
        </div>
    )
}

export default SignIn