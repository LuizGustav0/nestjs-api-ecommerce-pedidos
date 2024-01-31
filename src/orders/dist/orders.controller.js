'use strict';
var __assign =
    (this && this.__assign) ||
    function () {
        __assign =
            Object.assign ||
            function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s)
                        if (Object.prototype.hasOwnProperty.call(s, p))
                            t[p] = s[p];
                }
                return t;
            };
        return __assign.apply(this, arguments);
    };
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
exports.__esModule = true;
exports.OrdersController = void 0;
var common_1 = require('@nestjs/common');
var auth_guard_1 = require('../auth/auth.guard');
var OrdersController = /** @class */ (function () {
    function OrdersController(ordersService) {
        this.ordersService = ordersService;
    }
    OrdersController.prototype.create = function (createOrderDto, req) {
        return this.ordersService.create(
            __assign(__assign({}, createOrderDto), {
                client_id: req['user'].sub,
            }),
        );
    };
    OrdersController.prototype.findAll = function (req) {
        return this.ordersService.findAll(req['user'].sub);
    };
    OrdersController.prototype.findOne = function (id, req) {
        return this.ordersService.findOne(id, req['user'].sub);
    };
    __decorate(
        [
            common_1.Post(),
            __param(0, common_1.Body()),
            __param(1, common_1.Req()),
        ],
        OrdersController.prototype,
        'create',
    );
    __decorate(
        [common_1.Get(), __param(0, common_1.Req())],
        OrdersController.prototype,
        'findAll',
    );
    __decorate(
        [
            common_1.Get(':id'),
            __param(0, common_1.Param('id')),
            __param(1, common_1.Req()),
        ],
        OrdersController.prototype,
        'findOne',
    );
    OrdersController = __decorate(
        [
            common_1.UseGuards(auth_guard_1.AuthGuard),
            common_1.Controller('orders'),
        ],
        OrdersController,
    );
    return OrdersController;
})();
exports.OrdersController = OrdersController;
