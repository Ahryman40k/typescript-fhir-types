
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum DistanceComparatorKind {
                lower = 'lower',
lowerOrEqual = 'lowerOrEqual',
greaterOrEqual = 'greaterOrEqual',
greater = 'greater'
            }
const DistanceComparatorKindKeys = t.keyof({
                [DistanceComparatorKind.lower]: null,
[DistanceComparatorKind.lowerOrEqual]: null,
[DistanceComparatorKind.greaterOrEqual]: null,
[DistanceComparatorKind.greater]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
value: t.number,
_value: RTTI_Element,
comparator: DistanceComparatorKindKeys,
_comparator: RTTI_Element,
unit: t.string,
_unit: RTTI_Element,
system: t.string,
_system: RTTI_Element,
code: t.string,
_code: RTTI_Element
        });
        

        export var RTTI_Distance:any = t.intersection([mandatory, partial]);
        

export type IDistance = t.TypeOf<typeof RTTI_Distance>;
        
        