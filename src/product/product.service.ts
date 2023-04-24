import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductRequestDto } from './product.dto';
import { Product, dataDummyProduct } from './utils';

@Injectable()
export class ProductService {
  public async createProduct(payload: CreateProductRequestDto): Promise<any> {
    const product: any = new Product();

    product.name = payload.name;
    product.sku = payload.sku;
    product.stock = payload.stock;
    product.price = payload.price;

    return { id: product.id, error: null, status: HttpStatus.OK };
  }

  public async getAllProduct(): Promise<any> {
    return { statusCode: HttpStatus.OK, data: dataDummyProduct };
  }
}
