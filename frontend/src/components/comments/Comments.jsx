import { AuthContext } from "../../context/authContext"
import "./Comments.scss"
import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { makeRequest } from '../../axios'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import moment from "moment"
import blankProfile from "../../assets/img/avatar.png"

export const Comments = ({ postId }) => {

    const [desc, setDesc] = useState("")
    const { currentUser } = useContext(AuthContext)

    const { isLoading, error, data } = useQuery(["comments",postId], () =>

        makeRequest.get("/comments?postId=" + postId).then(res => {
            return res.data;

        })
        

    )

    const queryClient = useQueryClient()

    const mutation = useMutation(
        (newComment) => {
            return makeRequest.post("/comments", newComment);
        },
        {
            onSuccess: () => {
                // Invalidate and refetch
                queryClient.invalidateQueries(['comments'])
                queryClient.invalidateQueries(['posts'])
                queryClient.invalidateQueries(['commentd'])
            },
        }
    )

    const handleClick = async (e) => {
        e.preventDefault()


        mutation.mutate({ desc, postId })
        setDesc('')

    }
    const { data: updateUser } = useQuery(["leftUser"], () =>
    makeRequest.get("/users/find/" + currentUser.id).then(res => {
      return res.data;
    })

  )
   
    
    

    console.log(updateUser)

    return (
        <div className="comments">
            <div className="write">
                <img src={updateUser?.profilePic === '' ? (blankProfile) :("/upload/" + updateUser?.profilePic)} alt="" />
                <div htmlFor="com" html className="input">
                    <input type="text" id="com" placeholder="Write a comment" value={desc} onChange={(e) => setDesc(e.target.value)} />
                    <button disabled={desc === ''} onClick={handleClick}><FontAwesomeIcon icon={faPaperPlane} /></button>
                </div>
            </div>
            {isLoading
                ? "Loading"
                : data.map(comment => (
                    <div className="comment"  key={comment.id}>
                        <img src={comment?.profilePic === '' ? (blankProfile) :("/upload/" + comment?.profilePic)} alt={comment.name} />
                        <div className="info">
                            <div className="bg">
                                <span>{comment.name}</span>
                                <p>{comment.desc}</p>
                            </div>
                        </div>
                        <span className="date">{moment(comment.createdAt).fromNow()}</span>

                    </div>
                ))}

        </div>
    )
}

