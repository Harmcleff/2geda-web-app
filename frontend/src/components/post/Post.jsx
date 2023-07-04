import React from 'react'
import "./Post.scss"
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const liked = false;
    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilePic} alt="" />
                        <div className="details">
                            <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none", color: 'inherit' }}>
                                <span className='name'>{post.name}</span>
                                
                            </Link>
                            <span className='date'>1 min ago</span>
                        </div>
                    </div>
                    <MoreHorizRoundedIcon />
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post.img} alt="" />
                </div>
                <div className="info">
                    <div className="item">
                    {liked ? <FavoriteRoundedIcon/>:<FavoriteBorderRoundedIcon/> }
                    1.2k Likes
                    </div>
                    <div className="item">
                    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                    1.2k Comments
                    </div>
                    <div className="item">
                    
                    Share 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;
