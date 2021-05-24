import { Schema } from 'mongoose'

export const ProductSchema = new Schema({
    id: Number,
    stock: Number,
    product_image: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})