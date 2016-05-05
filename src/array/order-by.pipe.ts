import { Pipe, PipeTransform } from '@angular/core';
import { isArray } from '../utils/utils';

@Pipe({
    name: 'orderBy',
    pure: false
})
export class OrderByPipe implements PipeTransform {
    
    private static _orderBy (a: any, b: any): number {
        
        const floatA = parseFloat(a);
        const floatB = parseFloat(b);
        
        if ((isNaN(floatA) || !isFinite(a)) || (isNaN(floatB)) || !isFinite(b)) {
            
            const lowerA = a.toLowerCase();
            const lowerB = b.toLowerCase();
            return (lowerA < lowerB) ? -1 : (lowerA > lowerB) ? 1 : 0;
        }
        else {
            
            return (floatA < floatB) ? -1 : (floatA > floatB) ? 1 : 0; 
        }
        
    }
    
    transform (input: any, config: any = '+'): any {
        
        if (!isArray(input)) {
            return input;
        }
        
        const configIsArray = isArray(config);
        
        // If config === 'param' OR ['param'] 
        if (!configIsArray || (configIsArray && config.length === 1)) {
            
            const propertyToCheck: string = configIsArray ? config[0] : config;
            const first = propertyToCheck.substr(0, 1);
            const desc = (first === '-'); // First character is '-'

            // Basic array (if only + or - is present)
            if (!propertyToCheck || propertyToCheck === '-' || propertyToCheck === '+') {
                return desc ? [...input].sort().reverse() : [...input].sort();
            }            
            else {
                // If contains + or -, substring the property
                const property = (first === '+' || desc) ? propertyToCheck.substr(1) : propertyToCheck;
                
                return [...input].sort((a: any, b: any) => {
                   
                    const comparator = OrderByPipe._orderBy(a[property], b[property]);
                    return desc ? -comparator : comparator; 
                });
                
            }
            
        }
        else { // Config is an array of property
            
            return [...input].sort((a: any, b: any) => {
               
                for (let i: number = 0; i < config.length; ++i) {
                    const first = config[i].substr(0, 1);
                    const desc = (first === '-');
                    const property = (first === '+' || desc) ? config[i].substr(1) : config[i];
                    
                    const comparator = OrderByPipe._orderBy(a[property], b[property]);
                    const comparison = desc ? -comparator : comparator;
                    
                    if (comparison !== 0) {
                        return comparison;
                    }
                }
                
                return 0;
            });
            
        }
    }
}