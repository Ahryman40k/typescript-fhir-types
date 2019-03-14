
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Ratio} from './RTTI_Ratio';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_MedicinalProductIngredient_ReferenceStrength} from './RTTI_MedicinalProductIngredient_ReferenceStrength';




        const mandatory = t.type({
           presentation: RTTI_Ratio
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
presentationLowLimit: RTTI_Ratio,
concentration: RTTI_Ratio,
concentrationLowLimit: RTTI_Ratio,
measurementPoint: t.string,
_measurementPoint: RTTI_Element,
country: t.array(RTTI_CodeableConcept),
referenceStrength: t.array(RTTI_MedicinalProductIngredient_ReferenceStrength)
        });
        

        export var RTTI_MedicinalProductIngredient_Strength:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProductIngredient_Strength = t.TypeOf<typeof RTTI_MedicinalProductIngredient_Strength>;
        
        