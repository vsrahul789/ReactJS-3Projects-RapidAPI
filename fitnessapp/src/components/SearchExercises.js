import { useState, useEffect } from 'react';
import { Box, Typography, TextField, Stack, Button } from '@mui/material'
import { exerciseOptions , fetchData } from '../utils/fetchData';
import HorizontalScrollBar from '../components/HorizontalScrollBar'

const SearchExercises = ({setExercises , bodyPart , setBodyPart}) => {

  const [search , setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async() =>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

      setBodyParts(['all', ...bodyPartsData])
    }
    fetchExercisesData()

  }, [])

  const handleSearch = async () => {
    if(search){

      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/', exerciseOptions);

      const searchedExercises =exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      )
      setSearch('')
      setExercises(searchedExercises)
    }
  }


  return (
    <Stack alignItems='center' justifyContent='center' mt='44px' p='20px'>
      <Typography fontWeight='700' mb='20px' textAlign='center' sx={{fontSize: {xs:'30px' , lg:'44px'}}}>
        Awsome Exercises you<br />
        Should Know
      </Typography>

      <Box position='relative' mb='72px'>
        <TextField value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} height='76px' type='text' id="standard-basic" label="Search Exercises" variant="standard" 
        sx={{input:{fontWeight:'700'} , width:{lg:'800px' , xs:'350px' , backgroundColor:'#FFF'}}}/>

        <Button className='search-btn' sx={{bgcolor:'#ff2625' , color:'#fff' , textTransform:'none' , width:{lg:'175px' , xs:'80px'} , fontSize:{lg:'20px' , xs:'14px'} , position:'absolute' , right:'0'}} onClick={handleSearch}>Search</Button>
      </Box>

      <Box sx={{position:'relative' , width:'100%' , p:'20px'}}>
        <HorizontalScrollBar data={bodyParts} bodyPart = {bodyPart} setBodyPart = {setBodyPart}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises