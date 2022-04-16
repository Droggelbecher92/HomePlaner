import React, {FormEvent, useState} from "react";
import axios from "axios";
import {TextField, Button, Typography} from '@mui/material';

export default function LoginRegisterForm(){
    const [newUsername, setNewUsername] = useState('')
    const [newPasswordOne, setNewPasswordOne] = useState('')
    const [newPasswordTwo, setNewPasswordTwo] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')
    const [checker, setChecker] = useState('')
    const [error, setError] = useState('')


    const createUser = (event : FormEvent) => {
        event.preventDefault()
        setError('')
        if (!(newPasswordOne===newPasswordTwo) || newPasswordOne.length<5){
            setError("Passwörter nicht identisch oder zu kurz")
        } else {
            axios.post(`/api/user`,
                {'username':newUsername, 'password':newPasswordOne})
                .then(response => response.data)
                .catch(e => {
                    if (e.response.status===400){
                        setError("Name schon vergeben")
                    } else {
                        setError(e.message)
                    }
                })
            setNewUsername('')
            setNewPasswordOne('')
            setNewPasswordTwo('')
        }

    }

    const login = (event : FormEvent) => {
        event.preventDefault()
        setError('')
        axios.post(`/auth`, {'username':username, 'password':password})
            .then(response => response.data)
            .then(data => setToken(data.token))
            .catch(e => setError(e.message))
        setChecker(username)
        setUsername('')
        setPassword('')
    }


    const getInfos = () => {
        axios.get(`/api/user/me`,
            {headers: {
                    Authorization: `Bearer ${token}`,
                }}
        )
            .then(response => response.data)
            .then(data => setChecker(data.username))
            .catch(e => setError(e.message))
    }


    return (
        <div className="App">
            <Typography variant="h2">Register</Typography>
            <form onSubmit={createUser}>
                <TextField margin="normal" fullWidth error={newUsername.length<5 && newUsername.length>0} label="Dein Nutzername" type="text" value={newUsername} onChange={ev => setNewUsername(ev.target.value)}/>
                <TextField margin="normal" fullWidth type="password" label={'Passwort'} value={newPasswordOne} onChange={ev => setNewPasswordOne(ev.target.value)}/>
                <TextField margin="normal" fullWidth type="password" label={'Passwort wiederholen'} value={newPasswordTwo} onChange={ev => setNewPasswordTwo(ev.target.value)}/>
                <Button variant="outlined" type='submit'>Registrieren</Button>
            </form>
            <Typography variant="h2">Login</Typography>
            <form onSubmit={login}>
                <TextField margin="normal" fullWidth variant="filled" type="text" label={'Nutzername'} value={username} onChange={ev => setUsername(ev.target.value)}/>
                <TextField margin="normal" fullWidth variant="filled" type="password" label={'Passwort'} value={password} onChange={ev => setPassword(ev.target.value)}/>
                <Button variant="outlined" type='submit'>Login</Button>
            </form>
            {error && <h1>{error}</h1>}
            {token && <div>
                <Button onClick={getInfos}>Eingeloggt, versuch es!</Button>
                <p>wenn alles klappt ist hier dein Username: {checker && checker}</p>
            </div>}
        </div>
    );
}