import {AiFillInstagram} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import XHS from "../../assets/xhs.svg"

const data = [
    {id: 1, link: "https://www.linkedin.com/in/lannywong2000", icon: <AiFillLinkedin style={{height: "2em", width: "2em"}} />},
    {id: 2, link: "https://github.com/lannywong2000", icon: <AiOutlineGithub style={{height: "2em", width: "2em"}} />},
    {id: 3, link: 'https://www.instagram.com/lannywang2000', icon: <AiFillInstagram style={{height: "2em", width: "2em"}} />},
    {id: 4, link: 'https://bit.ly/3oHhjLr', icon: <img src={XHS} alt="XHS" style={{height: "2em", width: "2em"}} />}
]

export default data