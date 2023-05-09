import { Link as RouteLink } from 'react-router-dom'
import style from './style.module.css'


const Link = props => {

    return <RouteLink 
    style={props.style} 
    className={props.active ? `${style.link} ${style.active}` : style.link} 
    to={props.to}>{props.children}</RouteLink>
}

export default Link