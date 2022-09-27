import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login({ successToken, setSuccessToken }) {
    var back = useNavigate()
    // clear all tokens from session
    var clearSession = () => {
        sessionStorage.clear();
        setSuccessToken({});
    }
    // BACK TO HOME
    var home = () => {
        back('/')
    }
    return (
        <div>
            <h2>DASHBOARD</h2>
            <button onClick={clearSession}>Clear Session</button>
            <button onClick={home}>Login Again</button>
            <table className='table'>
                <tr>
                    <th>KEY</th>
                    <th>VALUE</th>
                </tr>
                {Object.keys(successToken).map((key) => {
                    return <tr> <td>{key}</td> <td>{successToken[key]}</td></tr>
                })}
            </table>
        </div>
    )
}

export default Login