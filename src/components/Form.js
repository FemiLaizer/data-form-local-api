import React from 'react'

function Form({ value, type, entry, inputBtn }) {
    // The form component
    return (
        <>
            <h2>{value}</h2>
            <form>
                <input type={type} placeholder='Enter username' />
                <input type="email" placeholder='Enter email' />
                <input type="password" placeholder='Enter password' />
                <input type="submit" value={entry} onClick={inputBtn} />
            </form>
        </>
    )
}

export default Form