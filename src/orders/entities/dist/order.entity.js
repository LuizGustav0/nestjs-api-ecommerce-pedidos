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
exports.Order = exports.OrderStatus = void 0;
var typeorm_1 = require('typeorm');
var order_item_entity_1 = require('./order-item.entity');
var OrderStatus;
(function (OrderStatus) {
    OrderStatus['PENDING'] = 'pending';
    OrderStatus['PAID'] = 'paid';
    OrderStatus['FAILED'] = 'failed';
})((OrderStatus = exports.OrderStatus || (exports.OrderStatus = {})));
var Order = /** @class */ (function () {
    function Order() {
        this.status = OrderStatus.PENDING;
    }
    Order_1 = Order;
    Order.create = function (input) {
        var order = new Order_1();
        order.client_id = input.client_id;
        order.items = input.items.map(function (item) {
            var orderItem = new order_item_entity_1.OrderItem();
            orderItem.product_id = item.product_id;
            orderItem.quantity = item.quantity;
            orderItem.price = item.price;
            return orderItem;
        });
        order.total = order.items.reduce(function (sum, item) {
            return sum + item.price * item.quantity;
        }, 0);
        return order;
    };
    Order.prototype.pay = function () {
        if (this.status === OrderStatus.PAID) {
            throw new Error('Order already paid');
        }
        if (this.status === OrderStatus.FAILED) {
            throw new Error('Order already failed');
        }
        this.status = OrderStatus.PAID;
    };
    Order.prototype.fail = function () {
        if (this.status === OrderStatus.FAILED) {
            throw new Error('Order already failed');
        }
        if (this.status === OrderStatus.PAID) {
            throw new Error('Order already paid');
        }
        this.status = OrderStatus.FAILED;
    };
    var Order_1;
    __decorate(
        [typeorm_1.PrimaryGeneratedColumn('uuid')],
        Order.prototype,
        'id',
    );
    __decorate(
        [typeorm_1.Column({ type: 'decimal', precision: 10, scale: 2 })],
        Order.prototype,
        'total',
    );
    __decorate([typeorm_1.Column()], Order.prototype, 'client_id');
    __decorate([typeorm_1.Column()], Order.prototype, 'status');
    __decorate([typeorm_1.CreateDateColumn()], Order.prototype, 'created_at');
    __decorate(
        [
            typeorm_1.OneToMany(
                function () {
                    return order_item_entity_1.OrderItem;
                },
                function (item) {
                    return item.order;
                },
                {
                    cascade: ['insert'],
                    eager: true,
                },
            ),
        ],
        Order.prototype,
        'items',
    );
    Order = Order_1 = __decorate([typeorm_1.Entity()], Order);
    return Order;
})();
exports.Order = Order;
