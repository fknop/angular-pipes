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
var RightPadPipe = (function () {
    function RightPadPipe() {
    }
    RightPadPipe.prototype.transform = function (value, _a) {
        var _b = _a[0], length = _b === void 0 ? 0 : _b, _c = _a[1], character = _c === void 0 ? ' ' : _c;
        return utils_1.rightPad(value, length, character);
    };
    RightPadPipe = __decorate([
        core_1.Pipe({
            name: 'rightpad'
        }), 
        __metadata('design:paramtypes', [])
    ], RightPadPipe);
    return RightPadPipe;
}());
exports.RightPadPipe = RightPadPipe;
//# sourceMappingURL=right-pad.pipe.js.map