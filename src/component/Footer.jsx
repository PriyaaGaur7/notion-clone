import React from 'react'
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaYoutube, FaChevronDown, FaGlobe } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="div_footer">
                <div className="left_footer">
                    <span>
                        <img height='40' width='93' src={logo} alt="logo" />
                    </span>
                    <div>
                        <span><FaInstagram /> </span>
                        <span><FaTwitter /></span>
                        <span><FaLinkedin /></span>
                        <span><FaFacebook /></span>
                        <span><FaYoutube /></span>
                    </div>
                    <span className='globe'>
                        <FaGlobe />English <FaChevronDown />
                    </span>
                </div>
                <div className="right_footer">
                    <div className="div_footer_1">
                        <div className="div_1_1">
                            <span className='heading'>Product</span>
                            <span>Projects</span>
                            <span>Wikis</span>
                            <span>Docs</span>
                            <span>Notion AI</span>
                            <span>What's new</span>
                        </div>
                        <div className="div_1_2">
                            <span className='heading' >Solutions</span>
                            <span>Enterprise</span>
                            <span>Small business</span>
                            <span>Personal use</span>
                            <span>Remote work</span>
                            <span>Startups</span>
                            <span>Education</span>
                            <span>Nonprofits</span>
                            <span>Engineering</span>
                            <span>Product</span>
                            <span>Design</span>
                            <span>Managers</span>
                        </div>
                    </div>
                    <div className="div_footer_2">
                        <div className="div_2_1">
                            <span className='heading' >Download</span>
                            <span>iOS & Android</span>
                            <span>Mac & Windows</span>
                            <span>Web Clipper</span>
                        </div>
                        <div className="div_2_2">
                            <span className='heading' >Build</span>
                            <span>Integrations</span>
                            <span>Templates</span>
                            <span>API docs</span>
                            <span>Guides & tutorials</span>
                            <span>Hire a consultant</span>
                            <span>Become an affiliate</span>
                        </div>
                        <div className="div_2_3">
                            <span className='heading' >Learn</span>
                            <span>Customer stories</span>
                            <span>Help center</span>
                            <span>Webinars</span>
                            <span>Blog</span>
                            <span>Community</span>
                        </div>
                    </div>
                    <div className="div_footer_3">
                        <div className="div_1_1">
                            <span className='heading' >Get started</span>
                            <span>Switch from Confluence</span>
                            <span>Switch from Asana</span>
                            <span>Switch from Evernote</span>
                            <span>Compare vs Monday</span>
                            <span>Compare vs Clickup</span>
                            <span>Compare vs Jira</span>
                        </div>
                        <div className="div_2_2">
                            <span className='heading' >Resources</span>
                            <span>Pricing</span>
                            <span>About us</span>
                            <span>Careers</span>
                            <span>Media kit</span>
                            <span>Email us</span>
                            <span>Security</span>
                            <span>Cookie settings</span>
                            <span>Terms & privacy</span>
                            <span>California Privacy Notice</span>
                            <span>Status</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="last_div">
                <span className='span1'>
                    Do Not Sell or Share My Info
                </span>
                <span className='span2'>
                    © 2023 Notion Labs, Inc.
                </span>
            </div>
        </div>
    )
}

export default Footer