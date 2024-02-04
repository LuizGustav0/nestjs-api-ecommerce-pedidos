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
exports.OrderItem = void 0;
var typeorm_1 = require('typeorm');
var product_entity_1 = require('../../products/entities/product.entity');
var order_entity_1 = require('./order.entity');
var OrderItem = /** @class */ (function () {
    function OrderItem() {}
    __decorate([typeorm_1.PrimaryGeneratedColumn()], OrderItem.prototype, 'id');
    __decorate(
        [typeorm_1.Column({ type: 'int' })],
        OrderItem.prototype,
        'quantity',
    );
    __decorate(
        [typeorm_1.Column({ type: 'decimal', precision: 10, scale: 2 })],
        OrderItem.prototype,
        'price',
    );
    __decorate(
        [
            typeorm_1.ManyToOne(
                function () {
                    return product_entity_1.Product;
                },
                { eager: true },
            ),
            typeorm_1.JoinColumn({ name: 'product_id' }),
        ],
        OrderItem.prototype,
        'product',
    );
    __decorate([typeorm_1.Column()], OrderItem.prototype, 'product_id');
    __decorate(
        [
            typeorm_1.ManyToOne(function () {
                return order_entity_1.Order;
            }),
        ],
        OrderItem.prototype,
        'order',
    );
    OrderItem = __decorate([typeorm_1.Entity()], OrderItem);
    return OrderItem;
})();
exports.OrderItem = OrderItem;
