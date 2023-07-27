import React, { useState } from 'react'
import "./Update.scss"
import { makeRequest } from '../../axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AuthContext } from '../../context/authContext';
import { useContext } from 'react';


const update = ({ setOpenUpdate, user, openUpdate }) => {
    const { currentUser } = useContext(AuthContext)
    const [cover, setCover] = useState(null)
    const [profile, setProfile] = useState(null)
    const [texts, setTexts] = useState({
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

    const queryClient = useQueryClient()

    const mutation = useMutation(
        (user) => {
            return makeRequest.put("/users", user);
        },
        {
            onSuccess: () => {
                // Invalidate and refetch
                queryClient.invalidateQueries(['user'])
                queryClient.invalidateQueries(['postz'])
                queryClient.invalidateQueries(['leftUser'])
                queryClient.invalidateQueries(['NavUser'])
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
    console.log(openUpdate)

    const [modal, setModal] = useState(true);

    const toggleModal = () => {
        setOpenUpdate(!openUpdate)
        setModal(!modal)
    };



    return (
        <div className='update'>update
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
                <form>
                    <label htmlFor="cover">Cover Picture </label>
                    <input type="file" name='cover' onChange={(e) => setCover(e.target.files[0])} /><br /><br />
                    <label htmlFor="profilePic">Profile Picture </label>
                    <input type="file" name='profilePic' onChange={(e) => setProfile(e.target.files[0])} /><br /><br />
                    <label htmlFor="name">Name</label><br />
                    <input type="text" name='name' onChange={handleChange} placeholder={user.name} /><br /><br />
                    <label htmlFor="instagram">Instagram</label><br />
                    <input type="text" name='instagram' onChange={handleChange} /><br /><br />
                    <label htmlFor="facebook">Facebook</label><br />
                    <input type="text" name='facebook' onChange={handleChange} /><br /><br />
                    <label htmlFor="twitter">Twitter</label><br />
                    <input type="text" name='twitter' onChange={handleChange} /><br /><br />
                    <label htmlFor="linkedin">Linkedin</label><br />
                    <input type="text" name='linkedin' onChange={handleChange} /><br /><br />

                </form>
                <div className="btn">
                    <button onClick={toggleModal}>Cancel</button>
                    <button onClick={handleSubmit}>Update</button>
                </div>

            </div>
        </div>
    )
}

export default update