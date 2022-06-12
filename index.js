import express from 'express'
const app = express()
const port = 5000
import cors from 'cors'
import { fileUpload } from "./middleware/images.js";
import route from "./routes/route.js";
import path from "path";
import dotEnv from "dotenv";



app.use(express.json());
app.use(cors())
dotEnv.config();

app.use("/uploads/images", express.static(path.join("uploads", "images")));

app.use('/api/v3/app', route)

app.post("/api/upload", fileUpload.single("image"), (req, res) => {
    const path = "http://localhost:5000/" + req.file.path;
    res.send(path);
  });


app.get('/', (req, res) => {
    res.send('Hello World',)
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
