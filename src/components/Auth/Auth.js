import { Avatar, Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import Input from './Input';
import useStyles from './styles';
import { GoogleLogin } from 'react-google-login';
import Icon from './icon';



export const Auth = () => {
    const classes = useStyles();
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    
    const handleSubmit = () => {

    };

    const handleChange = () => {

    };

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const switchMode = () => {
        setIsSignup(!isSignup);
        handleShowPassword(false);
    };

    const googleSucess = (res) => {
        console.log(res);
    };
     
    const googleFailure = () => {
        console.log('google error. Try again');
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlined/>
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="Nombre" handleChange={handleChange} autoFocus half/>
                                    <Input name="lastName"  label="Apellido" handleChange={handleChange} half/>
                                </>
                            )
                        }
                        <Input name="email" label="Correo electronico" handleChange={handleChange} type="email"/>
                        <Input name="password" label="Contraseña"      handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                        {
                            isSignup && <Input name="confirmPassword" label="Confirmar Contraseña" handleChange={handleChange} type="password"/>
                        }
                    </Grid>
                    <GoogleLogin
                        clientId="GOOLE ID"
                        render={(renderProps) => (
                            <Button 
                                className={classes.googleButton} 
                                color="primary" 
                                fullWidth 
                                onClick={renderProps.onClick} 
                                disabled={renderProps.disabled} 
                                startIcon={<Icon/>} 
                                variant="contained">
                                    Iniciar Sesión con Google
                            </Button>
                        )}
                        onSuccess={googleSucess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <Grid container justifyContent="flex-end">
                         <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? 'Ya tienes una cuenta? Registrate' : 'No tienes una cuenta? Crea una'}
                            </Button>
                         </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}
