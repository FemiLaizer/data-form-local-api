import React from 'react'

function Register({ value, type, register }) {
    return (
        <>
            <h2>{value}</h2>
            <form>
                <input type={type} placeholder='Enter username' />
                <input type="email" placeholder='Enter email' />
                <input type="submit" value={register} />
            </form>
        </>
    )
}

export default Register