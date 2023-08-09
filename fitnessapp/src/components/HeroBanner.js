import { Box, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} p="20px" position='relative' >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>

      <Typography fontWeight='700' sx={{ fontSize: { lg: '44px', xs: '36px' } }} mb='23px'>
        Sweat, Smile <br /> And Repeat
      </Typography>

      <Typography fontSize='22px' lineHeight='35px' mb={4}>
        Check Out Most Effective Exercises
      </Typography>

      <Button variant="contained" color="error" href='#exercises' sx={{ backgroundColor: '#FF2625', padding: '10px' }}>Explore Exercises</Button>

      <Typography fontWeight={600} fontSize='200px' color='#FF2625' sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none' } }}>
        Exercise
      </Typography>

      <img src={HeroBannerImage} alt='Banner' className='hero-banner-img' />
    </Box>

  )
}

export default HeroBanner