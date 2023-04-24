import { Controller } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductRequestDto } from './product.dto';

import { GrpcMethod } from '@nestjs/microservices';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @GrpcMethod('ProductService', 'CreateProduct')
  private createProduct(payload: CreateProductRequestDto): Promise<any> {
    return this.productService.createProduct(payload);
  }

  @GrpcMethod('ProductService', 'GetAllProduct')
  private getAllProduct(): Promise<any> {
    return this.productService.getAllProduct();
  }
}
