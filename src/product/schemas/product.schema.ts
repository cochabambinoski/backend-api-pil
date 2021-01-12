import { Schema } from 'mongoose'

export const ProductSchema = new Schema({
    id: Number,
    product_name: String,
    stock: Number,
    product_image: String
})