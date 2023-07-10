import React, { useRef, useState } from 'react'
import "./Stories.scss"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Showstore from '../showstories/showstories';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import { ShowStoriesContext } from "../../context/showStoriesContext";
import { Showstories } from "../showstories/showstories"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
export const Stories = () => {
    const { showStories, showHide } = useContext(ShowStoriesContext)

    const { currentUser } = useContext(AuthContext);

    const elementRef = useRef(null);
    const [arrowDisable, setArrowDisable] = useState("none");

    const handleHorizantalScroll = (element, speed, distance, step) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            element.scrollLeft += step;
            scrollAmount += Math.abs(step);
            if (scrollAmount >= distance) {
                clearInterval(slideTimer);
            }
            if (element.scrollLeft === 0) {
                setArrowDisable("none");
            } else {
                setArrowDisable("flex");
            }
        }, speed);
    };
    
    
        console.log(arrowDisable)

    const stories = [
        {
            id: 1,
            name: "Nancy J. Hutsell",
            img: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 2,
            name: "James K. Hessler",
            img: "https://images.pexels.com/photos/4147374/pexels-photo-4147374.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            id: 3,
            name: "Yolonda J. Vance",
            img: "https://images.pexels.com/photos/2951989/pexels-photo-2951989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 4,
            name: "Terry P. Baldwin",
            img: "https://images.pexels.com/photos/2523851/pexels-photo-2523851.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
        ,
        {
            id: 4,
            name: "Terry P. Baldwin",
            img: "https://images.pexels.com/photos/2523851/pexels-photo-2523851.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
        
        




    ]
    
    return (
        <div className="wrappi">
            <div className="stories" ref={elementRef}>
                <button className="arrowBack" ><FontAwesomeIcon icon={faCircleChevronLeft} 
                
                onClick={() => {
                    handleHorizantalScroll(elementRef.current, 5, 100, -90);
                  }}
                /></button>
                <div className="arrowForward" ><FontAwesomeIcon icon={faCircleChevronRight} 
                onClick={() => {
                    handleHorizantalScroll(elementRef.current, 5, 100, 90);
                  }}
                /></div>
                <div className="scon">

                    <div className="story">
                        <img src={currentUser.profilePic} alt="" />
                        <span>{currentUser.name}</span>
                        <button>+</button>
                    </div>
                    
                    {stories.map(story => (
                        <div className="storys" key={story.id}>

                            <img src={story.img} alt="" onClick={showHide} />
                            <span>{story.name}</span>
                            <Showstories story={story} key={story.id} />
                        </div>




                    ))}

                </div>

            </div>
        </div>

    )

}

export default Stories;