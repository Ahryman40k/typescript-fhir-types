
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Attachment} from './RTTI_Attachment';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Coding} from './RTTI_Coding';




        const mandatory = t.type({
           category: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
sequence: t.number,
_sequence: RTTI_Element,
code: RTTI_CodeableConcept,
timingDate: t.string,
_timingDate: RTTI_Element,
timingPeriod: RTTI_Period,
valueBoolean: t.boolean,
_valueBoolean: RTTI_Element,
valueString: t.string,
_valueString: RTTI_Element,
valueQuantity: RTTI_Quantity,
valueAttachment: RTTI_Attachment,
valueReference: RTTI_Reference,
reason: RTTI_Coding
        });
        

        export var RTTI_ExplanationOfBenefit_Information:any = t.intersection([mandatory, partial]);
        

export type IExplanationOfBenefit_Information = t.TypeOf<typeof RTTI_ExplanationOfBenefit_Information>;
        
        