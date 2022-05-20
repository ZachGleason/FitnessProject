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
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pic from '../Assets/bike.jpg';



import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Pie } from 'react-chartjs-2';



const Dashboard = () => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend,
        ArcElement
      );
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            // position: 'top' as const,
          },
        },
      };
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
      const datas = {
        labels,
        datasets: [
          {
            label: 'Sleep (Hours)',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 400 })),
            backgroundColor: 'rgba(117, 186, 255)',
          },
        ],
      };

      const data2 = {
        labels: [ 'Water (Oz)', 'Remaining'],
        datasets: [
          {
            data: [12, 10],
            backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
              'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 2,
          },
        ],
      };

    const data = [{name: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], uv: 12, pv: 2400, amt: 2400}];
  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
        <Container>
                <Typography sx={{ position: "absolute", mt: -5, ml: -34, fontSize: 25, fontFamily: "serif" }}>
                    Recommended Activity
                </Typography>
            <Box sx={{ border: "1px solid black", height: "425px", width: "600px", borderRadius: "20px", mt: 17, ml: -36, overflow: "scroll"}}>
                <Box sx={{ width: "582px", height: "95px", border: "1px solid black", borderRadius: "20px", ml: 1, mt: 1,}}>
                    <Box sx={{ width: "80px", height: "80px", borderRadius: "20px", border: "1px solid black", ml: 1, mt: 0.8, background: "#4fb7f7"}} >
                        <DirectionsRunIcon sx={{ fontSize: 50, ml: 2, mt: 1.5,   }}/> 
                        <Typography sx={{ fontSize: 20, fontFamily: "serif", ml: 12, mt: -8 }}>
                            Running
                            <Box sx={{ display: "inline-block", width: "550px"}}>
                                <AccessTimeIcon sx={{ fontSize: 25, display: "inline-block", mt: 1 }}/>
                                <Typography sx={{ fontSize: 20, fontFamily: "serif", display: "inline-block", ml: 1,   }}>30 min</Typography>
                                <LocalDiningIcon sx={{ fontSize: 25, display: "inline-block",}}/>
                                <Typography sx={{ fontSize: 20, fontFamily: "serif",display: "inline-block" }}>750 Calories</Typography>
                            </Box>
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ width: "582px", height: "95px", border: "1px solid black", borderRadius: "20px", ml: 1, mt: 1    }}>
                    <Box sx={{ width: "80px", height: "80px", borderRadius: "20px", border: "1px solid black", ml: 1, mt: 0.8, background: "#d199b9", opacity: 0.8  }}>
                        <FitnessCenterIcon sx={{fontSize: 50, ml: 2, mt: 1.5  }}/> 
                        <Typography sx={{ fontSize: 20, fontFamily: "serif", ml: 12, mt: -8 }}>
                            WeightLifting
                        </Typography>
                    </Box>  
                </Box>
                <Box sx={{ width: "582px", height: "95px", border: "1px solid black", borderRadius: "20px", ml: 1, mt: 1    }}>
                    <Box sx={{ width: "80px", height: "80px", borderRadius: "20px", border: "1px solid black", ml: 1, mt: 0.8, background: "#ff6969", opacity: 0.8}}>
                        <BoltIcon sx={{ fontSize: 50, ml: 2, mt: 1.5  }}/> 
                        <Typography sx={{ fontSize: 20, fontFamily: "serif", ml: 12, mt: -8, width: "150px" }}>
                            H.I.T Training
                        </Typography>
                    </Box>  
                </Box>
                <Box sx={{ width: "582px", height: "95px", border: "1px solid black", borderRadius: "20px", ml: 1, mt: 1    }}>
                    <Box sx={{ width: "80px", height: "80px", borderRadius: "20px", border: "1px solid black", ml: 1, mt: 0.8, background: "#d9ab91", opacity: 0.9}}>
                        <EmojiPeopleIcon sx={{ fontSize: 50, ml: 2, mt: 1.5,  }}/> 
                        <Typography sx={{ fontSize: 20, fontFamily: "serif", ml: 12, mt: -8 }}>
                            Stretching
                        </Typography>
                    </Box>  
                </Box>
                <Box sx={{ width: "582px", height: "95px", border: "1px solid black", borderRadius: "20px", ml: 1, mt: 1    }}>
                    <Box sx={{ width: "80px", height: "80px", borderRadius: "20px", border: "1px solid black", ml: 1, mt: 0.8,  background: "#82d993", opacity: 0.8}}>
                        <PoolIcon sx={{ fontSize: 50, ml: 2, mt: 1.5  }}/> 
                        <Typography sx={{ fontSize: 20, fontFamily: "serif", ml: 12, mt: -8 }}>
                            Swimming
                        </Typography>
                    </Box>  
                </Box>
                <Box sx={{ width: "582px", height: "95px", border: "1px solid black", borderRadius: "20px", ml: 1, mt: 1    }}>
                    <Box sx={{ width: "80px", height: "80px", borderRadius: "20px", border: "1px solid black", ml: 1, mt: 0.8, background: "#fffd8a", opacity: 0.8  }}>
                        <HikingIcon sx={{ fontSize: 50, ml: 2, mt: 1.5  }}/> 
                        <Typography sx={{ fontSize: 20, fontFamily: "serif", ml: 12, mt: -8 }}>
                            Hiking
                        </Typography>
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
                <Box sx={{ border: "1px solid black", height: "190px", width: "226px", borderRadius: "30px", mt: 1, ml: 1, display: "inline-block" }}>
                    <img src={pic} alt="test" width={210} height={200} borderRadius={50}/>
                </Box>
                <Box sx={{ border: "1px solid black", height: "190px", width: "226px", borderRadius: "30px", mt: 1, ml: 1.5, display: "inline-block"}}></Box>
                <Box sx={{ border: "1px solid black", height: "190px", width: "226px", borderRadius: "30px", mt: 1, ml: 1.5, display: "inline-block"}}></Box>
                <Box sx={{ border: "1px solid black", height: "190px", width: "226px", borderRadius: "30px", mt: 1, ml: 1.5, display: "inline-block"}}></Box>
                <Box sx={{ border: "1px solid black", height: "190px", width: "226px", borderRadius: "30px", mt: 1, ml: 1.5, display: "inline-block"}}></Box>
                <Box sx={{ border: "1px solid black", height: "190px", width: "226px", borderRadius: "30px", mt: 1, ml: 1.5, display: "inline-block"}}></Box>
            </Box>
            <Box sx={{ border: "1px solid black", height: "420px", width: "300px", borderRadius: "20px", mt: 6, ml: 144}}>
                <Typography sx={{ position: "absolute", mt: -5, ml: 1, fontSize: 25, fontFamily: "serif" }}>
                    Drink Log
                    <Button sx={{ color: "text.primary", borderRadius: "30px", ml: -1, mt: -0.5}}><AddBoxIcon /></Button>
                </Typography>
                <Box sx={{ mt: 6}}>
                    <Pie data={data2} />
                </Box>
            </Box>
            <Box sx={{ border: "1px solid black", height: "420px", width: "600px", borderRadius: "20px", mt: -52, ml: 68, overflow: "scroll", }}>
                <Typography sx={{ position: "absolute", mt: -5, ml: 1, fontSize: 25, fontFamily: "serif" }}>
                    Recipes
                </Typography>
                <Box sx={{ width: "582px", height: "95px", border: "2px solid black", borderRadius: "10px", ml: 1, mt: 1,  }} >
                <FontAwesomeIcon icon="fa-solid fa-bowl-food" />
                    <ArrowCircleRightIcon sx={{ ml: 67, mt: 3, fontSize: 38, color: "text.primary", background: "white"}}/></Box>
                <Box sx={{ width: "582px", height: "95px", border: "2px solid black", borderRadius: "10px", ml: 1, mt: 1,   }}><ArrowCircleRightIcon sx={{ ml: 67, mt: 3, fontSize: 38}}/></Box>
                <Box sx={{ width: "582px", height: "95px", border: "2px solid black", borderRadius: "10px", ml: 1, mt: 1,  }}><ArrowCircleRightIcon sx={{ ml: 67, mt: 3, fontSize: 38}}/></Box>
                <Box sx={{ width: "582px", height: "95px", border: "2px solid black", borderRadius: "10px", ml: 1, mt: 1,  }}><ArrowCircleRightIcon sx={{ ml: 67, mt: 3, fontSize: 38}}/></Box>
                <Box sx={{ width: "582px", height: "95px", border: "2px solid black", borderRadius: "10px", ml: 1, mt: 1,    }}><ArrowCircleRightIcon sx={{ ml: 67, mt: 3, fontSize: 38}}/></Box>
            </Box>
            <Box sx={{ border: "1px solid black", height: "420px", width: "820px", borderRadius: "20px", mt: -52, ml: -36}}>
                <Typography sx={{ position: "absolute", mt: -5, ml: 1, fontSize: 25, fontFamily: "serif" }}>
                    Sleep Tracker
                    <Button sx={{ color: "text.primary", borderRadius: "30px", ml: -1, mt: -0.5}}><AddBoxIcon /></Button>
                </Typography>
                <Bar options={options} data={datas}/>
            </Box>

        </Container>
      </div>
    </div>
  )
}

export default Dashboard