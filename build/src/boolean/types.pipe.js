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
    var IsNullPipe, IsUndefinedPipe, IsFunctionPipe, IsNumberPipe, IsStringPipe, IsArrayPipe, IsObjectPipe, IsDefinedPipe, NG2_TYPES_PIPES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            IsNullPipe = (function () {
                function IsNullPipe() {
                }
                IsNullPipe.prototype.transform = function (value) {
                    return value === null;
                };
                IsNullPipe = __decorate([
                    core_1.Pipe({
                        name: 'null'
                    }), 
                    __metadata('design:paramtypes', [])
                ], IsNullPipe);
                return IsNullPipe;
            }());
            exports_1("IsNullPipe", IsNullPipe);
            IsUndefinedPipe = (function () {
                function IsUndefinedPipe() {
                }
                IsUndefinedPipe.prototype.transform = function (value) {
                    return typeof (value) === 'undefined';
                };
                IsUndefinedPipe = __decorate([
                    core_1.Pipe({
                        name: 'undefined'
                    }), 
                    __metadata('design:paramtypes', [])
                ], IsUndefinedPipe);
                return IsUndefinedPipe;
            }());
            exports_1("IsUndefinedPipe", IsUndefinedPipe);
            IsFunctionPipe = (function () {
                function IsFunctionPipe() {
                }
                IsFunctionPipe.prototype.transform = function (value) {
                    return typeof (value) === 'function';
                };
                IsFunctionPipe = __decorate([
                    core_1.Pipe({
                        name: 'function'
                    }), 
                    __metadata('design:paramtypes', [])
                ], IsFunctionPipe);
                return IsFunctionPipe;
            }());
            exports_1("IsFunctionPipe", IsFunctionPipe);
            IsNumberPipe = (function () {
                function IsNumberPipe() {
                }
                IsNumberPipe.prototype.transform = function (value) {
                    return typeof (value) === 'number';
                };
                IsNumberPipe = __decorate([
                    core_1.Pipe({
                        name: 'number'
                    }), 
                    __metadata('design:paramtypes', [])
                ], IsNumberPipe);
                return IsNumberPipe;
            }());
            exports_1("IsNumberPipe", IsNumberPipe);
            IsStringPipe = (function () {
                function IsStringPipe() {
                }
                IsStringPipe.prototype.transform = function (value) {
                    return typeof (value) === 'string';
                };
                IsStringPipe = __decorate([
                    core_1.Pipe({
                        name: 'string'
                    }), 
                    __metadata('design:paramtypes', [])
                ], IsStringPipe);
                return IsStringPipe;
            }());
            exports_1("IsStringPipe", IsStringPipe);
            IsArrayPipe = (function () {
                function IsArrayPipe() {
                }
                IsArrayPipe.prototype.transform = function (value) {
                    return Array.isArray(value);
                };
                IsArrayPipe = __decorate([
                    core_1.Pipe({
                        name: 'array'
                    }), 
                    __metadata('design:paramtypes', [])
                ], IsArrayPipe);
                return IsArrayPipe;
            }());
            exports_1("IsArrayPipe", IsArrayPipe);
            IsObjectPipe = (function () {
                function IsObjectPipe() {
                }
                IsObjectPipe.prototype.transform = function (value) {
                    return typeof (value) === 'object';
                };
                IsObjectPipe = __decorate([
                    core_1.Pipe({
                        name: 'object'
                    }), 
                    __metadata('design:paramtypes', [])
                ], IsObjectPipe);
                return IsObjectPipe;
            }());
            exports_1("IsObjectPipe", IsObjectPipe);
            IsDefinedPipe = (function () {
                function IsDefinedPipe() {
                }
                IsDefinedPipe.prototype.transform = function (value) {
                    return typeof (value) !== 'undefined';
                };
                IsDefinedPipe = __decorate([
                    core_1.Pipe({
                        name: 'defined'
                    }), 
                    __metadata('design:paramtypes', [])
                ], IsDefinedPipe);
                return IsDefinedPipe;
            }());
            exports_1("IsDefinedPipe", IsDefinedPipe);
            exports_1("NG2_TYPES_PIPES", NG2_TYPES_PIPES = [
                IsNullPipe,
                IsUndefinedPipe,
                IsFunctionPipe,
                IsNumberPipe,
                IsStringPipe,
                IsArrayPipe,
                IsObjectPipe,
                IsDefinedPipe
            ]);
        }
    }
});
//# sourceMappingURL=types.pipe.js.map