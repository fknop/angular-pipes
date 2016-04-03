System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var IsGreaterPipe, IsGreaterOrEqualPipe, IsLessPipe, IsLessOrEqualPipe, IsEqualPipe, IsNotEqualPipe, IsIdenticalPipe, IsNotIdenticalPipe, NG2_CONDITIONS_PIPES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            IsGreaterPipe = (function () {
                function IsGreaterPipe() {
                }
                IsGreaterPipe.prototype.transform = function (first, _a) {
                    var second = _a[0];
                    return first > second;
                };
                IsGreaterPipe = __decorate([
                    core_1.Pipe({
                        name: 'greater'
                    }), 
                    __metadata('design:paramtypes', [])
                ], IsGreaterPipe);
                return IsGreaterPipe;
            }());
            exports_1("IsGreaterPipe", IsGreaterPipe);
            IsGreaterOrEqualPipe = (function () {
                function IsGreaterOrEqualPipe() {
                }
                IsGreaterOrEqualPipe.prototype.transform = function (first, _a) {
                    var second = _a[0];
                    return first >= second;
                };
                IsGreaterOrEqualPipe = __decorate([
                    core_1.Pipe({
                        name: 'greaterOrEqual'
                    }), 
                    __metadata('design:paramtypes', [])
                ], IsGreaterOrEqualPipe);
                return IsGreaterOrEqualPipe;
            }());
            exports_1("IsGreaterOrEqualPipe", IsGreaterOrEqualPipe);
            IsLessPipe = (function () {
                function IsLessPipe() {
                }
                IsLessPipe.prototype.transform = function (first, _a) {
                    var second = _a[0];
                    return first < second;
                };
                IsLessPipe = __decorate([
                    core_1.Pipe({
                        name: 'less'
                    }), 
                    __metadata('design:paramtypes', [])
                ], IsLessPipe);
                return IsLessPipe;
            }());
            exports_1("IsLessPipe", IsLessPipe);
            IsLessOrEqualPipe = (function () {
                function IsLessOrEqualPipe() {
                }
                IsLessOrEqualPipe.prototype.transform = function (first, _a) {
                    var second = _a[0];
                    return first <= second;
                };
                IsLessOrEqualPipe = __decorate([
                    core_1.Pipe({
                        name: 'lessOrEqual'
                    }), 
                    __metadata('design:paramtypes', [])
                ], IsLessOrEqualPipe);
                return IsLessOrEqualPipe;
            }());
            exports_1("IsLessOrEqualPipe", IsLessOrEqualPipe);
            IsEqualPipe = (function () {
                function IsEqualPipe() {
                }
                IsEqualPipe.prototype.transform = function (first, _a) {
                    var second = _a[0];
                    return first == second;
                };
                IsEqualPipe = __decorate([
                    core_1.Pipe({
                        name: 'equal'
                    }), 
                    __metadata('design:paramtypes', [])
                ], IsEqualPipe);
                return IsEqualPipe;
            }());
            exports_1("IsEqualPipe", IsEqualPipe);
            IsNotEqualPipe = (function () {
                function IsNotEqualPipe() {
                }
                IsNotEqualPipe.prototype.transform = function (first, _a) {
                    var second = _a[0];
                    return first != second;
                };
                IsNotEqualPipe = __decorate([
                    core_1.Pipe({
                        name: 'notEqual'
                    }), 
                    __metadata('design:paramtypes', [])
                ], IsNotEqualPipe);
                return IsNotEqualPipe;
            }());
            exports_1("IsNotEqualPipe", IsNotEqualPipe);
            IsIdenticalPipe = (function () {
                function IsIdenticalPipe() {
                }
                IsIdenticalPipe.prototype.transform = function (first, _a) {
                    var second = _a[0];
                    return first === second;
                };
                IsIdenticalPipe = __decorate([
                    core_1.Pipe({
                        name: 'identical'
                    }), 
                    __metadata('design:paramtypes', [])
                ], IsIdenticalPipe);
                return IsIdenticalPipe;
            }());
            exports_1("IsIdenticalPipe", IsIdenticalPipe);
            IsNotIdenticalPipe = (function () {
                function IsNotIdenticalPipe() {
                }
                IsNotIdenticalPipe.prototype.transform = function (first, _a) {
                    var second = _a[0];
                    return first !== second;
                };
                IsNotIdenticalPipe = __decorate([
                    core_1.Pipe({
                        name: 'notIdentical'
                    }), 
                    __metadata('design:paramtypes', [])
                ], IsNotIdenticalPipe);
                return IsNotIdenticalPipe;
            }());
            exports_1("IsNotIdenticalPipe", IsNotIdenticalPipe);
            exports_1("NG2_CONDITIONS_PIPES", NG2_CONDITIONS_PIPES = [
                IsGreaterPipe,
                IsGreaterOrEqualPipe,
                IsLessPipe,
                IsLessOrEqualPipe,
                IsEqualPipe,
                IsNotEqualPipe,
                IsIdenticalPipe,
                IsNotIdenticalPipe
            ]);
        }
    }
});
//# sourceMappingURL=conditions.pipe.js.map