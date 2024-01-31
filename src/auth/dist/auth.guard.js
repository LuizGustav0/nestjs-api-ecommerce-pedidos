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
exports.AuthGuard = void 0;
var common_1 = require('@nestjs/common');
var AuthGuard = /** @class */ (function () {
    function AuthGuard(jwtService) {
        this.jwtService = jwtService;
    }
    AuthGuard.prototype.canActivate = function (context) {
        var request = context.switchToHttp().getRequest();
        var token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new common_1.UnauthorizedException();
        }
        try {
            var payload = this.jwtService.verify(token);
            request['user'] = payload;
            return true;
        } catch (error) {
            throw new common_1.UnauthorizedException();
        }
    };
    AuthGuard.prototype.extractTokenFromHeader = function (request) {
        var _a, _b;
        var _c =
                (_b =
                    (_a = request.headers.authorization) === null ||
                    _a === void 0
                        ? void 0
                        : _a.split(' ')) !== null && _b !== void 0
                    ? _b
                    : [],
            type = _c[0],
            token = _c[1];
        return type === 'Bearer' ? token : undefined;
    };
    AuthGuard = __decorate([common_1.Injectable()], AuthGuard);
    return AuthGuard;
})();
exports.AuthGuard = AuthGuard;
