
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Ratio} from './RTTI_Ratio';
import {RTTI_Duration} from './RTTI_Duration';
import {RTTI_MedicinalProductPharmaceutical_TargetSpecies} from './RTTI_MedicinalProductPharmaceutical_TargetSpecies';




        const mandatory = t.type({
           code: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
firstDose: RTTI_Quantity,
maxSingleDose: RTTI_Quantity,
maxDosePerDay: RTTI_Quantity,
maxDosePerTreatmentPeriod: RTTI_Ratio,
maxTreatmentPeriod: RTTI_Duration,
targetSpecies: t.array(RTTI_MedicinalProductPharmaceutical_TargetSpecies)
        });
        

        export var RTTI_MedicinalProductPharmaceutical_RouteOfAdministration:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProductPharmaceutical_RouteOfAdministration = t.TypeOf<typeof RTTI_MedicinalProductPharmaceutical_RouteOfAdministration>;
        
        