import express from "express"
import { ProjectModel } from "../Models/ProjectModel.js"


//add project 
const AddProject = async (req, res) => {
    try {
        const { title, slug, description, stack, liveUrl, repoUrl } = req.body

        //check if one get required field
        if (!title || !slug || !description) {
            return res.status(400).json({ message: 'Title, slug and description are required!' })
        }

        // at least one of liveUrl or repoUrl must exist
        if (!liveUrl && !repoUrl) {
            return res.status(400).json({
                message: "Either liveUrl or repoUrl is required"
            })
        }
        //image check
        if (!req.file) {
            res.status(400).json({
                message: "Project image is required"
            })
        }
        //check if the slug is unique
        // Unique slug ensures every project opens correctly through its own URL
        let SlugExist = await ProjectModel.findOne({ slug })
        if (SlugExist) {
            return res.status(400).json({ message: 'Slug already exists. Use another slug.' });
        }
        const imageUrl = `/Public/ProjectMedia/${req.file.filename}`

        const project = new ProjectModel({
            title,
            slug,
            description,
            stack,
            image: imageUrl,
            liveUrl: liveUrl || null,
            repoUrl: repoUrl || null,

        })
        await project.save();
        res.status(201).json({
            message: 'Project added!',
            data: project
        })
    } catch (err) {
        res.status(500).json({ message: 'Internal server error!Couldn`t add the project.', err })

    }
}
//delete project
const RemoveProject = async (req, res) => {
    try {
        const { id } = req.params

        const removeproject = await ProjectModel.findById(id)

        if (!removeproject) {
            //not found
            res.status(404).json({ message: "Project not found" });
        }

        await ProjectModel.findByIdAndDelete({ id })

        res.status(200).json({ message: 'Project is removed successfully!' })
    } catch (err) {
        res.status(500).json({ message: 'Internal server error!Couldn`t remove the project.', err })
    }
}

//update project
const UpdateProject = async (req, res) => {
    try {
        const { title, slug, description, stack, liveUrl, repoUrl } = req.body
        const { id } = req.params

        const existproject = ProjectModel.findById({ id })

        if (!existproject) {
            res.status(404).json({
                message: "Project did not exist!"
            })
        }

        //check if the slug is changed
        //if slug is changed then find if it is unique
        //if slug empty/undefined/null-false otherwise true
        //if slug(given by admin)!==existproject.slug(existing slug is different) then true otherwise false
        if (slug && (slug !== existproject.slug)) {
            const existslug = await ProjectModel.findOne({ slug })
            if (existslug) {
                res.status(400).json({ message: "Slug already exists" })
            }

        }
        //add new image
        //agr new image aayi to imageurl overwite hoga otherwise the old image will stay
        if (req.file) {
            existproject.imageUrl = `/Public/ProjectMedia/${req.file.filename}`;
        }
        //update project field
        //ya to new value existing project m update hogi otherwise old value firse save krege
        existproject.title = title || existproject.title
        existproject.slug = slug || existproject.slug
        existproject.description = description || existproject.description
        existproject.stack = stack || existproject.stack
        existproject.liveUrl = liveUrl || existproject.liveUrl
        existproject.repoUrl = repoUrl || existproject.repoUrl

        //saving the project
        await existproject.save()

        res.status(200).json({
            message: "Project updated successfully",
            project
        })
    } catch (err) {
       res.status(500).json({ message: 'Internal server error!Couldn`t update the project.', err });
    }
}

export { AddProject, RemoveProject ,UpdateProject }