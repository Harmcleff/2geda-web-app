import "./landingpage.scss";
import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Mypic from '../../assets/dev.jpg';
import Linkedin from '../../assets/linkedin.svg';
import Github from '../../assets/github-logo.png';
import Twitter from '../../assets/twitter.png';

const landingpage = () => {
    return (
        <div className="land">
            <div className="navBar">
                <div className="logo">
                    <Link to="/">
                        <span>2geda</span>
                    </Link>
                </div>
                <div className="detail">
                    <Link to="/login">
                        <span>Log in</span>
                    </Link>
                    <div className="btn">
                        <Link to="/register">
                            <button>Register
                                <div className="icon">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </div></button>
                        </Link>

                    </div>

                </div>

            </div>
            <div className="heroBar">
                <div className="bg"></div>
                <div className="inn">

                    <div className="images">
                        <div className="txt">
                            <h1 ><span className="color">Bringing the World </span><br />Closer 2geda</h1>
                            <p>Keeping up with friends is faster and easier than ever. Share updates <br />and photos, engage with friends and Pages, and stay connected <br />to communities important to you.</p>
                            <div className="btn">
                                <Link to="/register">
                                    <button>Register
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </div>
                                    </button>
                                </Link>
                                <Link to="/login">
                                    <div className="btn2">
                                        <button>Login
                                            <div className="icon2">
                                                <FontAwesomeIcon icon={faAngleRight} />
                                            </div>
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="item">
                            <img src="https://images.pexels.com/photos/9432959/pexels-photo-9432959.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />



                        </div>


                    </div>
                </div>

            </div>

            <div className="family">
                <div className="content">
                    <div className="wrap">
                        <img src="https://static01.nyt.com/images/2020/05/06/smarter-living/06sl-coronavirus-stayintouch/06sl-coronavirus-stayintouch-mediumSquareAt3X.jpg" alt="" />

                    </div>
                    <div className="inners">
                        <span>Connect with Family and Friends Today</span>
                        <Link to="/register">
                            <button>Connect</button>
                        </Link>
                    </div>
                </div>

            </div>
            <div className="section">
                <div className="container">
                    <div className="cover">
                        <div className="item"> </div>
                        <h2>Secure </h2>
                        <p>Our platform enforce secure browsing protocols, such as HTTPS, to encrypt data transmission between users' devices and the platform's servers. </p>


                    </div>
                    <div className="cover">
                        <div className="item1"> </div>
                        <h2>Easy-to-use</h2>
                        <p>Everyone loves an easy-to-use platform, that is why our top priority is providing you with seamless services you can enjoy without breaking a sweat.</p>


                    </div>
                    <div className="cover">
                        <div className="item2"> </div>
                        <h2>Real-time updates</h2>
                        <p>Our  platforms prioritize delivering real-time updates and content to users</p>


                    </div>


                </div>

            </div>
            <div className="features">
                <span>Features</span>
                <div className="darkmode">
                    <span>Dark Mode</span>

                </div>

                <div className="newsFeed">
                    <span>News Feed</span>

                </div>

                <div className="storiez">
                    <span>Stories</span>

                </div>

            </div>

            <div className="about">
                <span>About Dev.</span>


                <div className="inspire">
                    <div className="profil">
                        <img src={Mypic} alt="" />
                        <span>Sanyaolu Hammed</span>
                        <div className="social">
                            <div className="item">
                                <Link to="https://www.linkedin.com/in/sanyaolu-hammed-b1996a105/">
                                    <img src={Linkedin} alt="" />
                                </Link>
                            </div>
                            <div className="item">
                                <Link to="https://github.com/Harmcleff">
                                    <img src={Github} alt="" />
                                </Link>
                            </div>
                            <div className="item">
                                <Link to="https://twitter.com/harmcleff">
                                    <img src={Twitter} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="contain">
                        <p>I'm currently studying software engineering at ALX, I have always been curious about how data are been processed in a social network app especially Facebook, so when I was given the opportunity to pick my project, that was what came to my mind first.<br />
                            Facebook is a popular social media platform founded by Mark Zuckerberg. It allows users to create profiles, connect with friends and family, share photos and videos, and communicate through messages and comments. Facebook has grown into one of the largest social networking platforms in the world, with billions of active users.

                        </p>
                        <div className="repo">
                            <br />
                            <Link to="https://github.com/Harmcleff/Social-Network-app">
                                <button>View Project repository</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className="footer">
                <div className="foot">
                    <Link to="/">
                        <span>2geda</span>
                    </Link>
                    <div className="txxt">
                        <Link to="https://github.com/Harmcleff/Social-Network-app">
                            <p>Portfolio Project for Holberton School 2023</p>
                        </Link>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default landingpage