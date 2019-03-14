
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_ValueSet_Concept} from './RTTI_ValueSet_Concept';
import {RTTI_ValueSet_Filter} from './RTTI_ValueSet_Filter';





        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
system: t.string,
_system: RTTI_Element,
version: t.string,
_version: RTTI_Element,
concept: t.array(RTTI_ValueSet_Concept),
filter: t.array(RTTI_ValueSet_Filter),
valueSet: t.array(t.string)
        });
        

        export var RTTI_ValueSet_Include:any = t.intersection([mandatory, partial]);
        

export type IValueSet_Include = t.TypeOf<typeof RTTI_ValueSet_Include>;
        
        