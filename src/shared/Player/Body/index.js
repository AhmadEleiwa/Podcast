import { Box, Typography } from '@mui/material'
import AudioPlayer from 'react-h5-audio-player';

import 'react-h5-audio-player/lib/styles.css';

import './style.css'
// import normal css instead the modular to override the player styles

/**
 * 
 * @param {{audio:String, title:String}} props 
 * @returns 
 */
const Body = props => {
    return <Box
        width={'70%'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'} >
        <Typography
            color={'#828282'}
            sx={{ zIndex: "1" }} >
            {props.title}
        </Typography>
        <AudioPlayer
            layout='stacked-reverse'
            className={'aud'}
            src={props.audio} />
    </Box>
}

export default Body