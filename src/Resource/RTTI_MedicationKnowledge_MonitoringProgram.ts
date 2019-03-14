
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: RTTI_CodeableConcept,
name: t.string,
_name: RTTI_Element
        });
        

        export var RTTI_MedicationKnowledge_MonitoringProgram:any = t.intersection([mandatory, partial]);
        

export type IMedicationKnowledge_MonitoringProgram = t.TypeOf<typeof RTTI_MedicationKnowledge_MonitoringProgram>;
        
        