import React, { useContext, useState } from 'react'
import "./share.scss"
import { AuthContext } from "../../context/authContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Photo from "../../assets/icons/addphoto.png";
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { makeRequest } from '../../axios';
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom';
import blankProfile from "../../assets/img/avatar.png"


export const Share = () => {

  const [file, setFile] = useState(null)
  const [desc, setDesc] = useState('')
  
  const upload = async () => {
    try{
        const formData = new FormData()
        formData.append("file",file)
        const res = await makeRequest.post("/upload",formData)
        return res.data
        
    } catch (err){
      console.log(err)
    }
  }
  
  const { currentUser } = useContext(AuthContext);

  const queryClient =  useQueryClient()

  const mutation = useMutation(
    (newPost) => {
      return makeRequest.post("/posts", newPost);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(['posts'])
      },
    }
  )

  const handleClick = async (e) => {
    e.preventDefault()
    let imgUrl = ""
    
    if(file) imgUrl = await upload();

    mutation.mutate({ desc, img: imgUrl })
    setDesc('')
    setFile(null)

  }
  
  const handleClose = () => {
    return setFile('')
  }
  
  const { isLoading, error, data } = useQuery(["shareUser"], () =>
    makeRequest.get("/users/find/" + currentUser.id).then(res => {
      return res.data;
    })

  )
  console.log(file?.type === "un")
  return (
    <div className="share">
      <div className="container">
        <div className="top">
        <Link  to={`/profile/${data?.id}`}>
          <img
            src={data?.profilePic === '' ? (blankProfile) :("/upload/" + data?.profilePic)}
            alt=""
          />
          </Link>
          <div className="bg"></div>
          <input type="text" placeholder={`What's on your mind ${currentUser.name}?`} 
          onChange={(e) => setDesc(e.target.value)} value={desc}
          
          />
          
          
        </div>
        <div className="postImg">
            {file && <img className='fileImg' alt='' src={URL.createObjectURL(file)}/>}
            
            {file && <span onClick={handleClose} ><FontAwesomeIcon icon={faXmark} /></span>}
          </div>
          
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
            <label htmlFor="file">
              <div className="item">
                <img src={Photo} alt="" />
                <span>Add Image</span>
              </div>
            </label>


          </div>
          <div className="right">
            <button onClick={handleClick} disabled={ desc === '' ? true : false }><FontAwesomeIcon icon={faPaperPlane} />Share</button>
          </div>
        </div>
      </div>
    </div>
  )
}

