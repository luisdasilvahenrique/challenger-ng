import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
   res.send('Olá')
})


app.listen(3333);