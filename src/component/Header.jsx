import React from 'react'
import logo from "../assets/logo.png";
import { FaAngleDown } from "react-icons/fa"

const Header = () => {
    return (
        <div className='Header'>
            <div className="left-nav">
                <ul>
                    <li><img src={logo} alt="Logo" className="logo" /></li>
                    <li className='abc'>Product <FaAngleDown size="13px" />  </li>
                    <li className='abc'>Download <FaAngleDown size="13px" /> </li>
                    <li className='abc'>Solutions <FaAngleDown size="13px" /> </li>
                    <li className='abc'>Resources <FaAngleDown size="13px" /> </li>
                    <li className='abc'>Pricing </li>
                </ul>
            </div>
            <div className="right-nav">
                <div className="first">Request a demo</div>
                <div className="second">Log in</div>
                <div className="free">Get Notion free</div>
            </div>
        </div>
    )
}

export default Header