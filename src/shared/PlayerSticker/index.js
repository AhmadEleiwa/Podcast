import { Box, Typography } from "@mui/material"

const PlayerSticker = props => {
    return <Box
        display={'flex'}
        alignItems={'flex-start'}
        gap={'1em'}
        width={{ xs: '100%', lg: '80%' }}>
        <img src='assets/Group 35.png' alt='group 35' />
        <Box

            display={'flex'}
            flexDirection={'column'}
            alignItems={'flex-start'}
            gap={'1em'}>
            <Typography fontSize={'40px'}>LISTEN</Typography>
            <Typography color={'primary'} fontSize={'58px'}>EVERYWHERE</Typography>
            <Typography fontSize={'18px'} variant="p">
                Et omnis aut id. Aut eaque est quaerat. Doloribus omnis fugit et sit ducimus expedita. Et iure minima enim est earum voluptas occaecati.
            </Typography>

            <Typography fontSize={'18px'} variant="p">
                Connect with all your devices like Alexa, Google Home or your car.
            </Typography>
            <Box display={'flex'} gap={'1em'}>
                <img src='assets/appStore.png' alt='group 35' />
                <img src='assets/googlePlay.png' alt='group 35' />
            </Box>
        </Box>
    </Box>
}

export default PlayerSticker