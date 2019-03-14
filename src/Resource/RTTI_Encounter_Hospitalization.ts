
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
preAdmissionIdentifier: RTTI_Identifier,
origin: RTTI_Reference,
admitSource: RTTI_CodeableConcept,
reAdmission: RTTI_CodeableConcept,
dietPreference: t.array(RTTI_CodeableConcept),
specialCourtesy: t.array(RTTI_CodeableConcept),
specialArrangement: t.array(RTTI_CodeableConcept),
destination: RTTI_Reference,
dischargeDisposition: RTTI_CodeableConcept
        });
        

        export var RTTI_Encounter_Hospitalization:any = t.intersection([mandatory, partial]);
        

export type IEncounter_Hospitalization = t.TypeOf<typeof RTTI_Encounter_Hospitalization>;
        
        