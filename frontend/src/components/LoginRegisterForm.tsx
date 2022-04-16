import React, {useState} from "react";
import axios from "axios";
import {TextField, Button, Typography, Grid} from '@mui/material';
import {loginUser, registerNewUser} from "../service/apiService";
import {useAuth} from "../auth/AuthProvider";

export default function LoginRegisterForm() {
    const [newUsername, setNewUsername] = useState('')
    const [newPasswordOne, setNewPasswordOne] = useState('')
    const [newPasswordTwo, setNewPasswordTwo] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorLogin, setErrorLogin] = useState('')
    const [errorName, setErrorName] = useState('')
    const [errorPass, setErrorPass] = useState('')

    const auth = useAuth()


    const createUser = () => {
        if (!(newPasswordOne === newPasswordTwo) || newPasswordOne.length < 5) {
            setErrorPass("Passwörter nicht identisch oder zu kurz.")
            setNewPasswordTwo('')
        } else {
           registerNewUser(newUsername, newPasswordOne, newPasswordTwo)
                .then(() => {
                    setUsername(newUsername)
                    setPassword(newPasswordOne)
                    setNewUsername('')
                    setNewPasswordOne('')
                    setNewPasswordTwo('')
                })
                .catch(e => {
                    if (e.response.status === 400) {
                        setErrorPass(`Passwörter nicht identisch`)
                        setNewPasswordOne('')
                        setNewPasswordTwo('')
                    } else if (e.response.status === 409){
                        setErrorName(`Nutzername ${newUsername} ist schon vergeben.`)
                        setNewUsername('')
                    } else {
                        setErrorName(e.message)
                        setNewUsername('')
                        setNewPasswordOne('')
                        setNewPasswordTwo('')
                    }
                })
        }

    }

    const login = () => {
        auth.login(username,password)
            .catch(() => {
                setErrorLogin("Ungültige Eingaben")
            })
    }

    return (
        <Grid container direction={'column'}>
            {!username && <Grid container spacing={2} justifyContent={'space-around'}>
                <Grid item xs={12}>
                    <Typography variant="h2" mt={2}>Register</Typography>
                </Grid>
                <Grid item xs={8}>
                    <TextField
                        fullWidth
                        error={(newUsername.length < 5 && newUsername.length > 0 )|| errorName.length>0}
                        helperText={errorName ?
                            errorName : (newUsername.length < 5 && newUsername.length > 0 ) ?
                            "Nutzername mit mindestens 5 Zeichen":""}
                        label="Dein Nutzername"
                        type="text"
                        value={newUsername}
                        onChange={ev => setNewUsername(ev.target.value)}/>
                </Grid>
                {newUsername && <><Grid item xs={8}>
                    <TextField
                        fullWidth
                        type="password"
                        label={'Passwort'}
                        helperText={newPasswordOne.length<7 && "Mindestens 7 Zeichen"}
                        value={newPasswordOne}
                        onChange={ev => setNewPasswordOne(ev.target.value)}/>
                </Grid>
                <Grid item xs={8}>
                <TextField
                    fullWidth
                    error={errorPass.length>0}
                    helperText={errorPass && errorPass}
                    type="password"
                    label={'Passwort wiederholen'}
                    value={newPasswordTwo}
                    onChange={ev => {
                        setErrorPass('')
                        setNewPasswordTwo(ev.target.value)
                    }}/>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="outlined" onClick={createUser}>Registrieren</Button>
                </Grid></>}
            </Grid>}
            {!newUsername && <Grid container spacing={2} justifyContent={'space-around'}>
                <Grid item xs={12}>
                    <Typography variant="h2" mt={2}>Login</Typography>
                </Grid>
                <Grid item xs={8}>
                    <TextField
                        fullWidth
                        error={errorLogin.length>0}
                        type="text"
                        label={'Dein Nutzername'}
                        value={username}
                        onChange={ev => {
                            setUsername(ev.target.value)
                            setErrorLogin('')
                        }}/>
                </Grid>
                { username && <>
                <Grid item xs={8}>
                    <TextField
                        error={errorLogin.length>0}
                        helperText={errorLogin}
                        fullWidth
                        type="password"
                        label={'Passwort'}
                        value={password}
                        onChange={ev => {
                            setErrorLogin('')
                            setPassword(ev.target.value)
                        }}/>
                </Grid>
                <Grid item xs={8}>
                    <Button variant="outlined" onClick={login}>Login</Button>
                </Grid>
                </>}
            </Grid>}
        </Grid>

    );
}