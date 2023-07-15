import React, { useState } from 'react'
import "./Update.scss"
import { makeRequest } from '../../axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AuthContext } from '../../context/authContext';
import { useContext } from 'react';

const update = ({ setOpenUpdate, user }) => {
    const { currentUser } = useContext(AuthContext)
    const [cover, setCover] = useState(null)
    const [profile, setProfile] = useState(null)
    const [ texts, setTexts ] = useState({
        name: user.name,
        instagram: user.instagram,
        facebook: user.facebook,
        twitter: user.twitter,
        linkedin: user.linkedin,

    })

    const upload = async (file) => {
        try {
            const formData = new FormData()
            formData.append("file", file)
            const res = await makeRequest.post("/upload", formData)
            return res.data

        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = (e) => {
        setTexts((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
        
       
    }

    const queryClient =  useQueryClient()

    const mutation = useMutation(
      (user) => {
        return makeRequest.put("/users", user);
      },
      {
        onSuccess: () => {
          // Invalidate and refetch
          queryClient.invalidateQueries(['user'])
          queryClient.invalidateQueries(['posts'])
        },
      }
    )
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      let coverUrl;
      let profileUrl;
      
      coverUrl = cover ? await upload(cover) : user.coverPic;
      profileUrl = profile ? await upload(profile) : user.profilePic;


      mutation.mutate({ ...texts, coverPic: coverUrl, profilePic: profileUrl });
      setOpenUpdate(false)
     
  
    }
    console.log(currentUser)
    return (
        <div className='update'>update
            <form>
                <input type="file" onChange={(e) => setCover(e.target.files[0])}/>
                <input type="file" onChange={(e) => setProfile(e.target.files[0])}/>
                <input type="text" name='name' onChange={handleChange} placeholder={user.name} />
                <input type="text" name='instagram' onChange={handleChange} />
                <input type="text" name='facebook' onChange={handleChange} />
                <input type="text" name='twitter' onChange={handleChange} />
                <input type="text" name='linkedin' onChange={handleChange} />
                <button onClick={handleSubmit}>Update</button>
            </form>
            <button onClick={() => { setOpenUpdate(false) }}>X</button>
        </div>
    )
}

export default update