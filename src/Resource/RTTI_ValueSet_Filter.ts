
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum ValueSet_FilterOpKind {
                equal = 'equal',
isA = 'isA',
descendentOf = 'descendentOf',
isNotA = 'isNotA',
regex = 'regex',
in = 'in',
notIn = 'notIn',
generalizes = 'generalizes',
exists = 'exists'
            }
const ValueSet_FilterOpKindKeys = t.keyof({
                [ValueSet_FilterOpKind.equal]: null,
[ValueSet_FilterOpKind.isA]: null,
[ValueSet_FilterOpKind.descendentOf]: null,
[ValueSet_FilterOpKind.isNotA]: null,
[ValueSet_FilterOpKind.regex]: null,
[ValueSet_FilterOpKind.in]: null,
[ValueSet_FilterOpKind.notIn]: null,
[ValueSet_FilterOpKind.generalizes]: null,
[ValueSet_FilterOpKind.exists]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
property: t.string,
_property: RTTI_Element,
op: ValueSet_FilterOpKindKeys,
_op: RTTI_Element,
value: t.string,
_value: RTTI_Element
        });
        

        export var RTTI_ValueSet_Filter:any = t.intersection([mandatory, partial]);
        

export type IValueSet_Filter = t.TypeOf<typeof RTTI_ValueSet_Filter>;
        
        