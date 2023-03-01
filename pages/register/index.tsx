import * as React from 'react';
import {FormGroup, 
        FormControl, 
        InputLabel, 
        OutlinedInput, 
        InputAdornment, 
        IconButton, 
        Grid, 
        Paper,
        CardActionArea,
        CardMedia,
        Chip,
        Container,
        Stack,
        Breadcrumbs
        } from '@mui/material'
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent'
import Typography from '@mui/joy/Typography';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Link from 'next/link';
import ReactPlayer from "react-player";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { userService } from '@/services/user.service';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Register(){
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
    const breadcrumbs = [
        <Link key="1" color="inherit" href="/">
          Home
        </Link>,
        <Typography key="3">
          Rehister
        </Typography>,
      ];

    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [resError, setError] = useState('');

    const submitData = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const user = {
            name,
            email,
            password,
            passwordConfirm
        }
        return userService.register(user)
            .then((response) => {
                if(response == 'success'){
                    router.push('/');
                }else{
                    setError(response);
                    router.push('/login');
                }
            })
        .catch();
    };
    return(
        <>
           <div>
        <Container fixed>
            <Stack spacing={2} className="mt-2">
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack> 
        <Grid container spacing={1} className="mt-2">
          <Grid item xs={6} sm={6}>
            <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
            <CardCover>
                    <video
                        autoPlay
                        loop
                        muted
                        poster="https://assets.codepen.io/6093409/river.jpg"
                    >
                        <source
                        src="cover-register.mp4"
                        type="video/mp4"
                        />
                    </video>
                    </CardCover>
                    <CardContent>
                        <Typography
                            level="h6"
                            fontWeight="lg"
                            textColor="#fff"
                            mt={{ xs: 12, sm: 55 }}
                        >
                            Video
                        </Typography>
                    </CardContent>
            </Card>
        </Grid>
        <Grid item xs={1} sm={0}>

        </Grid>
        <Grid item xs={10} sm={4}>
            <Grid container alignItems="center" className="mt-4">
                    <Grid>
                        <Typography fontSize="14"  fontWeight="lg">Daftar Sekarang</Typography>
                        Sudah punya akun Bengkelin?<Link 
                        href="/login" 
                        as={`/login`}
                        > Masuk</Link>
                    </Grid>
                </Grid>
                <form onSubmit={submitData}>
                <FormGroup>
                    <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <InputLabel color="secondary">Name</InputLabel>
                    <OutlinedInput
                        type="text"
                        label="Email"
                        color="secondary"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                    />
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <InputLabel color="secondary">Email</InputLabel>
                    <OutlinedInput
                        type="text"
                        label="Email"
                        color="secondary"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password" color="secondary">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        color="secondary"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password" color="secondary">Password Confirm</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        color="secondary"
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        value={passwordConfirm}
                        required
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                        <button type="submit" className="bttn-pill bttn-sm bttn-royal">Daftar</button>
                    </FormControl>
                </FormGroup>
                </form>
        </Grid>
        <Grid item xs={6} sm={2}>
        </Grid>
        </Grid>
        </Container>
        </div>
        </>
    )
}