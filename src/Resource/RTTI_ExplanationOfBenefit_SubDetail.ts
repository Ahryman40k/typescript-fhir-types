
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Money} from './RTTI_Money';
import {RTTI_Reference} from './RTTI_Reference';

import {RTTI_ExplanationOfBenefit_Adjudication} from './RTTI_ExplanationOfBenefit_Adjudication';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
sequence: t.number,
_sequence: RTTI_Element,
revenue: RTTI_CodeableConcept,
category: RTTI_CodeableConcept,
billcode: RTTI_CodeableConcept,
modifier: t.array(RTTI_CodeableConcept),
programCode: t.array(RTTI_CodeableConcept),
quantity: RTTI_Quantity,
unitPrice: RTTI_Money,
factor: t.number,
_factor: RTTI_Element,
net: RTTI_Money,
udi: t.array(RTTI_Reference),
noteNumber: t.array(t.number),
_noteNumber: t.array(RTTI_Element),
adjudication: t.array(RTTI_ExplanationOfBenefit_Adjudication)
        });
        

        export var RTTI_ExplanationOfBenefit_SubDetail:any = t.intersection([mandatory, partial]);
        

export type IExplanationOfBenefit_SubDetail = t.TypeOf<typeof RTTI_ExplanationOfBenefit_SubDetail>;
        
        