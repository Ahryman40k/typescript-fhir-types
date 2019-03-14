
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';




        const mandatory = t.type({
           code: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
status: RTTI_CodeableConcept
        });
        

        export var RTTI_MedicinalProductPharmaceutical_Characteristics:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProductPharmaceutical_Characteristics = t.TypeOf<typeof RTTI_MedicinalProductPharmaceutical_Characteristics>;
        
        