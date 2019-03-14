
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_ValueSet_Include} from './RTTI_ValueSet_Include';




        const mandatory = t.type({
           include: t.array(RTTI_ValueSet_Include)
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
lockedDate: t.string,
_lockedDate: RTTI_Element,
inactive: t.boolean,
_inactive: RTTI_Element,
exclude: t.array(RTTI_ValueSet_Include)
        });
        

        export var RTTI_ValueSet_Compose:any = t.intersection([mandatory, partial]);
        

export type IValueSet_Compose = t.TypeOf<typeof RTTI_ValueSet_Compose>;
        
        