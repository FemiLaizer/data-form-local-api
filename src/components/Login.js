import React from 'react'

function Login({ username, email, button }) {
    return (
        <>
            <h2>Login</h2>
            <form>
                <input type="text" placeholder='Enter username' />
                <input type="email" placeholder='Enter email' />
                <input type="submit" onClick={button} value="Register" />
            </form>
        </>
    )
}

export default Login