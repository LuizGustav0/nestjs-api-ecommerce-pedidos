'use strict';
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
exports.__esModule = true;
var core_1 = require('@nestjs/core');
var app_module_1 = require('./app.module');
var typeorm_1 = require('@nestjs/typeorm');
function bootstrap() {
    return __awaiter(this, void 0, void 0, function () {
        var app, dataSource, productRepo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    return [
                        4 /*yield*/,
                        core_1.NestFactory.create(app_module_1.AppModule),
                    ];
                case 1:
                    app = _a.sent();
                    return [4 /*yield*/, app.init()];
                case 2:
                    _a.sent();
                    dataSource = app.get(typeorm_1.getDataSourceToken());
                    return [4 /*yield*/, dataSource.synchronize(true)];
                case 3:
                    _a.sent();
                    productRepo = dataSource.getRepository('Product');
                    return [
                        4 /*yield*/,
                        productRepo.insert([
                            {
                                id: '7f8c9d8e-9f0a-1b2c-3d4e-5f6g7h8i9j0k',
                                name: 'Product 1',
                                description: 'Description 1',
                                price: 100,
                                image_url:
                                    'http://localhost:9000/products/1.png',
                            },
                            {
                                id: '66805003-f9a2-4772-b577-d5ff66207707',
                                name: 'Product 2',
                                description: 'Description 2',
                                price: 200,
                                image_url:
                                    'http://localhost:9000/products/2.png',
                            },
                            {
                                id: '121829b9-e9f9-4ca9-bd14-b087afedd587',
                                name: 'Product 3',
                                description: 'Description 3',
                                price: 300,
                                image_url:
                                    'http://localhost:9000/products/3.png',
                            },
                            {
                                id: 'ef3d9a49-4c73-4192-97dd-55e21c0e2707',
                                name: 'Product 4',
                                description: 'Description 4',
                                price: 400,
                                image_url:
                                    'http://localhost:9000/products/4.png',
                            },
                            {
                                id: '6d602b3a-1e72-4b03-a29c-14095e57027b',
                                name: 'Product 5',
                                description: 'Description 5',
                                price: 500,
                                image_url:
                                    'http://localhost:9000/products/5.png',
                            },
                            {
                                id: 'dad6f8fb-3149-4d0b-861e-03d29c6accf0',
                                name: 'Product 6',
                                description: 'Description 6',
                                price: 600,
                                image_url:
                                    'http://localhost:9000/products/6.png',
                            },
                            {
                                id: '61c176d5-f4f9-4fbd-a892-41058422868e',
                                name: 'Product 7',
                                description: 'Description 7',
                                price: 700,
                                image_url:
                                    'http://localhost:9000/products/7.png',
                            },
                            {
                                id: 'ed394062-14bc-4ff2-bf43-a77473322171',
                                name: 'Product 8',
                                description: 'Description 8',
                                price: 800,
                                image_url:
                                    'http://localhost:9000/products/8.png',
                            },
                            {
                                id: '4e6d8a64-5389-4623-ad40-e3f95b0607f7',
                                name: 'Product 9',
                                description: 'Description 9',
                                price: 900,
                                image_url:
                                    'http://localhost:9000/products/9.png',
                            },
                            {
                                id: '924e4979-f471-4a3f-bf52-d3316485c06c',
                                name: 'Product 10',
                                description: 'Description 10',
                                price: 1000,
                                image_url:
                                    'http://localhost:9000/products/10.png',
                            },
                            {
                                id: '80a22ccc-50f6-40ed-a18d-8cd152ae40f9',
                                name: 'Product 11',
                                description: 'Description 11',
                                price: 1100,
                                image_url:
                                    'http://localhost:9000/products/11.png',
                            },
                            {
                                id: '740d95cb-c9be-4c2c-992d-8ad53e6b5d0c',
                                name: 'Product 12',
                                description: 'Description 12',
                                price: 1200,
                                image_url:
                                    'http://localhost:9000/products/12.png',
                            },
                            {
                                id: '04c4353a-3f6d-4272-a8f2-44b82c05ecc0',
                                name: 'Product 13',
                                description: 'Description 13',
                                price: 1300,
                                image_url:
                                    'http://localhost:9000/products/13.png',
                            },
                            {
                                id: '8db7d6a5-43f0-420a-8023-7b37b21bec27',
                                name: 'Product 14',
                                description: 'Description 14',
                                price: 1400,
                                image_url:
                                    'http://localhost:9000/products/14.png',
                            },
                            {
                                id: '557be765-4f09-49b1-bd33-b7e30fc7316c',
                                name: 'Product 15',
                                description: 'Description 15',
                                price: 1500,
                                image_url:
                                    'http://localhost:9000/products/15.png',
                            },
                            {
                                id: '0afa7630-4fc1-4d69-beed-4f8f15becadc',
                                name: 'Product 16',
                                description: 'Description 16',
                                price: 1600,
                                image_url:
                                    'http://localhost:9000/products/16.png',
                            },
                            {
                                id: '2261af8a-e453-42e2-b2b0-ea268bb11a41',
                                name: 'Product 17',
                                description: 'Description 17',
                                price: 1700,
                                image_url:
                                    'http://localhost:9000/products/17.png',
                            },
                            {
                                id: 'fbe61a31-7bb4-4e53-9268-9138d4d038d3',
                                name: 'Product 18',
                                description: 'Description 18',
                                price: 1800,
                                image_url:
                                    'http://localhost:9000/products/18.png',
                            },
                            {
                                id: '506610a1-ba99-4c14-a7b2-3c52877e8ec2',
                                name: 'Product 19',
                                description: 'Description 19',
                                price: 1900,
                                image_url:
                                    'http://localhost:9000/products/19.png',
                            },
                            {
                                id: 'eb296629-1fce-43ca-8413-1b3bddd07106',
                                name: 'Product 20',
                                description: 'Description 20',
                                price: 2000,
                                image_url:
                                    'http://localhost:9000/products/20.png',
                            },
                        ]),
                    ];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, app.close()];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
bootstrap();
