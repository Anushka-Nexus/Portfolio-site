import express from "express"
import { home } from "../Controller/Control.js"
import { StoreVisitor } from "../Controller/VisitorController.js"
import { AddProject, RemoveProject ,UpdateProject} from "../Controller/ProjectController.js"
import { auth, authadmin } from "../Middleware/Auth.js"
import { loginAdmin } from "../Controller/AdminController.js"
import { upload } from "../Middleware/Upload.js"
import { FAQs } from "../Controller/AiController.js"

const routes = express.Router()

routes.get("/test", home)

routes.post("/adminLogin", loginAdmin)

routes.post("/contact", StoreVisitor)

routes.post("/addProject", auth, authadmin,upload.single("image"), AddProject)

routes.delete("/removeProject/:id", auth, authadmin, RemoveProject)

routes.put("/updateProject/:id", auth, authadmin,upload.single("image"), UpdateProject)

routes.post('/gemini', FAQs)

export { routes }

