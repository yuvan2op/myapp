const express = require("express")
const app = express()
app.get("/api", (r,s)=>s.json({msg:"Backend OK"}))
app.listen(3000, ()=>console.log("Server 3000"))
