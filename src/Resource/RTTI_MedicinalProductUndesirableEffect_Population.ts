
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Range} from './RTTI_Range';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
ageRange: RTTI_Range,
ageCodeableConcept: RTTI_CodeableConcept,
gender: RTTI_CodeableConcept,
race: RTTI_CodeableConcept,
physiologicalCondition: RTTI_CodeableConcept
        });
        

        export var RTTI_MedicinalProductUndesirableEffect_Population:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProductUndesirableEffect_Population = t.TypeOf<typeof RTTI_MedicinalProductUndesirableEffect_Population>;
        
        