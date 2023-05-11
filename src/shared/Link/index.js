import { Link as RouteLink } from 'react-router-dom'
import style from './style.module.css'
import { CSSProperties } from 'react'

/**
 * Link is custom link of react-router-dom
 * @param {{
 * to: String
 * style: CSSProperties
 * }} props 
 * @returns Link
 */


const Link = props => {

    return <RouteLink 
    style={props.style} 
    className={props.active ? `${style.link} ${style.active}` : style.link} 
    to={props.to}>{props.children}</RouteLink>
}

export default Link