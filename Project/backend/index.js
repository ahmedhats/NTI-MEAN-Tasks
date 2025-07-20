import express, { json } from 'express'
import { dbConnection } from './db/dbConnection.js';
import { userRoutes } from './src/routes/user.routes.js';
import { productRoutes } from './src/routes/product.routes.js';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors())

dbConnection

app.use(userRoutes)
app.use(productRoutes)



app.listen(3000, () => {
    console.log("listing on port 3000")
})

app.get('/', (rq, rs) => rs.send("Halooooo"))