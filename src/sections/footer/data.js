import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import XHS from "../../assets/xhs.png"

export const links = [
    {id: 1, link: '#', title: 'Home'},
    {id: 2, link: '#about', title: 'About'},
    {id: 3, link: '#portfolio', title: 'Portfolio'},
    {id: 4, link: '#blogs', title: 'Blogs'},
    {id: 5, link: '#contact', title: 'Contact'}
]


export const socials = [
    {id: 1, link: 'https://www.linkedin.com/in/lannywong2000', icon: <AiFillLinkedin style={{height: "1.5em", width: "1.5em"}} />},
    {id: 2, link: 'https://github.com/lannywong2000', icon: <AiFillGithub style={{height: "1.5em", width: "1.5em"}} />},
    {id: 3, link: 'https://www.instagram.com/lannywang2000', icon: <AiOutlineInstagram style={{height: "1.5em", width: "1.5em"}} />},
    {id: 4, link: 'https://bit.ly/3oHhjLr', icon: <img src={XHS} alt="XHS" style={{height: "1.5em", width: "1.5em"}} />}
]