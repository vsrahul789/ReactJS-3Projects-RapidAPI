import React from 'react'
import { Link } from 'react-router-dom';
import { Typography, CardMedia, Card, CardContent } from '@mui/material';
import { CheckCircle } from '@mui/icons-material'
import { demoChannelTitle, demoProfilePicture, demoVideoUrl, demoChannelUrl, demoVideoTitle } from '../utils/constants'

const VideoCard = ({video: {id:{videoId} , snippet}}) => {
  return (
    <Card sx={{width:{xs:'100%',sm:'358px' , md:'300px'} , boxShadow:'none' , borderRadius:0}}>
      <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{width:{xs:'100%' , sm:'358px'} , height:180}}    
        />  
      </Link>
      <CardContent sx={{backgroundColor:'#1e1e1e' , height:'106px'}}>
        <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
          <Typography varient="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title?.slice(0,40) || 
             demoVideoUrl.slice(0,40)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`: demoVideoUrl}>
          <Typography varient="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle || demoChannelUrl}
            <CheckCircle sx={{fontSize:12 , color:'gray' , ml:'5px'}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard