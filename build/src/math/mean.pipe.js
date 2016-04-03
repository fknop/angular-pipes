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
var MeanPipe = (function () {
    function MeanPipe() {
    }
    MeanPipe.prototype.transform = function (numbers) {
        if (!Array.isArray(numbers)) {
            throw new TypeError('MeanPipe: value must be an array');
        }
        var count = numbers.length;
        if (count === 0) {
            return undefined;
        }
        var total = 0;
        numbers.forEach(function (value) {
            total += value;
        });
        return (total / count);
    };
    MeanPipe = __decorate([
        core_1.Pipe({
            name: 'mean',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], MeanPipe);
    return MeanPipe;
}());
exports.MeanPipe = MeanPipe;
//# sourceMappingURL=mean.pipe.js.map