
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: t.array(RTTI_CodeableConcept),
period: RTTI_Period,
individual: RTTI_Reference
        });
        

        export var RTTI_Encounter_Participant:any = t.intersection([mandatory, partial]);
        

export type IEncounter_Participant = t.TypeOf<typeof RTTI_Encounter_Participant>;
        
        