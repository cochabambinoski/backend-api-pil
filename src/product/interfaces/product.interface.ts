import { Document } from 'mongoose'

export interface Product extends Document {
    readonly id: number;
    readonly productname: string;
    readonly stock: number;
    readonly product_image: string
}