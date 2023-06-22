import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Sanoladimeji30@",
    database:"social"
    
})