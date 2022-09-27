import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home({ successToken, setSuccessToken }) {

    // states for username and password
    var [username, setUsername] = useState("");
    var [password, setPassword] = useState("");

    // state for login error
    var [error, setError] = useState("");
    var loginN = useNavigate();
    var op = {
        method: 'POST',
        headers: {
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiMSIsInJvbGUiOiJhcHAiLCJpYXQiOjE1MzkwNTk5NzgsImlzcyI6Imh0dHBzOlwvXC9hcHBzLmNlZGNvbW1lcmNlLmNvbSIsImF1ZCI6ImV4YW1wbGUuY29tIiwibmJmIjoxNTM5MDU5OTc4LCJ0b2tlbl9pZCI6MTUzOTA1OTk3OH0.GRSNBwvFrYe4H7FBkDISVee27fNfd1LiocugSntzxAUq_PIioj4-fDnuKYh-WHsTdIFMHIbtyt-uNI1uStVPJQ4K2oYrR_OmVe5_zW4fetHyFmoOuoulR1htZlX8pDXHeybRMYlkk95nKZZAYQDB0Lpq8gxnTCOSITTDES0Jbs9MENwZWVLfyZk6vkMhMoIAtETDXdElIdWjP6W_Q1kdzhwqatnUyzOBTdjd_pt9ZkbHHYnv6gUWiQV1bifWpMO5BYsSGR-MW3VzLqsH4QetZ-DC_AuF4W2FvdjMRpHrsCgqlDL4I4ZgHJVp-iXGfpug3sJKx_2AJ_2aT1k5sQYOMA'
        }
    }

    // Authorizing user
    var getvalue = (event) => {
        event.preventDefault();
        fetch(`https://fbapi.sellernext.com/user/login?username=${username}&password=${password}`, op)
            .then((res) => res.json())
            .then((temp) => {
                if (temp.success) {
                    sessionStorage.setItem(`token ${new Date().getTime().toString()}`, temp.data.token);
                    setSuccessToken({ ...sessionStorage });
                    setError("")
                    loginN('/login')
                }
                else { setError("Login Failed") }
            })
    }

    return (
        <div>
            <form onSubmit={getvalue}>
                <input value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder='username' />
                <br />
                <input value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder='password' />
                <br />
                <input type="submit"></input>
            </form>
            <h3>{error}</h3>

        </div>
    )
}

export default Home