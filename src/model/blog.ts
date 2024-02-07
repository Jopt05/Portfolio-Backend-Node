import { Schema, model } from 'mongoose';
import { IBlog } from '../@types';

const BlogSchema = new Schema<IBlog>({
    blog_name: {
        type: String,
        required: [
            true,
            "Nombre del blog es obligatorio"
        ]
    },
    createdAt: {
        type: Schema.Types.Date,
        required: false,
        default: new Date()
    },
    blog_text: {
        type: Schema.Types.String,
        required: [
            true,
            "Texto del blog es obligatorio"
        ]
    },
    blog_state: {
        type: Schema.Types.Boolean,
        required: false,
        default: true
    }
});

export const Blog = model<IBlog>('Blog', BlogSchema);