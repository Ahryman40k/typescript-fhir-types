
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_ValueSet_Parameter} from './RTTI_ValueSet_Parameter';
import {RTTI_ValueSet_Contains} from './RTTI_ValueSet_Contains';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: t.string,
_identifier: RTTI_Element,
timestamp: t.string,
_timestamp: RTTI_Element,
total: t.number,
_total: RTTI_Element,
offset: t.number,
_offset: RTTI_Element,
parameter: t.array(RTTI_ValueSet_Parameter),
contains: t.array(RTTI_ValueSet_Contains)
        });
        

        export var RTTI_ValueSet_Expansion:any = t.intersection([mandatory, partial]);
        

export type IValueSet_Expansion = t.TypeOf<typeof RTTI_ValueSet_Expansion>;
        
        