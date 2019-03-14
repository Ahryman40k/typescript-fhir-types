
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_MedicinalProductClinicals_TherapeuticIndication} from './RTTI_MedicinalProductClinicals_TherapeuticIndication';
import {RTTI_MedicinalProductClinicals_OtherTherapy} from './RTTI_MedicinalProductClinicals_OtherTherapy';
import {RTTI_MedicinalProductClinicals_Population} from './RTTI_MedicinalProductClinicals_Population';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
disease: RTTI_CodeableConcept,
diseaseStatus: RTTI_CodeableConcept,
comorbidity: t.array(RTTI_CodeableConcept),
therapeuticIndication: t.array(RTTI_MedicinalProductClinicals_TherapeuticIndication),
otherTherapy: t.array(RTTI_MedicinalProductClinicals_OtherTherapy),
population: t.array(RTTI_MedicinalProductClinicals_Population)
        });
        

        export var RTTI_MedicinalProductClinicals_Contraindication:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProductClinicals_Contraindication = t.TypeOf<typeof RTTI_MedicinalProductClinicals_Contraindication>;
        
        