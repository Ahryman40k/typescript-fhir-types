
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_MedicinalProductIngredient_Strength} from './RTTI_MedicinalProductIngredient_Strength';




        const mandatory = t.type({
           code: RTTI_CodeableConcept,
group: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
confidentiality: RTTI_CodeableConcept,
strength: t.array(RTTI_MedicinalProductIngredient_Strength)
        });
        

        export var RTTI_MedicinalProductIngredient_SpecifiedSubstance:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProductIngredient_SpecifiedSubstance = t.TypeOf<typeof RTTI_MedicinalProductIngredient_SpecifiedSubstance>;
        
        