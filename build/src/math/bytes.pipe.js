"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var utils_1 = require('../utils/utils');
var BytesPipe = (function () {
    function BytesPipe() {
    }
    BytesPipe.prototype.transform = function (value, _a) {
        var _b = _a[0], decimal = _b === void 0 ? 0 : _b;
        var formats = [
            { name: 'B', max: 1024 },
            { name: 'KB', max: 1048576 },
            { name: 'MB', max: 1073741824 },
            { name: 'GB', max: Number.MAX_VALUE }
        ];
        if (utils_1.isNumberFinite(value) &&
            utils_1.isNumberFinite(decimal) &&
            utils_1.isInteger(decimal) &&
            utils_1.isPositive(decimal)) {
            for (var i = 0; i < formats.length; ++i) {
                var format = formats[i];
                if (value < format.max) {
                    var bytes = formats[i - 1] ?
                        utils_1.toDecimal(value / formats[i - 1].max, decimal) :
                        utils_1.toDecimal(value, decimal);
                    return bytes + " " + format.name;
                }
            }
        }
        else {
            throw new TypeError("BytesPipe: bytes or decimal is in the wrong format - \n                                 bytes must be a number, decimal must be an integer");
        }
    };
    BytesPipe = __decorate([
        core_1.Pipe({
            name: 'bytes'
        }), 
        __metadata('design:paramtypes', [])
    ], BytesPipe);
    return BytesPipe;
}());
exports.BytesPipe = BytesPipe;
//# sourceMappingURL=bytes.pipe.js.map