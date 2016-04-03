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
var MatchPipe = (function () {
    function MatchPipe() {
    }
    MatchPipe.prototype.transform = function (value, _a) {
        var pattern = _a[0], flag = _a[1];
        if (typeof value !== 'string') {
            throw new TypeError('MatchPipe: value must be a string');
        }
        var regexp = new RegExp(pattern, flag);
        return value.match(regexp);
    };
    MatchPipe = __decorate([
        core_1.Pipe({
            name: 'match'
        }), 
        __metadata('design:paramtypes', [])
    ], MatchPipe);
    return MatchPipe;
}());
exports.MatchPipe = MatchPipe;
//# sourceMappingURL=match.pipe.js.map