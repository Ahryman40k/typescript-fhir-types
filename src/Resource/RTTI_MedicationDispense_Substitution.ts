
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
wasSubstituted: t.boolean,
_wasSubstituted: RTTI_Element,
type: RTTI_CodeableConcept,
reason: t.array(RTTI_CodeableConcept),
responsibleParty: t.array(RTTI_Reference)
        });
        

        export var RTTI_MedicationDispense_Substitution:any = t.intersection([mandatory, partial]);
        

export type IMedicationDispense_Substitution = t.TypeOf<typeof RTTI_MedicationDispense_Substitution>;
        
        