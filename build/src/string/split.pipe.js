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
var SplitPipe = (function () {
    function SplitPipe() {
    }
    SplitPipe.prototype.transform = function (value, _a) {
        var _b = _a[0], separator = _b === void 0 ? ' ' : _b, limit = _a[1];
        if (typeof value !== 'string') {
            throw new TypeError('SplitPipe: value must be a string');
        }
        return value.split(separator, limit);
    };
    SplitPipe = __decorate([
        core_1.Pipe({
            name: 'split'
        }), 
        __metadata('design:paramtypes', [])
    ], SplitPipe);
    return SplitPipe;
}());
exports.SplitPipe = SplitPipe;
//# sourceMappingURL=split.pipe.js.map