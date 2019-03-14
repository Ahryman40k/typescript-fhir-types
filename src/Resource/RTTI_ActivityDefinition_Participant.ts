
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: t.string,
_type: RTTI_Element,
role: RTTI_CodeableConcept
        });
        

        export var RTTI_ActivityDefinition_Participant:any = t.intersection([mandatory, partial]);
        

export type IActivityDefinition_Participant = t.TypeOf<typeof RTTI_ActivityDefinition_Participant>;
        
        