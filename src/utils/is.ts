import _ from 'lodash';

export const isArray = (data: any) => Array.isArray(data);
export const isObject = (data: any) => !isArray(data) && _.isObject(data);
export const isNull = (data: any) => data === null; 
export const isNumber = (data: any) => _.isNumber(data); 
export const isString = (data: any) => _.isString(data); 
export const isBoolean = (data: any) => _.isBoolean(data);
