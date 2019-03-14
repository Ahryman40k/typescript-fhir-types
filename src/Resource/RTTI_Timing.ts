
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';

import {RTTI_Element} from './RTTI_Element';
import {RTTI_Timing_Repeat} from './RTTI_Timing_Repeat';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
event: t.array(t.string),
_event: t.array(RTTI_Element),
repeat: RTTI_Timing_Repeat,
code: RTTI_CodeableConcept
        });
        

        export var RTTI_Timing:any = t.intersection([mandatory, partial]);
        

export type ITiming = t.TypeOf<typeof RTTI_Timing>;
        
        