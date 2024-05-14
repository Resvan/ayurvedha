import React, { useState } from 'react';
import { Typography, Box, Container, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Drawer } from '@mui/material';
import locactionIcon from '../assets/location.svg';
import contactIcon from '../assets/contact.svg';
import logIcon from '../assets/logo.svg';
import accomadtionIcon from '../assets/accomadation.svg';
import signupIcon from '../assets/sign.svg';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

    let menuItems = ['Home', 'About Us', 'Yoga Retreats', 'Host Your Retreat', 'Blog']
    const [selected, setSelected] = useState(0);

    const [open, setOpen] = useState(false);

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation">
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                           
                                <Box sx={{
                                    height: '24px',
                                    width: '24px'
                                }}>
                                    <img src={locactionIcon} alt="" />
                                </Box>
                        </ListItemIcon>
                        <ListItemText primary={"Location"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>

                            <Box sx={{
                                height: '24px',
                                width: '24px'
                            }}>
                                <img src={contactIcon} alt="" />
                            </Box>
                        </ListItemIcon>
                        <ListItemText primary={"Contact Us"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>

                            <Box sx={{
                                height: '24px',
                                width: '24px'
                            }}>
                                <img src={accomadtionIcon} alt="" />
                            </Box>
                        </ListItemIcon>
                        <ListItemText primary={"Accommodation"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>

                            <Box sx={{
                                height: '24px',
                                width: '24px'
                            }}>
                                <img src={signupIcon} alt="" />
                            </Box>
                        </ListItemIcon>
                        <ListItemText primary={"Sing up"} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary={"Home"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary={"About Us"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary={"Yoga Retreats"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary={"Host Retreats"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary={"Blog"} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            <Box sx={{
                padding: '16px',
                display: { xs: 'flex', md:'none'},
                alignItems:'center'
            }}>
                <Box sx={{
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center',
                    flexGrow:1
                }} >
                    <Box sx={{
                        height: '42px',
                        width: '42px'
                    }}>
                        <img style={{
                            height: '100%',
                            width: '100%'
                        }} src={logIcon} alt="" />
                    </Box>
                    <Box>
                        <Typography sx={{
                            color: '#146D57',
                            fontFamily: 'Maharlika',
                            fontSize: '22px',
                            fontWeight: 400,
                            textWrap: 'nowrap'
                        }}>
                            NirvanaNook
                        </Typography>
                        <Typography sx={{
                            color: '#146D57',
                            fontFamily: 'Maharlika',
                            fontSize: '22px',
                            fontWeight: 400,
                            textWrap: 'nowrap',
                        }}>
                            Yoga Sanctuary
                        </Typography>
                    </Box>
                </Box>
                <Box >
                    <IconButton onClick={()=>setOpen(true)}>
                        <MenuIcon/>
                    </IconButton>
                </Box>
            </Box>
            <Box sx={{
                backgroundColor: "#146D57",
            }}>
                <Container sx={{
                    padding: { md: '0px !important' },
                }}>
                    <Typography sx={{
                        textAlign: 'center',
                        py: '12px',
                        color: 'white',
                        fontFamily: 'Open Sans',
                        fontSize: '14px',
                        fontWeight: 400
                    }}>
                        "Limited Time: Save on our Wellness Packages – Explore Offers"
                    </Typography>
                </Container>
            </Box>
            <Container sx={{
                padding: { md: '0px !important' },
            }}>
                <Box sx={{
                    display: { xs: 'none', md: 'flex' },
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
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <Box sx={{
                            height: '24px',
                            width: '24px'
                        }}>
                            <img src={locactionIcon} alt="" />
                        </Box>
                        <Typography sx={{
                            color: '#4B2D1D',
                            fontFamily: 'Open Sans',
                            fontSize: '18px',
                            fontWeight: 400,
                            textWrap: 'nowrap'
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
                                width: '100%'
                            }} src={logIcon} alt="" />
                        </Box>
                        <Typography sx={{
                            color: '#146D57',
                            fontFamily: 'Maharlika',
                            fontSize: '22px',
                            fontWeight: 400,
                            textWrap: 'nowrap',
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
                    display: { xs: 'none', md: 'flex' },
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
                        menuItems.map((menu, i) => (
                            <Typography key={i} sx={{
                                fontFamily: 'Open Sans',
                                fontSize: '18px',
                                fontWeight: '400',
                                color: selected === i ? '#146D57' : '#4B2D1D',
                                borderBottom: selected === i ? '2px solid #146D57' : 'none',
                                cursor: 'pointer',
                                textWrap: 'nowrap'
                            }}
                                onClick={() => setSelected(i)}
                            >
                                {menu}
                            </Typography>
                        ))
                    }
                </Box>
            </Container>
            <Drawer open={open} onClose={()=>setOpen(false)}>
                {DrawerList}
            </Drawer>
        </>
    )
}

export default Navbar