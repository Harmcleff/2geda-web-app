import React, { useContext, useState } from 'react'
import "./share.scss"
import { AuthContext } from "../../context/authContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Photo from "../../assets/icons/addphoto.png";
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { makeRequest } from '../../axios';


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

  }
  return (
    <div className="share">
      <div className="container">
        <div className="top">
       
          <img
            src={currentUser.profilePic}
            alt=""
          />
          <div className="bg"></div>
          <input type="text" placeholder={`What's on your mind ${currentUser.name}?`} onChange={(e) => setDesc(e.target.value)} />
          
          
        </div>
        <div className="postImg">
            {file && <img className='fileImg' alt='' src={URL.createObjectURL(file)}/>}
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
            <button onClick={handleClick} ><FontAwesomeIcon icon={faPaperPlane} />Share</button>
          </div>
        </div>
      </div>
    </div>
  )
}

