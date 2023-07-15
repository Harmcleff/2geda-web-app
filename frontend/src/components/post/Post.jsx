import React, { useContext, useState } from 'react'
import "./Post.scss"
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { Comments } from "../comments/Comments"
import moment from "moment"
import { makeRequest } from '../../axios'
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { AuthContext } from '../../context/authContext';
import { Link } from 'react-router-dom';


const Post = ({ post }) => {
    const [commentOpen, setCommentOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { currentUser } = useContext(AuthContext)

    const { isLoading, error, data } = useQuery(["likes", post.id], () =>
        makeRequest.get("/likes?postId=" + post.id).then(res => {
            return res.data;
        })

    );

    const queryClient = useQueryClient()

    const mutation = useMutation(
        (liked) => {
            if (liked) return makeRequest.delete("/likes?postId=" + post.id);
            return makeRequest.post("/likes", { postId: post.id });
        },
        {
            onSuccess: () => {
                // Invalidate and refetch
                queryClient.invalidateQueries(['likes'])
            },
        }
    )

    const handleLike = () => {
        mutation.mutate(data.includes(currentUser.id))
    }
    
    const deleteMutation = useMutation(
        (postId) => {
           
            return makeRequest.delete("/posts/" + post.id );
        },
        {
            onSuccess: () => {
                // Invalidate and refetch
                queryClient.invalidateQueries(['posts'])
            },
        }
    )
    
    const handleDelete = () =>{
        deleteMutation.mutate(post.id)
    }
    console.log(post)
    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={"/upload/" + post.profilePic} alt="" />
                        <div className="details">
                            <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none", color: 'inherit' }}>
                                <span className='name'>{post.name}</span>

                            </Link>
                            <span className='date'>{moment(post.createdAt).fromNow()}</span>
                        </div>
                    </div>
                    <MoreHorizRoundedIcon onClick={()=>setMenuOpen(!menuOpen)} />
                    {menuOpen && post.userId === currentUser.id && <button onClick={handleDelete}>Delete</button>}
                   
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={"./upload/" + post.img} alt="" />
                </div>
                <div className="info">
                    <div className="item">
                        {data?.includes(currentUser.id) ? <FavoriteRoundedIcon style={{ color: "red" }} onClick={handleLike} /> : <FavoriteBorderRoundedIcon onClick={handleLike} />}
                        {data?.length} Likes
                    </div>
                    <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                        <FontAwesomeIcon icon={faComment} />
                        1.2k Comments
                    </div>
                    <div className="item">
                        <FontAwesomeIcon icon={faShare} />
                        Share
                    </div>
                </div>
                {commentOpen && <Comments postId={post.id} />}
            </div>
        </div>
    )
}

export default Post;
