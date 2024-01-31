"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrderItemDto = exports.CreateOrderDto = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var CreateOrderDto = /** @class */ (function () {
    function CreateOrderDto() {
    }
    __decorate([
        class_validator_1.ArrayNotEmpty(),
        class_validator_1.ValidateNested({ each: true }),
        class_transformer_1.Type(function () { return OrderItemDto; })
    ], CreateOrderDto.prototype, "items");
    __decorate([
        class_validator_1.MaxLength(255),
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty()
    ], CreateOrderDto.prototype, "card_hash");
    return CreateOrderDto;
}());
exports.CreateOrderDto = CreateOrderDto;
var OrderItemDto = /** @class */ (function () {
    function OrderItemDto() {
    }
    __decorate([
        class_validator_1.IsPositive(),
        class_validator_1.IsInt(),
        class_validator_1.IsNotEmpty()
    ], OrderItemDto.prototype, "quantity");
    __decorate([
        class_validator_1.MaxLength(36),
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty()
    ], OrderItemDto.prototype, "product_id");
    return OrderItemDto;
}());
exports.OrderItemDto = OrderItemDto;
