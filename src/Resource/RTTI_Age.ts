
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum AgeComparatorKind {
                lower = 'lower',
lowerOrEqual = 'lowerOrEqual',
greaterOrEqual = 'greaterOrEqual',
greater = 'greater'
            }
const AgeComparatorKindKeys = t.keyof({
                [AgeComparatorKind.lower]: null,
[AgeComparatorKind.lowerOrEqual]: null,
[AgeComparatorKind.greaterOrEqual]: null,
[AgeComparatorKind.greater]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
value: t.number,
_value: RTTI_Element,
comparator: AgeComparatorKindKeys,
_comparator: RTTI_Element,
unit: t.string,
_unit: RTTI_Element,
system: t.string,
_system: RTTI_Element,
code: t.string,
_code: RTTI_Element
        });
        

        export var RTTI_Age:any = t.intersection([mandatory, partial]);
        

export type IAge = t.TypeOf<typeof RTTI_Age>;
        
        