
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_MedicinalProductUndesirableEffect_Population} from './RTTI_MedicinalProductUndesirableEffect_Population';




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
symptomConditionEffect: RTTI_CodeableConcept,
classification: RTTI_CodeableConcept,
frequencyOfOccurrence: RTTI_CodeableConcept,
population: t.array(RTTI_MedicinalProductUndesirableEffect_Population)
        });
        

        export var RTTI_MedicinalProductUndesirableEffect:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProductUndesirableEffect = t.TypeOf<typeof RTTI_MedicinalProductUndesirableEffect>;
        
        