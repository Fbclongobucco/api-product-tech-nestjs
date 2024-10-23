import { Injectable } from '@nestjs/common';
import { ProductDTO } from './product.dto';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class ProductService {

    constructor(private readonly prisma: PrismaService) {
    }

    async create(data: ProductDTO) {

        const product = await this.prisma.product.create(
            {
                data,
            }
        )
        return product;

    }
    
    async findAll(){
        return this.prisma.product.findMany();
    }

    async update(id: string, data: ProductDTO ){
        const productExists = await this.prisma.product.findUnique({
            where:{
                id,
            }
        })

        if(!productExists){
            throw new Error("Product does not existes!")
        }

       return await this.prisma.product.update({
            data,
            where:{
                id
            }
        })
    }

    async delete(id: string){
        const productExists = await this.prisma.product.findUnique({
            where:{
                id,
            }
        })

        if(!productExists){
            throw new Error("Product does not existes!")
        }

        return this.prisma.product.delete({
            where:{
                id,
            }
        })
    }

    async findById(id: string){

        const productExists = await this.prisma.product.findUnique({
            where:{
                id,
            }
        })

        if(!productExists){
            throw new Error("Product does not existes!")
        }

        return productExists
    }

}
