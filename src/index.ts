const express = require("express")
const app = express()
import { PrismaClient } from "@prisma/client"

const prismaClient = new PrismaClient()



app.post("/", async (req, res) => {
  await prismaClient.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString()
    }
  })
  res.json({
    "message": "post end point" 
  })
})


app.get("/", async (req, res) => {
  const data = await prismaClient.user.findMany()
  res.json({
    "message": "get end point",
    data:data
  })
})

app.listen(3000, ()=>{console.log("Server started at 3000")})
