const express = require('express');
const db = require('./config/database');
const dotenv = require('dotenv');
const app = express();
const PORT = 3001;

dotenv.config();
app.use(express.json())

app.get("/users", async (req, res)=>{
  const { rows } = await db.query('SELECT * FROM public.users');
  return res.status(200).json(rows);
})


app.post("/users", async (req, res) => {
  const { username, password, email } = req.body;
  await db.query(`INSERT INTO public.users(username, password, email) VALUES ('${username}', '${password}', '${email}')`);
  return res.status(200).json(user);
})

app.put("/users", (req, res)=>{
  const users = req.body;
  console.log(users)
  return res.send(status).send({users})
  
})

app.delete("/users/:id", (req, res)=>{
  console.log(req.params.id)
  res.send(200)
})



app.listen(PORT, ()=>{
 console.log("Parabéns, voce está logado com sucesso na porta" +  PORT)
  
  });