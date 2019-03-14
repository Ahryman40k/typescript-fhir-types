
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Ratio} from './RTTI_Ratio';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           strength: RTTI_Ratio
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
substance: RTTI_CodeableConcept,
measurementPoint: t.string,
_measurementPoint: RTTI_Element,
country: t.array(RTTI_CodeableConcept)
        });
        

        export var RTTI_MedicinalProductIngredient_ReferenceStrength:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProductIngredient_ReferenceStrength = t.TypeOf<typeof RTTI_MedicinalProductIngredient_ReferenceStrength>;
        
        