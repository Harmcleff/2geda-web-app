import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:"2geda_db",
    password:"2geda_db_pw",
    database:"social"
    
})
