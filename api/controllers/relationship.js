import { db } from "../connect.js"
import jwt from "jsonwebtoken";

export const getRelationships = (req, res) => {


    const q = `SELECT followerUserId FROM relationships WHERE followedUserId = ?`;

    db.query(q, [req.query.followedUserId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data.map(relationship => relationship.followerUserId))
    });


}


export const addRelationship = (req, res) => {
    const token = req.cookies.accesstoken;
    if (!token) return res.status(401).json("Not Logged in");

    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid")

        const q = "INSERT INTO relationships (`followerUserId`, `followedUserId`, `followingUserId`) VALUES (?)";

        const values = [
            userInfo.id,
            req.body.userId,
            req.body.userId,
        ]

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("Following")
        });


    })


}

export const deleteRelationship = (req, res) => {
    const token = req.cookies.accesstoken;
    if (!token) return res.status(401).json("Not Logged in");

    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid")

        const q = "DELETE FROM relationships WHERE `followerUserId` = ? AND `followedUserId` = ? AND `followingUserId` = ?" ;



        db.query(q, [userInfo.id, req.query.userId, req.query.userId], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("Unfollow")
        });


    })


}

export const countRelationships = (req, res) => {
    const userId = req.params.userId;
    const token = req.cookies.accesstoken;
    if (!token) return res.status(401).json("Not Logged in");

    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid")

        const q = `SELECT followingUserId FROM social.relationships WHERE followingUserId = ?`


        db.query(q, userId, (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json(data)

        });


    })


}