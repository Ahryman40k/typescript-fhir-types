
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
interaction: t.string,
_interaction: RTTI_Element,
interactant: t.array(RTTI_CodeableConcept),
type: RTTI_CodeableConcept,
effect: RTTI_CodeableConcept,
incidence: RTTI_CodeableConcept,
management: RTTI_CodeableConcept
        });
        

        export var RTTI_MedicinalProductClinicals_Interactions:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProductClinicals_Interactions = t.TypeOf<typeof RTTI_MedicinalProductClinicals_Interactions>;
        
        