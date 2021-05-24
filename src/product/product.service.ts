import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose'

import { Product } from './interfaces/product.interface'
import { CreateProductDTO } from './dto/product.dto'

@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private productModel: Model<Product>) {}

    async getProducts(): Promise<Product[]> {
        
        const products = await this.productModel.find()

        return products
    }

    async getProduct(): Promise<Product> {
        
        const product = await this.productModel.findOne().sort({createdAt: -1});

        return product
    }

    async createProduct(createProductDTO: CreateProductDTO): Promise<Product> {
        
        const product = new this.productModel(createProductDTO);

        await product.save();

        return product;
    }

    async updateProduct(productId: string, createProductDTO: CreateProductDTO): Promise<Product> {
        const updatedProduct = await this.productModel.findByIdAndUpdate(productId,createProductDTO, { new: true });
        return updatedProduct;
    }
}
