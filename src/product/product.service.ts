import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductRequestDto } from './product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}
  public async createProduct(payload: CreateProductRequestDto): Promise<any> {
    const product: any = await this.prismaService.products.create({
      data: payload,
    });

    return { id: product.id, error: null, status: HttpStatus.OK };
  }

  public async getAllProduct(): Promise<any> {
    const allProduct: any = await this.prismaService.products.findMany();
    return { statusCode: HttpStatus.OK, data: allProduct };
  }
}
