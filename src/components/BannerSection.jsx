import { Box, Button, Container, Grid, Typography,  } from '@mui/material'
import BackgroundImg from '../assets/banner-bg.png';
import logoYellow from '../assets/logo-yellow.svg';
import phoneIcon from '../assets/phone.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import whatsapp from '../assets/whatsapp.svg';
import twitter from '../assets/twitter.svg';

const BannerSection = () => {


  return (
      <Box sx={{
          background: `url(${BackgroundImg}) center/cover no-repeat`,
          pt: '140px',
          pb:'93px'
      }}>
          <Container maxWidth='lg' sx={{
              padding: '0px !important',
          }}>
              <Grid container spacing={'56px'}>
                  <Grid item xs={12}>
                      <Box sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '16px'
                      }}>
                          <Box sx={{
                              height: '32px',
                              width: '32px'
                          }}>
                              <img style={{
                                  width: '100%',
                                  height: '100%'
                              }} src={logoYellow} alt="" />
                          </Box>
                          <Typography sx={{
                              fontFamily: 'Open Sans',
                              fontWeight: 400,
                              fontSize: '32px',
                              color: 'white'
                          }}>
                              Discover NirvanaNook
                          </Typography>
                      </Box>
                      <Typography sx={{
                          color: 'white',
                          fontFamily: 'Butler',
                          fontWeight: 900,
                          fontSize: { xs: '65px', md: '90px' },
                          lineHeight: 'normal',
                          mb:'24px'
                      }}>
                          Your Sanctuary for <br /> Mind, Body & Soul
                      </Typography>
                      <Typography sx={{
                          fontFamily: 'Open Sans',
                          fontWeight: 400,
                          fontSize: '32px',
                          color: 'white',
                          mb:'36px'
                      }}>
                          Escape to Tranquility in Varkala, India
                      </Typography>
                      <Box sx={{
                          position: 'relative',
                          width: 'fit-content',
                          mb: '138px',
                          pb:'2px'
                          
                      }}>
                          <Box sx={{
                              position: "absolute",
                              height: '100%',
                              width: '100%',
                              background: '#F0A901',
                              bottom: '-5px',
                              zIndex: 1,
                              left:'-5px'
                          }}>

                          </Box>
                          <Button
                              variant='contained'
                              sx={{
                                  borderRadius: '0px',
                                  backgroundColor: '#146D57',
                                  display: 'flex',
                                  padding: '10px',
                                  gap: '12px',
                                  '&:hover': {
                                      background: '#146D57',
                                  },
                                  zIndex: 2,
                                  textTransform:'none'
                              }}>
                              <Typography sx={{
                                  fontFamily: 'Open Sans',
                                  color: "white",
                                  fontSize: '24px',
                                  fontWeight: 600,
                              }}>
                                  Contact Us
                              </Typography>
                              <Box sx={{
                                  height: '32px',
                                  width: '32px'
                              }}>
                                  <img src={phoneIcon} style={{
                                      height: '100%',
                                      width: '100%'
                                  }} alt="" />
                              </Box>
                          </Button>
                         
                      </Box>

                  </Grid>
                  <Grid item md={6} xs={12}>
                      <Box sx={{
                          display: 'flex',
                          gap: '22px',
                          mb:'20px'
                      }}>
                          <Box sx={{
                              height: '24px',
                              width:'24px'
                          }}>
                              <img src={facebook} alt="" />
                          </Box>
                          <Box sx={{
                              height: '24px',
                              width: '24px'
                          }}>
                              <img src={instagram} alt="" />
                          </Box>
                          <Box sx={{
                              height: '24px',
                              width: '24px'
                          }}>
                              <img src={whatsapp} alt="" />
                          </Box>
                          <Box sx={{
                              height: '24px',
                              width: '24px'
                          }}>
                              <img src={twitter} alt="" />
                          </Box>
                      </Box>
                      <Box sx={{
                          height: '2px',
                          borderRadius: '26px',
                          backgroundColor: 'rgba(255, 255, 255, 0.30)',
                          width: { xs: '100%', md: "55%" },
                      }}>
                          <Box sx={{
                              height: '2px',
                              background: '#F0A901',
                              width: "25%",
                              borderRadius:"26px"
                          }}></Box>
                     </Box>
                  </Grid>
                  <Grid item md={6} xs={12}>
                      <Box sx={{
                          display: 'flex',
                          gap: '61px',
                          flexDirection:{xs:'column', md:'row'}
                      }}>
                          <Box>
                              <Box sx={{
                                  position: 'relative',
                                  width: 'fit-content'
                              }}>
                                  <Typography sx={{
                                      color: '#D5E2D8',
                                      fontFamily: 'Bulter',
                                      fontSize: '32px',
                                      fontWeight: 300,
                                      lineHeight: 'normal',
                                      position: 'absolute',
                                      top: '-35%',
                                      right: '-30%'
                                  }}>
                                      +
                                  </Typography>
                                  <Typography sx={{
                                      color: '#F0A901',
                                      fontFamily: "Butler",
                                      fontSize: '46px',
                                      fontWeight: 300,
                                      lineHeight: 'normal'
                                  }}>
                                      100
                                  </Typography>

                              </Box>
                              <Typography sx={{
                                  color: '#FBF7EC',
                                  fontFamily: 'Butler',
                                  fontSize: '24px',
                                  fontWeight: 300,
                                  lineHeight: 'normal'
                              }}>
                                  Rooms
                              </Typography>
                          </Box>
                         
                          <Box>
                              <Box sx={{
                                  position: 'relative',
                                  width: 'fit-content'
                              }}>
                                  <Typography sx={{
                                      color: '#D5E2D8',
                                      fontFamily: 'Bulter',
                                      fontSize: '32px',
                                      fontWeight: 300,
                                      lineHeight: 'normal',
                                      position: 'absolute',
                                      top: '-35%',
                                      right: '-30%'
                                  }}>
                                      +
                                  </Typography>
                                  <Typography sx={{
                                      color: '#F0A901',
                                      fontFamily: "Butler",
                                      fontSize: '46px',
                                      fontWeight: 300,
                                      lineHeight: 'normal'
                                  }}>
                                      10
                                  </Typography>
                              </Box>
                              <Typography sx={{
                                  color: '#FBF7EC',
                                  fontFamily: 'Butler',
                                  fontSize: '24px',
                                  fontWeight: 300,
                                  lineHeight: 'normal'
                              }}>
                                  Years of wellness
                              </Typography> 
                          </Box>

                          <Box>
                              <Box sx={{
                                  position: 'relative',
                                  width: 'fit-content'

                              }}>
                                  <Typography sx={{
                                      color: '#D5E2D8',
                                      fontFamily: 'Bulter',
                                      fontSize: '32px',
                                      fontWeight: 300,
                                      lineHeight: 'normal',
                                      position: 'absolute',
                                      top: '-35%',
                                      right: '-12%'
                                  }}>
                                      +
                                  </Typography>
                                  <Typography sx={{
                                      color: '#F0A901',
                                      fontFamily: "Butler",
                                      fontSize: '46px',
                                      fontWeight: 300,
                                      lineHeight: 'normal'
                                  }}>
                                      3,400
                                  </Typography>
                              </Box>
                              <Typography sx={{
                                  color: '#FBF7EC',
                                  fontFamily: 'Butler',
                                  fontSize: '24px',
                                  fontWeight: 300,
                                  lineHeight: 'normal'
                              }}>
                                  Happy Guests
                              </Typography>
                          </Box>
                        
                      </Box>
                  </Grid>
              </Grid>
          </Container>
    </Box>
  )
}

export default BannerSection