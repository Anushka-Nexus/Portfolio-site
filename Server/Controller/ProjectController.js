import express from "express"
import { ProjectModel } from "../Models/ProjectModel.js"

//add project 
const AddProject = async (req, res) => {
    try {
        const { title, slug, description, stack, imageUrl, liveUrl, repoUrl } = req.body

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
        //check if the slug is unique
        // Unique slug ensures every project opens correctly through its own URL
        let SlugExist = await ProjectModel.findOne({ slug })
        if (SlugExist) {
            return res.status(400).json({ message: 'Slug already exists. Use another slug.' });
        }

        const project = new ProjectModel({
            title,
            slug,
            description,
            stack,
            imageUrl: imageUrl || '',
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

       await ProjectModel.findByIdAndDelete({id})

       res.status(200).json({ message: 'Project deleted successfully!' });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error!Couldn`t remove the project.', err });
    }
}

export { AddProject, RemoveProject }