import express, { json } from 'express'
import { dbConnection } from './db/dbConnection.js';
import { userRoutes } from './src/routes/user.routes.js';

const app = express();

app.use(express.json());

dbConnection

app.use(userRoutes)


app.listen(3000, () => {
    console.log("listing on port 3000")
})

app.get('/', (rq, rs) => rs.send("Halooooo"))