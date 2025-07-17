import express, { json } from 'express'
import { dbConnection } from './db/dbConnection.js';
import { userModel } from './db/models/user.model.js';

const app = express();
app.use(express.json());


dbConnection



app.get('/users', async (req, res) => {
    const users = await userModel.find();
    res.json({ message: "Done", users })
})

app.post('/users', async (req, res) => {
    console.log(req.body)
    const userToAdd = await userModel.insertMany(req.body)
    res.status(201).json({ message: "Added Successfully", userToAdd })
})

app.put('/users/:id', async (req, res) => {
    const userToUpdate = await userModel.findByIdAndUpdate(req.params.id, { ...req.body },{new:true})
    res.json({ message: "Updated" , userToUpdate})
})

app.delete('/users/:id',async(req,res)=>{
    const userToDelete = await userModel.findByIdAndDelete(req.params.id)
    res.json({message:"deleted",userToDelete})
})

app.listen(3000, () => {
    console.log("listing on port 3000")
})

app.get('/', (rq, rs) => rs.send("Halooooo"))