
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_MedicinalProductClinicals_Population} from './RTTI_MedicinalProductClinicals_Population';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
symptomConditionEffect: RTTI_CodeableConcept,
classification: RTTI_CodeableConcept,
frequencyOfOccurrence: RTTI_CodeableConcept,
population: t.array(RTTI_MedicinalProductClinicals_Population)
        });
        

        export var RTTI_MedicinalProductClinicals_UndesirableEffects:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProductClinicals_UndesirableEffects = t.TypeOf<typeof RTTI_MedicinalProductClinicals_UndesirableEffects>;
        
        