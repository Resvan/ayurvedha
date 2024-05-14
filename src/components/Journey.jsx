import { Box, Button, Container, Grid, Typography } from "@mui/material"
import JourneyImage from '../assets/journey.png';
import vectorOne from '../assets/vector.svg';
import vectorTwo from '../assets/vector-two.svg';
import rightArrow from '../assets/right-arrow.svg';

const Journey = () => {
    return (
        <Box sx={{
            background: `#D5E2D8`,
            py: '90px',
            position:'relative'
        }}>
            <Container maxWidth='lg' sx={{
                padding: '0px !important',
            }}>
                <Grid container spacing={'70px'}>
                    <Grid item xs={12} md={6} >
                        <Box sx={{ position: 'relative' }}>
                            <div style={{
                                position: 'absolute',
                                background: "#F0A901",
                                width: '100%',
                                bottom: -15,
                                left: -15,
                                height: '100%',
                                borderRadius: '0px 150px'
                            }}></div>
                            <div style={{
                                position: 'relative', height: '666px',
                                background: `url(${JourneyImage}) center/cover no-repeat`,
                                borderRadius: '0px 150px'
                            }}>

                                <Box sx={{
                                    position: 'absolute',
                                    padding: '10px 0px 10px 10px',
                                    borderRadius: '0px 30px',
                                    background: 'rgba(31, 60, 17, 0.10)',
                                    boxShadow: '0px 4px 6.5px 0px rgba(0, 0, 0, 0.25)',
                                    backdropFilter: 'blur(50px)',
                                    bottom: { xs: '5%', md: '25%' },
                                    right: { xs: '0', md: '-5%' },
                                    width: '251px'
                                }}>
                                    <Typography sx={{
                                        fontFamily: 'Open Sans',
                                        fontWeight: 600,
                                        fontSize: '32px',
                                        lineHeight: '58px',
                                        color: 'white',
                                        textAlign: 'center'
                                    }}>
                                        Since 2016
                                    </Typography>
                                </Box>
                            </div>
                        </Box>


                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: 'space-between',
                            minHeight:"100%"
                        }}>
                            <Box >
                                <Typography sx={{
                                    fontFamily: 'Butler',
                                    color: '#146D57',
                                    fontWeight: 500,
                                    fontSize: '46px',
                                    lineHeight: 'normal',
                                    mb: '24px',
                                    mt: '50px'
                                }}>
                                    Our Journey to Serenity
                                </Typography>
                                <Typography sx={{
                                    fontFamily: 'Open Sans',
                                    color: "#4B2D1D",
                                    lineHeight: "44px",
                                    fontWeight: 400,
                                }}>
                                    Nestled along the cliffs of Varkala, India, NirvanaNook beckons with whispers of tranquility and echoes of ancient wisdom. Founded by Maya and Ravi, this haven was born from a shared vision—a dream to create a sanctuary where weary souls could find solace and renewal.
                                    <br />
                                    <br />
                                    Our journey began with a leap of faith and a relentless pursuit of our passion. Through trials and triumphs, NirvanaNook emerged—a testament to resilience and the transformative power of love.
                                </Typography>
                            </Box>
                            <Box sx={{
                                position: 'relative',
                                width: 'fit-content',
                            }}>
                                <Box sx={{
                                    position: "absolute",
                                    height: '100%',
                                    width: '100%',
                                    background: '#F0A901',
                                    bottom: '-5px',
                                    zIndex: 1,
                                    left: '-5px'
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
                                        textTransform:"none"
                                    }}>
                                    <Typography sx={{
                                        fontFamily: 'Open Sans',
                                        color: "white",
                                        fontSize: '24px',
                                        fontWeight: 600,
                                    }}>
                                        Get to Know Us Better
                                    </Typography>
                                    <Box sx={{
                                        height: '32px',
                                        width: '32px'
                                    }}>
                                        <img src={rightArrow} style={{
                                            height: '100%',
                                            width: '100%'
                                        }} alt="" />
                                    </Box>
                                </Button>

                            </Box>
                        </Box>
                       
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                height: '195px',
                widht: '119px'
            }}>
                <img src={vectorOne} alt="" />
            </Box>
            <Box sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
            }}>
                <img  src={vectorTwo} alt="" />
            </Box>
        </Box>
    )
}

export default Journey