
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_MedicinalProductPharmaceutical_WithdrawalPeriod} from './RTTI_MedicinalProductPharmaceutical_WithdrawalPeriod';




        const mandatory = t.type({
           code: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
withdrawalPeriod: t.array(RTTI_MedicinalProductPharmaceutical_WithdrawalPeriod)
        });
        

        export var RTTI_MedicinalProductPharmaceutical_TargetSpecies:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProductPharmaceutical_TargetSpecies = t.TypeOf<typeof RTTI_MedicinalProductPharmaceutical_TargetSpecies>;
        
        