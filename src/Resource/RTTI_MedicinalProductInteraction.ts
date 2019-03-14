
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';




        const mandatory = t.type({
           resourceType: t.string
        });
        

        const partial = t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
text: RTTI_Narrative,
contained: t.array(ResourceList),
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
subject: t.array(RTTI_Reference),
interaction: t.string,
_interaction: RTTI_Element,
interactant: t.array(RTTI_CodeableConcept),
type: RTTI_CodeableConcept,
effect: RTTI_CodeableConcept,
incidence: RTTI_CodeableConcept,
management: RTTI_CodeableConcept
        });
        

        export var RTTI_MedicinalProductInteraction:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProductInteraction = t.TypeOf<typeof RTTI_MedicinalProductInteraction>;
        
        