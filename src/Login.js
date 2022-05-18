import React from 'react'
import './Login.css'
import { auth, provider } from "./firebase"
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {

    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(({user}) =>{
            dispatch(login({ 
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }))
        })
        .catch(error => alert(error.message))
    };
  return (
    <div className='login'>
        <div className='login__container'>
            <img 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjo2HDYxvK_tqwrUx4Gc8iSDfbXb7e3KlPJEElCmzS3_rMKAcZFaoGh9x5dMC529EEOE&usqp=CAU' 
                alt='' 
            />
            <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
        </div>
    </div>
  )
}

export default Login