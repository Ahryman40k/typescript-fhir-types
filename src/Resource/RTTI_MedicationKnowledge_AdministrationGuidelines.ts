
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_MedicationKnowledge_Dosage} from './RTTI_MedicationKnowledge_Dosage';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_MedicationKnowledge_PatientCharacteristics} from './RTTI_MedicationKnowledge_PatientCharacteristics';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
dosage: t.array(RTTI_MedicationKnowledge_Dosage),
indicationCodeableConcept: RTTI_CodeableConcept,
indicationReference: RTTI_Reference,
patientCharacteristics: t.array(RTTI_MedicationKnowledge_PatientCharacteristics)
        });
        

        export var RTTI_MedicationKnowledge_AdministrationGuidelines:any = t.intersection([mandatory, partial]);
        

export type IMedicationKnowledge_AdministrationGuidelines = t.TypeOf<typeof RTTI_MedicationKnowledge_AdministrationGuidelines>;
        
        