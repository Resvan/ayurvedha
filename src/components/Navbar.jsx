import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import locactionIcon from '../assets/location.svg';
import contactIcon from '../assets/contact.svg';
import logIcon from '../assets/logo.svg';
import accomadtionIcon from '../assets/accomadation.svg';
import signupIcon from '../assets/sign.svg';

const Navbar = () => {

    let menuItems = ['Home', 'About Us', 'Yoga Retreats', 'Host Your Retreat', 'Blog']
    const [selected, setSelected] = useState(0);

    return (
      <>
      <div style={{
          backgroundColor: "#146D57",
      }}>
          <Typography sx={{
              textAlign: 'center',
              py: '12px',
              color: 'white',
              fontFamily: 'Open Sans',
              fontSize: '14px',
              fontWeight:400
          }}>
              "Limited Time: Save on our Wellness Packages – Explore Offers"
          </Typography>
            </div>
            <Box sx={{
                display: 'flex',
                background: 'white',
                justifyContent:'space-around',
                py: '18px',
                gap:{xs:'90px', md:'0'},
                maxWidth: '100%',
                overflow: 'scroll',
                '&::-webkit-scrollbar': {
                    display: 'none'
                },
                scrollbarWidth: 'none'
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap:'8px'
                }}>
                    <Box sx={{
                        height: '24px',
                        width:'24px'
                    }}>
                        <img src={locactionIcon} alt="" />
                    </Box>
                    <Typography sx={{
                        color: '#4B2D1D',
                        fontFamily: 'Open Sans',
                        fontSize: '18px',
                        fontWeight: 400,
                        textWrap:'nowrap'
                    }}>
                        Location
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}>
                    <Box sx={{
                        height: '24px',
                        width: '24px'
                    }}>
                        <img src={contactIcon} alt="" />
                    </Box>
                    <Typography sx={{
                        color: '#4B2D1D',
                        fontFamily: 'Open Sans',
                        fontSize: '18px',
                        fontWeight: 400,
                        textWrap: 'nowrap'
                    }}>
                        Contact Us
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px'
                }}>
                    
                    <Typography sx={{
                        color: '#146D57',
                        fontFamily: 'Maharlika',
                        fontSize: '22px',
                        fontWeight: 400,
                        textWrap: 'nowrap'
                    }}>
                        NirvanaNook
                    </Typography>
                    <Box sx={{
                        height: '42px',
                        width: '42px'
                    }}>
                        <img style={{
                            height: '100%',
                            width:'100%'
                        }} src={logIcon} alt="" />
                    </Box>
                    <Typography sx={{
                        color: '#146D57',
                        fontFamily: 'Maharlika',
                        fontSize: '22px',
                        fontWeight: 400,
                        textWrap: 'nowrap'
                    }}>
                        Yoga Sanctuary
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}>
                    <Box sx={{
                        height: '24px',
                        width: '24px'
                    }}>
                        <img src={accomadtionIcon} alt="" />
                    </Box>
                    <Typography sx={{
                        color: '#4B2D1D',
                        fontFamily: 'Open Sans',
                        fontSize: '18px',
                        fontWeight: 400,
                        textWrap: 'nowrap'
                    }}>
                        Accommodation
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}>
                    <Box sx={{
                        height: '24px',
                        width: '24px'
                    }}>
                        <img src={signupIcon} alt="" />
                    </Box>
                    <Typography sx={{
                        color: '#4B2D1D',
                        fontFamily: 'Open Sans',
                        fontSize: '18px',
                        fontWeight: 400,
                        textWrap: 'nowrap'

                    }}>
                        Sign up
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                background: 'white',
                justifyContent: 'space-around',
                py: '18px',
                gap: { xs: '90px', md: '0' },
                maxWidth: '100%',
                overflow: 'scroll',
                '&::-webkit-scrollbar': {
                    display: 'none'
                },
                scrollbarWidth: 'none'
            }}>
                {
                    menuItems.map((menu, i)=>(
                        <Typography key={i} sx={{
                            fontFamily: 'Open Sans',
                            fontSize: '18px',
                            fontWeight: '400',
                            color: selected === i ? '#146D57' : '#4B2D1D',
                            borderBottom: selected === i ? '2px solid #146D57' : 'none',
                            cursor: 'pointer',
                            textWrap:'nowrap'
                        }}
                            onClick={()=>setSelected(i)}
                        >
                            {menu}
                        </Typography>
                    ))
                }
            </Box>
        </>
  )
}

export default Navbar