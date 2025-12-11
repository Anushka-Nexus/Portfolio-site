import express from "express"
import { home } from "../Controller/Control.js"
import { StoreVisitor } from "../Controller/VisitorController.js"
import { AddProject,RemoveProject } from "../Controller/ProjectController.js"

const routes = express.Router()

routes.get("/test", home)

routes.post("/contact",StoreVisitor)

routes.post("/addProject",AddProject)

routes.delete("/removeProject/:id",RemoveProject)

export {routes}

