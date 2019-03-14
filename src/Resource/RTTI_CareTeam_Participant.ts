
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Period} from './RTTI_Period';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
role: t.array(RTTI_CodeableConcept),
member: RTTI_Reference,
onBehalfOf: RTTI_Reference,
period: RTTI_Period
        });
        

        export var RTTI_CareTeam_Participant:any = t.intersection([mandatory, partial]);
        

export type ICareTeam_Participant = t.TypeOf<typeof RTTI_CareTeam_Participant>;
        
        