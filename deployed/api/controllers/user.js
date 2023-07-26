import { db } from "../connect.js"
import jwt from "jsonwebtoken";


export const getUser = (req, res) => {
    const userId = req.params.userId;
    const q = "SELECT id,email,profilePic,coverPic,name,number,instagram,facebook,twitter,linkedin,username,email FROM users WHERE id = (?)"

    db.query(q, [userId], (err, data) => {
        if (err) return res.status(500).json(err)
        return res.json(data[0])

    })


}


export const updateUser = (req, res) => {
    const token = req.cookies.accesstoken;
    if (!token) return res.status(401).json("Not Authenticated");

    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid")

        const q = "UPDATE users SET `name` = ?, `profilePic` = ?, `coverPic` = ?, `instagram` = ?, `facebook` = ?, `twitter` = ?, `linkedin` = ? WHERE id = ?"

        db.query(q, [
            req.body.name,
            req.body.profilePic,
            req.body.coverPic,
            req.body.instagram,
            req.body.facebook,
            req.body.twitter,
            req.body.linkedin,
            userInfo.id

        ], (err, data) => {
            if (err) return res.status(500).json(err)
            if (data.affectedRows > 0) return res.json("updated")
            return res.status(403).json("you can update only your post")

        })


    })



}

export const searchUser = (req, res) => {
    const searchQuerry = req.query.search;
    const q = `SELECT id,email,profilePic,coverPic,name,number,instagram,facebook,twitter,linkedin,username,email FROM users WHERE name LIKE '%${searchQuerry}%'`

    db.query(q, [searchQuerry], (err, data) => {
        if (err) return res.status(500).json(err)
        return res.json(data)

    })


}
