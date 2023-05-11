
import { Box } from '@mui/material'


import './style.css'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

const Footer = props => {
    return <footer >
        <Box
            width={{xs:'100%', lg:'80%'}}
            height={{xs:'1200px', lg:'550px'}}
            display={'flex'}
            flexDirection={{ xs: 'column',  lg: 'row' }}
            justifyContent={'space-between'}
            gap={{xs:'4em'}}
            alignItems={'center'}>
            <LeftSide />
            <RightSide />
        </Box>
    </footer>
}

export default Footer