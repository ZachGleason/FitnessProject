import React, {useState, useEffect} from "react";
import '../App.css';
import  { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
import axios from "axios";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';


const Home = () => {

  return (
    <div>
        
    <AppBar position="static"  style={{ background: '#2E3B60' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            HealthLeak
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            HealthLeak
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          </Box>

          <Box sx={{ flex: -12, display: { xs: 'none', md: 'flex', mx: 10} }}>
            <Link to="/register" className="register"><Button  variant="contained"sx={{ ml: 10 }}  style={{ background: '#ffffff', color: 'black' }}>Register</Button></Link>
            <Link to="/login" className="login"><Button variant="contained" sx={{ ml: 3 }} style={{ background: '#ffffff', color: 'black' }}>Log In</Button></Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Container maxWidth="xxl" >
        <Box  sx={{ height: 600, md: 'flex', mt: 7 }} > 
        <Typography
            variant="h6"
            noWrap
            component="a"
            id="text1"
            sx={{
                ml: 30, mt: 10,
              fontSize: 50,
              display: { xs: 'none', md: 'flex',  },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Get Your Healthy Body 
          </Typography> 
          <Typography variant="h6"
            noWrap
            component="a"
            id="text2"
            sx={{
                ml: 27, mt: -2,
              fontSize: 50,
              display: { xs: 'none', md: 'flex',  },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
            With A Workout Program
          </Typography>
          <Typography variant="h6"
            noWrap
            component="a"
            id="text3"
            sx={{ 
              ml: 42    , mt: -2,
              fontSize: 50,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
          That Suits You
          </Typography>
          <Typography variant="h6"
            noWrap
            component="a"
            id="text4"
            sx={{ 
              ml: 33    , mt: 1,
              fontSize: 15,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.25rem',
              color: '',
              textDecoration: 'none',
            }}>
          With our professional trainers, we will guide 
          </Typography>
          <Typography variant="h6"
            noWrap
            component="a"
            id="text5"
            sx={{ 
              ml: 33    , mt: 0,
              fontSize: 15,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.25rem',
              color: '',
              textDecoration: 'none',
            }}>
          you in the right direction for your ideal body
          </Typography>
          <Button variant="contained" style={{
        borderRadius: 5,
        backgroundColor: "#2E3B60",
        padding: "5px 25px",
        fontSize: "18px"
    }}
    sx={{ml: 50, mt: 5}}
    >Learn More</Button>
          <img src="assets/360_F_285283630_DRK2w48tfFM2J1heFAfSi85tM9T8vpwz.jpg" className="pic" ></img>
        </Box>
    </Container>
    
    </div>
  )
}


export default Home;