import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Product } from '../products/entities/product.entity';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order) private orderRepo: Repository<Order>,
        @InjectRepository(Product) private productRepo: Repository<Product>,
    ) {}

    async create(createOrderDto: CreateOrderDto) {
        const productsIds = createOrderDto.items.map((item) => item.product_id);
        const uniqueProductIds = [...new Set(productsIds)];
        const products = await this.productRepo.findBy({
            id: In(uniqueProductIds),
        });

        if (products.length !== uniqueProductIds.length) {
            throw new Error(
                `Some product does not exist. Products ${productsIds}, products find ${products.map((product) => product.id)}`,
            );
        }

        const order = Order.create({
            client_id: 1,
            items: createOrderDto.items.map((items) => {
                const product = products.find(
                    (product) => product.id === items.product_id,
                );

                return {
                    price: product.price,
                    product_id: items.product_id,
                    quantity: items.quantity,
                };
            }),
        });

        await this.orderRepo.save(order);
        return order;
    }

    findAll() {
        return this.orderRepo.find();
    }

    findOne(id: number) {
        return `This action returns a #${id} order`;
    }
}
