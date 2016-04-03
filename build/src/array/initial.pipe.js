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
var InitialPipe = (function () {
    function InitialPipe() {
    }
    InitialPipe.prototype.transform = function (array) {
        if (!Array.isArray(array)) {
            throw new TypeError('InitialPipe: value is not an array');
        }
        if (array.length <= 1) {
            return [];
        }
        return array.slice(0, array.length - 1);
    };
    InitialPipe = __decorate([
        core_1.Pipe({
            name: 'initial',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], InitialPipe);
    return InitialPipe;
}());
exports.InitialPipe = InitialPipe;
//# sourceMappingURL=initial.pipe.js.map