import { Box, IconButton } from "@mui/material"
import style from './style.module.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useRef } from "react";

/**
 * Slider is horizontal scroll view controlled by 2 arrows 
 * @param {{
 * children: any,
 * maxWidth: String | Number 
 * }} props 
 * @returns 
 */


const Slider = props => {

    const slider = useRef(null)
    const pos = useRef(0)
    const offset = useRef(null)

    const slideRightHnadler = (e) => {
        let x = slider.current.offsetWidth / offset.current.offsetWidth
        pos.current += parseInt(x)
        if (pos.current >= slider.current.children.length) {
            pos.current = 0
        }
        if (slider.current.children[pos.current])
            slider.current.scrollTo(slider.current.children[pos.current].offsetLeft, 0)
    }
    const slideLeftHnadler = (e) => {
        let x = slider.current.offsetWidth / offset.current.offsetWidth
        pos.current -= parseInt(x);
        if (pos.current <= 0) {
            pos.current = 0
        }
        if (slider.current.children[pos.current])
            slider.current.scrollTo(slider.current.children[pos.current].offsetLeft, 0)
    }

    return <Box
        display={'flex'}
        alignItems={'center'}
        position={'relative'}
        maxWidth={props.maxWidth}
    >
        <Box
            className={style.arrowBox}
            sx={{ background: "linear-gradient(to right, white, rgba(0, 0, 0, 0))" }}
            position={'absolute'}
            zIndex={8}
            left='0'
        >
            <IconButton
                className={style.arrow}
                color='primary'
                onClick={slideLeftHnadler} >
                <PlayArrowIcon color="primary" fontSize="large" className={style.arrowBack} />
            </IconButton>
        </Box>
        {/* Left Arrow  */}


        <Box
            className={style.arrowBox}
            sx={{ background: "linear-gradient(to left, white, rgba(0, 0, 0, 0))" }}
            position={'absolute'}
            right='0'
            top={'0'}
            zIndex={8}
            bgcolor={'red'}
            justifyContent={'flex-end'}
        >
            <IconButton
                className={style.arrow}
                color='primary'
                sx={{ right: '0' }}
                onClick={slideRightHnadler}
            >
                <PlayArrowIcon color="primary" fontSize="large" />
            </IconButton>
        </Box>
        {/* Right Arrow  */}


        <Box
            overflow={'hidden'}
            className={style.slider}
            display={'flex'}
            gap={'1em'}
            margin={'0 auto'}
            ref={slider}
            sx={{ scrollSnapAlign: 'center' }}
        >
            {props.children && props.children.map((item, index) => {
                return <Box ref={offset} key={index} >
                    {item}
        
                </Box>
            })}
        </Box>
        {/* slider items  */}



    </Box>
}

export default Slider