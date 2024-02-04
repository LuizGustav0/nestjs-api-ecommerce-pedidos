"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var products_module_1 = require("./products/products.module");
var typeorm_1 = require("@nestjs/typeorm");
var product_entity_1 = require("./products/entities/product.entity");
var orders_module_1 = require("./orders/orders.module");
var order_entity_1 = require("./orders/entities/order.entity");
var order_item_entity_1 = require("./orders/entities/order-item.entity");
var auth_module_1 = require("./auth/auth.module");
var rabbitmq_module_1 = require("./rabbitmq/rabbitmq.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'mysql',
                    host: 'localhost',
                    port: 3308,
                    username: 'root',
                    password: 'root',
                    database: 'nest',
                    entities: [product_entity_1.Product, order_entity_1.Order, order_item_entity_1.OrderItem],
                    synchronize: true,
                    logging: true
                }),
                products_module_1.ProductsModule,
                orders_module_1.OrdersModule,
                auth_module_1.AuthModule,
                rabbitmq_module_1.RabbitmqModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
