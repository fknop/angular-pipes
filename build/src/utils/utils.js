// const keys = function (object: Object) {
//     return Object.keys(object);
// };
"use strict";
function isUndefined(value) {
    return typeof value === 'undefined';
}
exports.isUndefined = isUndefined;
function isNull(value) {
    return value === null;
}
exports.isNull = isNull;
function isNumber(value) {
    return typeof value === 'number';
}
exports.isNumber = isNumber;
function isNumberFinite(value) {
    return isNumber(value) && isFinite(value);
}
exports.isNumberFinite = isNumberFinite;
// Not strict positive
function isPositive(value) {
    return value >= 0;
}
exports.isPositive = isPositive;
function isInteger(value) {
    // No rest, is an integer
    return (value % 1) === 0;
}
exports.isInteger = isInteger;
function isNil(value) {
    return value === null || typeof (value) === 'undefined';
}
exports.isNil = isNil;
function isArray(value) {
    return Array.isArray(value);
}
exports.isArray = isArray;
function toDecimal(value, decimal) {
    return Math.round(value * Math.pow(10, decimal)) / Math.pow(10, decimal);
}
exports.toDecimal = toDecimal;
function createRound(method) {
    var func = Math[method];
    return function (value, precision) {
        if (precision === void 0) { precision = 0; }
        if (typeof value === 'string') {
            throw new TypeError('number must be a number');
        }
        if (typeof precision === 'string') {
            throw new TypeError('precision must be a number');
        }
        if (precision) {
            var pair = (value + "e").split('e');
            var val = func((pair[0] + "e") + (+pair[1] + precision));
            pair = (val + "e").split('e');
            return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(value);
    };
}
exports.createRound = createRound;
function leftPad(str, len, ch) {
    if (len === void 0) { len = 0; }
    if (ch === void 0) { ch = ' '; }
    str = String(str);
    ch = toString(ch);
    var i = -1;
    var length = len - str.length;
    while (++i < length && (str.length + ch.length) <= len) {
        str = ch + str;
    }
    return str;
}
exports.leftPad = leftPad;
function rightPad(str, len, ch) {
    if (len === void 0) { len = 0; }
    if (ch === void 0) { ch = ' '; }
    str = String(str);
    ch = toString(ch);
    var i = -1;
    var length = len - str.length;
    while (++i < length && (str.length + ch.length) <= len) {
        str += ch;
    }
    return str;
}
exports.rightPad = rightPad;
function toString(value) {
    return "" + value;
}
exports.toString = toString;
function pad(str, len, ch) {
    if (len === void 0) { len = 0; }
    if (ch === void 0) { ch = ' '; }
    str = String(str);
    ch = toString(ch);
    var i = -1;
    var length = len - str.length;
    var left = true;
    while (++i < length) {
        var l = (str.length + ch.length <= len) ? (str.length + ch.length) : (str.length + 1);
        if (left) {
            str = leftPad(str, l, ch);
        }
        else {
            str = rightPad(str, l, ch);
        }
        left = !left;
    }
    return str;
}
exports.pad = pad;
//# sourceMappingURL=utils.js.map