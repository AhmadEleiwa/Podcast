import { Box, Typography } from "@mui/material"
const LeftSide = () => {
    return <Box
        display={'flex'}
        height={'80%'}
        flexDirection={'column'}
        textAlign={{xs:'center', lg:'left'}}
        justifyContent={'space-between'}
        alignItems={{xs:"center", lg:'flex-start'}}>

        <img src='assets/Logo.png' alt='logo' />
        {/* Logo image */}


        <Typography
            fontSize={'18px'}
            variant='p'
            color={'white '}>
            Corporis ut aliquid qui molestiae. Sed laborum sunt recusandae animi dolore voluptates.
        </Typography>
        {/* Footer Title */}



        <Typography
            fontSize={'18px'}
            variant='p'
            color={'white '}>
            Download for:
        </Typography>        
        
        <Box display={'flex'} gap={'1em'}>
            <img src='assets/appStore.png' alt='app store' />
            <img src='assets/googlePlay.png' alt='google play' />

        </Box>
        {/* app store & google play stickers */}

        <Typography
            fontSize={'18px'}
            variant='p'
            color={'white '}>
            ©2020 All rights reserved
        </Typography>
        {/* copyright */}

    </Box>
}
export default LeftSide