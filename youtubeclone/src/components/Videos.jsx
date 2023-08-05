import React from 'react'
import {Stack , Box} from '@mui/material'
import { ChannelCard, VideoCard } from './index'

const Videos = ({videos , direction}) => {
  console.log(videos)
  return (
    <Stack flexWrap="wrap"  gap={2} direction={direction || "row"} justifyContent="start" >
      {videos?.map((item,idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
      ))}
    </Stack>
  )
}

export default Videos