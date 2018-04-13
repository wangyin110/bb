const express = require('express');
const bodyparser = require('body-parser');
const mysql = require('mysql');
const app = express();

app.use(bodyparser.urlencoded({}))
app.listen(1000,()=>{
	console.log('ok')
})


const pool = mysql.createPool({
	host:'localhost',
	user:'root',
	password:'1234',
	database:'kecheng',
	port:3306
})

app.use('/sel',(req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','*');
	pool.getConnection((err,con)=>{
		if(err) throw err;
		con.query(`SELECT * FROM ke`,(err,rows)=>{
			res.send(rows);
			con.release()
		})
	})
})

app.use('/upd',(req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','*');
	pool.getConnection((err,con)=>{
		if(err) throw err;
		con.query(`UPDATE `,(err,rows)=>{
			res.send(rows);
			con.release()
		})
	})
})
