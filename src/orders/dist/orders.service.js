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
var __param =
    (this && this.__param) ||
    function (paramIndex, decorator) {
        return function (target, key) {
            decorator(target, key, paramIndex);
        };
    };
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator['throw'](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected);
            }
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next(),
            );
        });
    };
var __generator =
    (this && this.__generator) ||
    function (thisArg, body) {
        var _ = {
                label: 0,
                sent: function () {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                },
                trys: [],
                ops: [],
            },
            f,
            y,
            t,
            g;
        return (
            (g = { next: verb(0), throw: verb(1), return: verb(2) }),
            typeof Symbol === 'function' &&
                (g[Symbol.iterator] = function () {
                    return this;
                }),
            g
        );
        function verb(n) {
            return function (v) {
                return step([n, v]);
            };
        }
        function step(op) {
            if (f) throw new TypeError('Generator is already executing.');
            while (_)
                try {
                    if (
                        ((f = 1),
                        y &&
                            (t =
                                op[0] & 2
                                    ? y['return']
                                    : op[0]
                                      ? y['throw'] ||
                                        ((t = y['return']) && t.call(y), 0)
                                      : y.next) &&
                            !(t = t.call(y, op[1])).done)
                    )
                        return t;
                    if (((y = 0), t)) op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (
                                !((t = _.trys),
                                (t = t.length > 0 && t[t.length - 1])) &&
                                (op[0] === 6 || op[0] === 2)
                            ) {
                                _ = 0;
                                continue;
                            }
                            if (
                                op[0] === 3 &&
                                (!t || (op[1] > t[0] && op[1] < t[3]))
                            ) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2]) _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                } catch (e) {
                    op = [6, e];
                    y = 0;
                } finally {
                    f = t = 0;
                }
            if (op[0] & 5) throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
var __spreadArrays =
    (this && this.__spreadArrays) ||
    function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };
exports.__esModule = true;
exports.OrdersService = void 0;
var common_1 = require('@nestjs/common');
var order_entity_1 = require('./entities/order.entity');
var typeorm_1 = require('@nestjs/typeorm');
var typeorm_2 = require('typeorm');
var product_entity_1 = require('../products/entities/product.entity');
var OrdersService = /** @class */ (function () {
    function OrdersService(orderRepo, productRepo) {
        this.orderRepo = orderRepo;
        this.productRepo = productRepo;
    }
    OrdersService.prototype.create = function (createOrderDto) {
        return __awaiter(this, void 0, void 0, function () {
            var productsIds, uniqueProductIds, products, order;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productsIds = createOrderDto.items.map(function (item) {
                            return item.product_id;
                        });
                        uniqueProductIds = __spreadArrays(new Set(productsIds));
                        return [
                            4 /*yield*/,
                            this.productRepo.findBy({
                                id: typeorm_2.In(uniqueProductIds),
                            }),
                        ];
                    case 1:
                        products = _a.sent();
                        if (products.length !== uniqueProductIds.length) {
                            throw new Error(
                                'Some product does not exist. Products ' +
                                    productsIds +
                                    ', products find ' +
                                    products.map(function (product) {
                                        return product.id;
                                    }),
                            );
                        }
                        order = order_entity_1.Order.create({
                            client_id: createOrderDto.client_id,
                            items: createOrderDto.items.map(function (items) {
                                var product = products.find(function (product) {
                                    return product.id === items.product_id;
                                });
                                return {
                                    price: product.price,
                                    product_id: items.product_id,
                                    quantity: items.quantity,
                                };
                            }),
                        });
                        return [4 /*yield*/, this.orderRepo.save(order)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, order];
                }
            });
        });
    };
    OrdersService.prototype.findAll = function (client_id) {
        return this.orderRepo.find({
            where: {
                client_id: client_id,
            },
            order: {
                created_at: 'DESC',
            },
        });
    };
    OrdersService.prototype.findOne = function (id, client_id) {
        return this.orderRepo.findOneByOrFail({
            id: id,
            client_id: client_id,
        });
    };
    OrdersService = __decorate(
        [
            common_1.Injectable(),
            __param(0, typeorm_1.InjectRepository(order_entity_1.Order)),
            __param(1, typeorm_1.InjectRepository(product_entity_1.Product)),
        ],
        OrdersService,
    );
    return OrdersService;
})();
exports.OrdersService = OrdersService;