
import * as t from 'io-ts';
import { RTTI_Extension } from './RTTI_Extension';
import { RTTI_Element } from './RTTI_Element';

export enum QuantityComparatorKind {
    lower = 'lower',
    lowerOrEqual = 'lowerOrEqual',
    greaterOrEqual = 'greaterOrEqual',
    greater = 'greater'
}
const QuantityComparatorKindKeys = t.keyof({
    [QuantityComparatorKind.lower]: null,
    [QuantityComparatorKind.lowerOrEqual]: null,
    [QuantityComparatorKind.greaterOrEqual]: null,
    [QuantityComparatorKind.greater]: null
});


const mandatory = t.type({

});


const partial = t.partial({
    id: t.string,
    extension: t.array(RTTI_Extension),
    value: t.number,
    _value: RTTI_Element,
    comparator: QuantityComparatorKindKeys,
    _comparator: RTTI_Element,
    unit: t.string,
    _unit: RTTI_Element,
    system: t.string,
    _system: RTTI_Element,
    code: t.string,
    _code: RTTI_Element
});


export var RTTI_Quantity:any = t.intersection([mandatory, partial]);


export type IQuantity = t.TypeOf<typeof RTTI_Quantity>;

