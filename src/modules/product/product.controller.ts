import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDTO } from './product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Post()
  async create(@Body() data: ProductDTO) {
    return this.productService.create(data)
  }


  @Get()
  async findAll() {
    return this.productService.findAll();
  }

  @Get(":id")
  async findById(@Param("id") id: string){
    return this.productService.findById(id)
  }

  @Put(":id")
  async update(@Param("id")id: string, @Body() data: ProductDTO){
    return this.productService.update(id, data)
  }

  @Delete(":id")
  async delete(@Param("id") id:string){
    this.productService.delete(id)
  }

}