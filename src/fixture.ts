import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.init();

    const dataSource = app.get<DataSource>(getDataSourceToken());
    await dataSource.synchronize(true);

    const productRepo = dataSource.getRepository('Product');

    await productRepo.insert([
        {
            name: 'iPhone 13',
            description: 'Smartphone 128GB',
            image_url: 'http://localhost:9000/products/1.png',
            price: 1200,
        },
        {
            name: 'Galaxy Z Flip',
            description: 'Foldable Phone',
            image_url: 'http://localhost:9000/products/2.png',
            price: 1500,
        },
        {
            name: 'Pixel 6',
            description: 'Camera-centric Phone',
            image_url: 'http://localhost:9000/products/3.png',
            price: 1100,
        },
        {
            name: 'OnePlus 9',
            description: 'Flagship Killer',
            image_url: 'http://localhost:9000/products/4.png',
            price: 1000,
        },
        {
            name: 'Xperia 5 III',
            description: 'Compact Powerhouse',
            image_url: 'http://localhost:9000/products/5.png',
            price: 1300,
        },
        {
            name: 'Huawei P50 Pro',
            description: 'Leica Camera System',
            image_url: 'http://localhost:9000/products/6.png',
            price: 1400,
        },
        {
            name: 'LG Velvet',
            description: 'Elegant Design',
            image_url: 'http://localhost:9000/products/7.png',
            price: 900,
        },
        {
            name: 'Moto G Power',
            description: 'Long-lasting Battery',
            image_url: 'http://localhost:9000/products/8.png',
            price: 800,
        },
        {
            name: 'Nokia 9 PureView',
            description: '5-Camera Setup',
            image_url: 'http://localhost:9000/products/9.png',
            price: 950,
        },
        {
            name: 'BlackBerry Key2',
            description: 'Physical Keyboard',
            image_url: 'http://localhost:9000/products/10.png',
            price: 850,
        },
        {
            name: 'Asus ROG Phone 6',
            description: 'Gaming Beast',
            image_url: 'http://localhost:9000/products/11.png',
            price: 1600,
        },
        {
            name: 'ZTE Axon 30 Ultra',
            description: 'Affordable Flagship',
            image_url: 'http://localhost:9000/products/12.png',
            price: 1100,
        },
        {
            name: 'Lenovo Legion Phone',
            description: 'Gaming-centric',
            image_url: 'http://localhost:9000/products/13.png',
            price: 1300,
        },
        {
            name: 'Oppo Find X3 Pro',
            description: 'Vibrant Display',
            image_url: 'http://localhost:9000/products/14.png',
            price: 1200,
        },
        {
            name: 'Realme GT',
            description: 'High-performance Mid-range',
            image_url: 'http://localhost:9000/products/15.png',
            price: 800,
        },
        {
            name: 'Xiaomi Mi 11',
            description: 'Snapdragon 888',
            image_url: 'http://localhost:9000/products/16.png',
            price: 1000,
        },
        {
            name: 'Google Pixel 5a',
            description: 'Camera Excellence',
            image_url: 'http://localhost:9000/products/17.png',
            price: 950,
        },
        {
            name: 'Samsung Galaxy A52',
            description: 'Mid-range Marvel',
            image_url: 'http://localhost:9000/products/18.png',
            price: 700,
        },
        {
            name: 'iPhone SE (2022)',
            description: 'Compact Power',
            image_url: 'http://localhost:9000/products/19.png',
            price: 900,
        },
        {
            name: 'Motorola Edge+',
            description: 'Curved Display',
            image_url: 'http://localhost:9000/products/20.png',
            price: 1400,
        },
    ]);

    await app.close();
}
bootstrap();
