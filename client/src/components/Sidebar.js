import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import '../App.css';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/" >
        Home
        <HomeIcon sx={{ mb: -0.5, ml: 1  }}/>
      </a>
      <a className="menu-item-two" href="/profile">
        Profile
        <AccountBoxIcon sx={{ mb: -0.5, ml: 1  }}/>
      </a>
    </Menu>
  );
};