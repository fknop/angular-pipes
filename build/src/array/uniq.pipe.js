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
// Does not work with deep equal yet
var UniqPipe = (function () {
    function UniqPipe() {
    }
    UniqPipe.prototype.transform = function (values) {
        if (!Array.isArray(values)) {
            throw new TypeError('UniqPipe: value is not an array');
        }
        var uniq = new Array();
        values.forEach(function (value) {
            if (uniq.indexOf(value) === -1) {
                uniq.push(value);
            }
        });
        return uniq;
    };
    UniqPipe = __decorate([
        core_1.Pipe({
            name: 'uniq',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], UniqPipe);
    return UniqPipe;
}());
exports.UniqPipe = UniqPipe;
//# sourceMappingURL=uniq.pipe.js.map