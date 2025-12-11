import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { GoogleGenAI } from "@google/genai"

//connecting routes
import { routes } from "./Router/Routes.js"
//connecting db
import "./Database/Connection.js"

dotenv.config({ path: "./config.env" })
let port = process.env.PORT

//instance of express
const app = express()


app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "*",
    allowedHeaders: ["Content-Type", "Authorization"]
  })
)


app.use(express.static("Public"))

//reads form data
app.use(express.urlencoded({ extended: true }))

//to parse the json onto the server
app.use(express.json())

//endpoint
app.use("/api", routes)

const genAI = new GoogleGenAI(process.env.GEMINI_APIKEY);


const allowedKeywords = [
  "mern", "mern stack", "full stack",
  "mongodb", "mongo atlas", "mongoose",
  "express", "express.js", "middleware",
  "node", "nodejs", "npm", "nodemon",
  "react", "reactjs", "jsx", "react hooks",
  "useState", "useEffect", "context api",
  "redux", "redux toolkit", "react router",
  "rest api", "crud", "backend api",
  "jwt", "authentication", "authorization",
  "bcrypt", "cookie parser", "session",
  "mongoose schema", "mongoose model",
  "socket.io", "websocket",
  "deployment", "vercel", "render",
  "tailwind", "material ui"
];

app.post('/gemini', async (req, res) => {
  const { prompt } = req.body;
  const FormattedPrompt = prompt.toLowerCase()
  //below code will check ki query m keywords include h ki nhi 
  const MernRelatedQuery = allowedKeywords.some(keyword => FormattedPrompt.includes(keyword.toLowerCase()))

  //check if it is related
  if (!MernRelatedQuery) throw res.status(400).json({
    error: 'Only MERN-stack related queries are allowed.'
  })

  //instance of gemini ai model
  const model = genAI.getGenerativeModel(
    {
      model: "gemini-2.0-flash"
    }
  )
  const instruction = "Answer concisely in up to 3 short lines focused on MERN-stack."
  const FullPrompt = `${instruction}${prompt}`
  const result = await model.generateContent(FullPrompt);

  res.status(200).json({ text: result.response.text() });
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})