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
exports.RabbitmqModule = void 0;
var nestjs_rabbitmq_1 = require('@golevelup/nestjs-rabbitmq');
var common_1 = require('@nestjs/common');
var RabbitmqModule = /** @class */ (function () {
    function RabbitmqModule() {}
    RabbitmqModule = __decorate(
        [
            common_1.Global(),
            common_1.Module({
                imports: [
                    nestjs_rabbitmq_1.RabbitMQModule.forRoot(
                        nestjs_rabbitmq_1.RabbitMQModule,
                        {
                            uri: 'amqp://admin:admin@localhost:5672',
                        },
                    ),
                ],
                exports: [nestjs_rabbitmq_1.RabbitMQModule],
            }),
        ],
        RabbitmqModule,
    );
    return RabbitmqModule;
})();
exports.RabbitmqModule = RabbitmqModule;
