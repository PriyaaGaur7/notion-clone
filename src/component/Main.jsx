import React, { useState } from 'react';
import { FaArrowRight, FaEye, FaPalette } from 'react-icons/fa';
import Slider from 'react-slick';
import image from '../assets/home-hero.webp';
import img1 from '../assets/ask-ai.webp';
import img2 from '../assets/engineering-wiki.webp';
import img3 from '../assets/projects.webp';
import img4 from '../assets/stand-up.webp';
import figma from "../assets/figma.png";
import pixar from "../assets/pixar.png";
import doordash from "../assets/doordash.png";
import nike from "../assets/nike.png";
import amazon from "../assets/amazon.png";
import pinterest from "../assets/pinterest.png";
import general_logo from "../assets/General_Electric_logo.svg__1_.png";
import uber from "../assets/uber.png";
import plaid from "../assets/plaid.png";
import toyota from "../assets/toyota.png";
import snowflake from "../assets/snowflake.png";
import headspace from "../assets/headspace.png";
import angel_list from "../assets/angel-list.png";
import robinhood from "../assets/robinhood.png";
import girl from "../assets/girl.png";
import tools from "../assets/tools.png";
import line from "../assets/line.png";
import metalab from "../assets/metalab.png";
import custom from "../assets/custom.png";
import project_data from "../assets/project-data.png";
import avatars from "../assets/avatars.png";
import community from "../assets/community.png";
import welcome from "../assets/welcome.png";    


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Main.css';

const Main = () => {
    const carouselImages = [img1, img2, img3, img4];

    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        beforeChange: (current, next) => {
            setCurrentSlide(next);
        },
    };

    const cards = [
        { number: 1, title: 'AI', description: 'Ask literally anything. Notion will answer' },
        { number: 2, title: 'Wikis', description: 'Centralize your knowledge. No more hunting for answers.' },
        { number: 3, title: 'Projects', description: 'Manage complex projects without the chaos' },
        { number: 4, title: 'Docs', description: 'Simple, powerful, beautiful. Next-gen notes & docs' },
    ];

    return (
        <div className="MainDiv">
            <div className="section-1">
                <h1>Write, plan, share.</h1>
                <h1>With AI at your side.</h1>
                <h3>Notion is the connected workspace where better, faster work happens.</h3>
                <button>
                    Get Notion free <FaArrowRight />
                </button>
                <img src={image} alt="Logo" className="first-pic" />
            </div>
            <div className="section-2">
                <div className="card">
                    {cards.map((card) => (
                        <div
                            key={card.number}
                            className={`card${card.number} ${currentSlide === card.number - 1 ? 'hovered' : ''}`}
                        >
                            <span>{card.title}</span>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
                <Slider {...settings}>
                    {carouselImages.map((img, index) => (
                        <div key={index}
                        >
                            <img src={img} alt={`Carousel Image ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="section-3">
                <div className="text">
                    <h2>Millions run on Notion every day</h2>
                    <p>Powering the world’s best teams, from next-generation startups to established enterprises.</p>
                    <a href="">Read customer storied <FaArrowRight /> </a>
                </div>
                <div className="brand" >
                    <div className="figma">
                        <img height={30} width={100} loading='lazy' src={figma} alt="figma" />
                    </div>
                    <div className="pixar">
                        <img
                            height={30} width={90} loading='lazy' src={pixar} alt="pixar" />
                    </div>
                    <div className="doordash">
                        <img height={30} width={100} loading='lazy' src={doordash} alt="pixar" />
                    </div>
                    <div className="nike">
                        <img height={30} width={100} loading='lazy' src={nike} alt="nike" />
                    </div>
                    <div className="amazon">
                        <img height={30} width={100} loading='lazy' src={amazon} alt="amazon" />
                    </div>
                    <div className="pinterest">
                        <img height={30} width={100} loading='lazy' src={pinterest} alt="pinterest" />
                    </div>
                    <div className="g_electric">
                        <img height={40} width={90} loading='lazy' src={general_logo} alt="g_electric" />
                    </div>
                    <div className="uber">
                        <img height={30} width={100} loading='lazy' src={uber} alt="uber" />
                    </div>
                    <div className="plaid">
                        <img height={30} width={100} loading='lazy' src={plaid} alt="plaid" />
                    </div>
                    <div className="toyota">
                        <img height={30} width={100} loading='lazy' src={toyota} alt="toyota" />
                    </div>
                    <div className="snowflake">
                        <img height={30} width={100} loading='lazy' src={snowflake} alt="snowflake" />
                    </div>
                    <div className="headspace">
                        <img height={30} width={100} loading='lazy' src={headspace} alt="headspace" />
                    </div>
                    <div className="angel_list">
                        <img height={30} width={100} loading='lazy' src={angel_list} alt="angel_list" />
                    </div>
                    <div className="robinhood">
                        <img height={30} width={100} loading='lazy' src={robinhood} alt="robinhood" />
                    </div>
                </div>
            </div>
            <div className="section-4">
                <div className="div1">
                    <div className="text2">
                        <h1>Consolidate tools.</h1>
                        <h1>Cut costs.</h1>
                    </div>
                    <div className="girl">
                        <img height="177" width="200" loading='lazy' src={girl} alt="girl" />
                    </div>
                </div>
                <div className="div2">
                    <img height="78" width="568" src={tools} alt="tools" />
                    <div className="line">
                        <img className='line' height="50" width="613" loading='lazy' src={line} alt="line" />
                    </div>
                </div>
            </div>
            <div className="section-5">
                <span>“We got rid of nearly a dozen different tools because of what Notion does for us."</span>
                <div className="div3">
                    <img height="35" width="127" loading='lazy' style={{ color: "transparent" }} src={metalab} alt="metalab" />
                    <div className="inner">
                        <div className="alpha">
                            Justin Watt
                        </div>
                        <div className="beta">
                            Director of Ops & Marketing, MetaLab
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-6">

            </div>
            <div className="section-7">
                <div className="div5">
                    <div className="div5_1">
                        <div className="span1">
                            <FaEye color='skyblue' />
                        </div>
                        <div className="span2">
                            Customize the info you track
                        </div>
                        <div className="span3">
                            Create your own labels, tags, owners, and more, so everyone has context and everything stays organized.
                        </div>
                    </div>
                    <div className="div5_2">
                        <img src={custom} alt="custom-info" />
                    </div>
                </div>
                <div className="div6">
                    <div className="div6_1">
                        <div className="span4">
                            <FaPalette size="20px" color='skyblue' />
                        </div>
                        <div className="span5">
                            Build any page, communicate any idea
                        </div>
                        <div className="span6">
                            Everything is drag and drop in Notion — images, toggles, to-do’s, even embedded databases.
                        </div>
                    </div>
                    <div className="div6_2">
                        <img src={project_data} alt="project-data" />
                    </div>
                </div>
            </div>
            <div className="section-8">
                <h2>Join a global movement.</h2>
                <h2>Unleash your creativity.</h2>
                <p>Our vibrant community produces content, teaches courses, and leads events all over the world.</p>
                <a href="">Learn more <FaArrowRight /> </a>
                <div className="avtars">
                    <img src={avatars} alt="avatars" />
                </div>
            </div>
            <div className="section-9">
                <div className="div9_1">
                    <div className="div9_1_1">
                        <span className='span9_1'>1M+</span>
                        <span className='span9_2'>community members</span>
                    </div>
                    <div className="div9_1_2">
                        <span className='span9_3'>150+</span>
                        <span className='span9_4'>community groups</span>
                    </div>
                    <div className="div9_1_3">
                        <span className='span9_5'>50+</span>
                        <span className='span9_6'>country represented</span>
                    </div>
                </div>
                <div className="div9_2">
                    <div className="div9_2_1">
                        <span className='span9_7'>
                            An always-on support network
                        </span>
                        <span className='span9_8'>
                            Swap setups and share tips in over 149 online communities.
                        </span>
                        <div className="div9_2_1_1">
                            <img src={community} alt="community" />
                        </div>
                    </div>
                    <div className="div9_2_2">
                        <span className='span9_9'>
                            Choose your language
                        </span>
                        <span className='span9_10'>
                            Notion currently supports English, Korean, Japanese, French, German, Spanish, and Portuguese. With more to come!
                        </span>
                        <div className="div9_2_2_1">
                            <img height="300px"width="400px" src={welcome} alt="welcome" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
