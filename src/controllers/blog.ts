import { Request, Response } from 'express';

import { IBlog } from '../@types';
import { Blog } from '../model/blog'

export async function blogsGet( req: Request, res: Response ) {

    const blogs = await Blog.find();

    res.status(200).json({
        blogs: blogs,
        msg: 'Blogs obtenidos correctamente'
    });

};

export async function blogsPost( req: Request, res: Response ) {

    const {
        blog_name,
        blog_text,
    } = req.body;

    const blog: IBlog = new Blog({
        blog_name,
        blog_text
    })

    await blog.save();

    res.status(201).json({
        msg: "Blog creado correctamente",
        blog
    })

};