import React from 'react'
import Sidebar from './Sidebar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import BoltIcon from '@mui/icons-material/Bolt';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import PoolIcon from '@mui/icons-material/Pool';
import HikingIcon from '@mui/icons-material/Hiking';


const Dashboard = () => {
  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
        <Container>
                <Typography sx={{ position: "absolute", mt: -5, ml: -34, fontSize: 25, fontFamily: "serif" }}>
                    Recommended Activity
                </Typography>
            <Box sx={{ border: "1px solid black", height: "425px", width: "600px", borderRadius: "20px", mt: 17, ml: -36, overflow: "scroll"}}>
                <Box sx={{ width: "582px", height: "95px", border: "1px solid black", borderRadius: "20px", ml: 1, mt: 1    }}>
                    <Box sx={{ width: "80px", height: "80px", borderRadius: "20px", border: "1px solid black", ml: 1, mt: 0.8}} >
                        <DirectionsRunIcon sx={{ fontSize: 50, ml: 2, mt: 1.5,   }}/> 
                        Running
                    </Box>
                </Box>
                <Box sx={{ width: "582px", height: "95px", border: "1px solid black", borderRadius: "20px", ml: 1, mt: 1    }}>
                    <Box sx={{ width: "80px", height: "80px", borderRadius: "20px", border: "1px solid black", ml: 1, mt: 0.8}}>
                        <FitnessCenterIcon sx={{ fontSize: 50, ml: 2, mt: 1.5  }}/> 
                        WeightLifting
                    </Box>  
                </Box>
                <Box sx={{ width: "582px", height: "95px", border: "1px solid black", borderRadius: "20px", ml: 1, mt: 1    }}>
                    <Box sx={{ width: "80px", height: "80px", borderRadius: "20px", border: "1px solid black", ml: 1, mt: 0.8}}>
                        <BoltIcon sx={{ fontSize: 50, ml: 2, mt: 1.5  }}/> 
                        H.I.T Training
                    </Box>  
                </Box>
                <Box sx={{ width: "582px", height: "95px", border: "1px solid black", borderRadius: "20px", ml: 1, mt: 1    }}>
                    <Box sx={{ width: "80px", height: "80px", borderRadius: "20px", border: "1px solid black", ml: 1, mt: 0.8}}>
                        <EmojiPeopleIcon sx={{ fontSize: 50, ml: 2, mt: 1.5  }}/> 
                        Stretching
                    </Box>  
                </Box>
                <Box sx={{ width: "582px", height: "95px", border: "1px solid black", borderRadius: "20px", ml: 1, mt: 1    }}>
                    <Box sx={{ width: "80px", height: "80px", borderRadius: "20px", border: "1px solid black", ml: 1, mt: 0.8}}>
                        <PoolIcon sx={{ fontSize: 50, ml: 2, mt: 1.5  }}/> 
                        Swimming
                    </Box>  
                </Box>
                <Box sx={{ width: "582px", height: "95px", border: "1px solid black", borderRadius: "20px", ml: 1, mt: 1    }}>
                    <Box sx={{ width: "80px", height: "80px", borderRadius: "20px", border: "1px solid black", ml: 1, mt: 0.8}}>
                        <HikingIcon sx={{ fontSize: 50, ml: 2, mt: 1.5  }}/> 
                        Hiking
                    </Box>  
                </Box>
            </Box>
            <Box sx={{ border: "1px solid black", height: "110px", width: "400px", borderRadius: "20px", mt: -53, ml: 40}}>
                <Typography sx={{ position: "absolute", mt: -5, ml: 1, fontSize: 25, fontFamily: "serif" }}>
                    Calories Consumed   
                    <Button sx={{ color: "text.primary", borderRadius: "30px", ml: -1, mt: -0.5}}><AddBoxIcon /></Button>
                </Typography>
            </Box>
            <Box sx={{ border: "1px solid black", height: "110px", width: "400px", borderRadius: "20px", mt: 6, ml: 40}}>
            <Typography sx={{ position: "absolute", mt: -5, ml: 1, fontSize: 25, fontFamily: "serif" }}>
                    Weight Tracker
                    <Button sx={{ color: "text.primary", borderRadius: "30px", ml: -1, mt: -0.5}}><AddBoxIcon /></Button>
                </Typography>
            </Box>
            <Box sx={{ border: "1px solid black", height: "110px", width: "400px", borderRadius: "20px", mt: 6, ml: 40}}>
                <Typography sx={{ position: "absolute", mt: -5, ml: 1, fontSize: 25, fontFamily: "serif" }}>
                    Example
                    <Button sx={{ color: "text.primary", borderRadius: "30px", ml: -1, mt: -0.5}}><AddBoxIcon /></Button>
                </Typography>
            </Box>
            <Box sx={{ border: "1px solid black", height: "420px", width: "720px", borderRadius: "20px", mt: -53, ml: 91, overflowX: "scroll"}} id="box">
            <Typography sx={{ position: "absolute", mt: -5, ml: 1, fontSize: 25, fontFamily: "serif" }}>
                    Programs / Categories
                </Typography>
                {/* <Box sx={{ border: "1px solid black", height: "390px", width: "210px", borderRadius: "30px", mt: 1, ml: 1, display: "inline-block" }}></Box>
                <Box sx={{ border: "1px solid black", height: "390px", width: "210px", borderRadius: "30px", mt: 1, ml: 1.5, display: "inline-block"}}></Box>
                <Box sx={{ border: "1px solid black", height: "390px", width: "210px", borderRadius: "30px", mt: 1, ml: 1.5, display: "inline-block"}}></Box>
                <Box sx={{ border: "1px solid black", height: "390px", width: "210px", borderRadius: "30px", mt: 1, ml: 1.5, display: "inline-block"}}></Box> */}
            </Box>
            <Box sx={{ border: "1px solid black", height: "400px", width: "300px", borderRadius: "20px", mt: 7, ml: 144}}>
                <Typography sx={{ position: "absolute", mt: -5, ml: 1, fontSize: 25, fontFamily: "serif" }}>
                    Drink Log
                    <Button sx={{ color: "text.primary", borderRadius: "30px", ml: -1, mt: -0.5}}><AddBoxIcon /></Button>
                </Typography>
            </Box>
            <Box sx={{ border: "1px solid black", height: "400px", width: "600px", borderRadius: "20px", mt: -50, ml: 68}}>
                <Typography sx={{ position: "absolute", mt: -5, ml: 1, fontSize: 25, fontFamily: "serif" }}>
                    Recipes
                </Typography>
            </Box>
            <Box sx={{ border: "1px solid black", height: "170px", width: "820px", borderRadius: "20px", mt: -50, ml: -36}}>
                <Typography sx={{ position: "absolute", mt: -5, ml: 1, fontSize: 25, fontFamily: "serif" }}>
                    Sleep Tracker
                    <Button sx={{ color: "text.primary", borderRadius: "30px", ml: -1, mt: -0.5}}><AddBoxIcon /></Button>
                </Typography>
            </Box>
            <Box sx={{ border: "1px solid black", height: "170px", width: "820px", borderRadius: "20px", mt: 7, ml: -36}}>
                <Typography sx={{ position: "absolute", mt: -5, ml: 1, fontSize: 25, fontFamily: "serif" }}>
                    Workout Schedule
                    <Button sx={{ color: "text.primary", borderRadius: "30px", ml: -1, mt: -0.5}}><AddBoxIcon /></Button>
                </Typography>
            </Box>

        </Container>
      </div>
    </div>
  )
}

export default Dashboard