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
    var ReplacePipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ReplacePipe = (function () {
                function ReplacePipe() {
                }
                ReplacePipe.prototype.transform = function (value, _a) {
                    var pattern = _a[0], replacement = _a[1];
                    if (!pattern || !replacement) {
                        throw new Error("ReplacePipe: usage: {{ value | replace: pattern : replacement }}");
                    }
                    return value.replace(pattern, replacement);
                };
                ReplacePipe = __decorate([
                    core_1.Pipe({
                        name: 'replace'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ReplacePipe);
                return ReplacePipe;
            }());
            exports_1("ReplacePipe", ReplacePipe);
        }
    }
});
//# sourceMappingURL=replace.pipe.js.map