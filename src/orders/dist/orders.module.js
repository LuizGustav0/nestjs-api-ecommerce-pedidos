'use strict';
var __decorate =
    (this && this.__decorate) ||
    function (decorators, target, key, desc) {
        var c = arguments.length,
            r =
                c < 3
                    ? target
                    : desc === null
                      ? (desc = Object.getOwnPropertyDescriptor(target, key))
                      : desc,
            d;
        if (
            typeof Reflect === 'object' &&
            typeof Reflect.decorate === 'function'
        )
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                    r =
                        (c < 3
                            ? d(r)
                            : c > 3
                              ? d(target, key, r)
                              : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
exports.__esModule = true;
exports.OrdersModule = void 0;
var common_1 = require('@nestjs/common');
var orders_service_1 = require('./orders.service');
var orders_controller_1 = require('./orders.controller');
var typeorm_1 = require('@nestjs/typeorm');
var order_entity_1 = require('./entities/order.entity');
var order_item_entity_1 = require('./entities/order-item.entity');
var product_entity_1 = require('../products/entities/product.entity');
var order_consumer_1 = require('./order.consumer');
var OrdersModule = /** @class */ (function () {
    function OrdersModule() {}
    OrdersModule = __decorate(
        [
            common_1.Module({
                imports: [
                    typeorm_1.TypeOrmModule.forFeature([
                        order_entity_1.Order,
                        order_item_entity_1.OrderItem,
                        product_entity_1.Product,
                    ]),
                ],
                controllers: [orders_controller_1.OrdersController],
                providers: [
                    orders_service_1.OrdersService,
                    order_consumer_1.OrderConsumer,
                ],
            }),
        ],
        OrdersModule,
    );
    return OrdersModule;
})();
exports.OrdersModule = OrdersModule;
