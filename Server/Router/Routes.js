import express from "express"
import { home } from "../Controller/Control.js"
import { StoreVisitor } from "../Controller/VisitorController.js"
import { AddProject,RemoveProject } from "../Controller/ProjectController.js"
import { auth,authadmin } from "../Middleware/Auth.js"
import { loginAdmin } from "../Controller/AdminController.js"

const routes = express.Router()

routes.get("/test", home)

routes.post("/AdminLogin",loginAdmin)

routes.post("/contact",StoreVisitor)

routes.post("/addProject",auth,authadmin,AddProject)

routes.delete("/removeProject/:id",auth,authadmin,RemoveProject)

export {routes}

