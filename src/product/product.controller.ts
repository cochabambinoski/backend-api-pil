import { Controller, Get, Put, Res, HttpStatus, Body, NotFoundException, Query } from '@nestjs/common';

import { CreateProductDTO } from './dto/product.dto'

import { ProductService } from './product.service'

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) {}

    @Get('/')
    async getProducts(@Res() res) {
        const products = await this.productService.getProducts();
        return res.status(HttpStatus.OK).json({
            products
        })
    }

    @Put('/update')
    async updateProduct(@Res() res, @Body() createProductDTO: CreateProductDTO, @Query('productID') productID: string) {
        const updatedProduct = await this.productService.updateProduct(productID,createProductDTO);
        if (!updatedProduct) throw new NotFoundException('Product does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Product updated succesfully',
            updatedProduct
        })
    }

}
