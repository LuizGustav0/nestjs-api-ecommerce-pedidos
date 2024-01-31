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
exports.AuthService = void 0;
var common_1 = require('@nestjs/common');
//apenas para fins de teste
var users = [
    {
        id: 1,
        username: 'teste',
        password: 'teste',
    },
    {
        id: 2,
        username: '123456',
        password: '123456',
    },
];
var AuthService = /** @class */ (function () {
    function AuthService(jwtService) {
        this.jwtService = jwtService;
    }
    AuthService.prototype.login = function (username, password) {
        var user = users.find(function (user) {
            return user.username === username && user.password === password;
        });
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        var payload = { sub: user.id, username: user.username };
        return {
            access_token: this.jwtService.sign(payload),
        };
    };
    AuthService = __decorate([common_1.Injectable()], AuthService);
    return AuthService;
})();
exports.AuthService = AuthService;
