
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Timing} from './RTTI_Timing';
import {RTTI_Dosage_DoseAndRate} from './RTTI_Dosage_DoseAndRate';
import {RTTI_Ratio} from './RTTI_Ratio';
import {RTTI_Quantity} from './RTTI_Quantity';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
sequence: t.number,
_sequence: RTTI_Element,
text: t.string,
_text: RTTI_Element,
additionalInstruction: t.array(RTTI_CodeableConcept),
patientInstruction: t.string,
_patientInstruction: RTTI_Element,
timing: RTTI_Timing,
asNeededBoolean: t.boolean,
_asNeededBoolean: RTTI_Element,
asNeededCodeableConcept: RTTI_CodeableConcept,
site: RTTI_CodeableConcept,
route: RTTI_CodeableConcept,
method: RTTI_CodeableConcept,
doseAndRate: t.array(RTTI_Dosage_DoseAndRate),
maxDosePerPeriod: RTTI_Ratio,
maxDosePerAdministration: RTTI_Quantity,
maxDosePerLifetime: RTTI_Quantity
        });
        

        export var RTTI_Dosage:any = t.intersection([mandatory, partial]);
        

export type IDosage = t.TypeOf<typeof RTTI_Dosage>;
        
        