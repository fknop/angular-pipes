// const keys = function (object: Object) {
//     return Object.keys(object);
// };

export function isUndefined (value: any): boolean {
    
    return typeof value === 'undefined';
}

export function isNull (value: any): boolean {
    
    return value === null;
}

export function isNumber (value: any): boolean {
    
    return typeof value === 'number';
}

export function isNumberFinite (value: any): boolean {
    
    return isNumber(value) && isFinite(value);
}

// Not strict positive
export function isPositive (value: number): boolean {
    
    return value >= 0;
}


export function isInteger (value: number): boolean {
    
    // No rest, is an integer
    return (value % 1) === 0;
}

export function isNil (value: any): boolean {
    return value === null || typeof (value) === 'undefined';
}

export function isString (value: any): boolean {
    
    return typeof value === 'string';
}

export function isObject (value: any): boolean {
    
    return typeof value === 'object';
}

export function isArray (value: any): boolean {
    
    return Array.isArray(value);
}

export function isFunction (value: any): boolean {
    
    return typeof value === 'function';
}

export function toDecimal (value: number, decimal: number): number {
    
    return Math.round(value * Math.pow(10, decimal)) / Math.pow(10, decimal);
}

export function createRound (method: string): Function {
    const func = Math[method];
    return function (value: number, precision: number = 0) {
        
        if (typeof value === 'string') {
            throw new TypeError('number must be a number');
        }
        
        if (typeof precision === 'string') {
            throw new TypeError('precision must be a number');
        }
        
        if (precision) {
            
            let pair = `${value}e`.split('e');
            const val = func(`${pair[0]}e` + (+pair[1] + precision));
            
            pair = `${val}e`.split('e');
            return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        
        return func(value);
      };
}

export function leftPad (str: string, len: number = 0, ch: any = ' ') {
    
    str = String(str);
    ch = toString(ch);
    let i = -1;
    const length = len - str.length;

    while (++i < length && (str.length + ch.length) <= len) {
        str = ch + str;
    }

    return str;
}

export function rightPad (str: string, len: number = 0, ch: any = ' ') {
    
    str = String(str);
    ch = toString(ch);
    
    let i = -1;
    const length = len - str.length;
    
    while (++i < length && (str.length + ch.length) <= len) {
        str += ch;
    }
    
    return str;
}

export function toString (value: number|string) {
    
    return `${value}`;
}

export function pad (str: string, len: number = 0, ch: any = ' '): string{
    
    str = String(str);
    ch = toString(ch);
    let i = -1;
    const length = len - str.length;
    
    
    let left = true;
    while (++i < length) {
        
        const l = (str.length + ch.length <= len) ? (str.length + ch.length) : (str.length + 1);
        
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

export function toArray (object: any): Array<any> {
    
    return isArray(object) ? object : Object.keys(object).map((key) => {
        return object[key];
    });
}


export function getProperty (value: Object, key: string): Array<any> {
    
    const keys = key.split('.');
    let result = value[keys.shift()];
    while (keys.length && (result = result[keys.shift()]));

    return result;
}

export function sum (input: Array<number>, initial = 0): number {
    
    return input.reduce((previous: number, current: number) => previous + current, initial);
}