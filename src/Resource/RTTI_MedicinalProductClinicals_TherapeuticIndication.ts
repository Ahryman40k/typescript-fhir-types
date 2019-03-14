
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_MedicinalProductClinicals_UndesirableEffects} from './RTTI_MedicinalProductClinicals_UndesirableEffects';
import {RTTI_MedicinalProductClinicals_OtherTherapy} from './RTTI_MedicinalProductClinicals_OtherTherapy';
import {RTTI_MedicinalProductClinicals_Population} from './RTTI_MedicinalProductClinicals_Population';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
diseaseSymptomProcedure: RTTI_CodeableConcept,
diseaseStatus: RTTI_CodeableConcept,
comorbidity: t.array(RTTI_CodeableConcept),
intendedEffect: RTTI_CodeableConcept,
duration: RTTI_Quantity,
undesirableEffects: t.array(RTTI_MedicinalProductClinicals_UndesirableEffects),
otherTherapy: t.array(RTTI_MedicinalProductClinicals_OtherTherapy),
population: t.array(RTTI_MedicinalProductClinicals_Population)
        });
        

        export var RTTI_MedicinalProductClinicals_TherapeuticIndication:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProductClinicals_TherapeuticIndication = t.TypeOf<typeof RTTI_MedicinalProductClinicals_TherapeuticIndication>;
        
        