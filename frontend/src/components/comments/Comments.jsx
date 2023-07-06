import "./Comments.scss"
import React from 'react'

export const Comments = () => {
    const comments = [
        {
            id: 1,
            desc: "Nice picture!",
            name: "San Jamal",
            userId: 1,
            profilePic: "https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 2,
            desc: "Can i have your phone number!",
            name: "Idan pablo",
            userId: 2,
            profilePic: "https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]
    return (
        <div className="comments">
            {comments.map(comment => (
                <div className="comment">
                    <img src={comment.profilePic} alt={comment.name} />
                    <div className="info">
                        <div className="bg">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                        </div>
                    </div>
                    <span className="date">1 hour ago</span>

                </div>
            ))}

        </div>
    )
}

