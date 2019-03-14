
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';

import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Address} from './RTTI_Address';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Money} from './RTTI_Money';
import {RTTI_ExplanationOfBenefit_Adjudication} from './RTTI_ExplanationOfBenefit_Adjudication';
import {RTTI_ExplanationOfBenefit_Detail1} from './RTTI_ExplanationOfBenefit_Detail1';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
itemSequence: t.array(t.number),
_itemSequence: t.array(RTTI_Element),
detailSequence: t.array(t.number),
_detailSequence: t.array(RTTI_Element),
subDetailSequence: t.array(t.number),
_subDetailSequence: t.array(RTTI_Element),
provider: t.array(RTTI_Reference),
billcode: RTTI_CodeableConcept,
modifier: t.array(RTTI_CodeableConcept),
programCode: t.array(RTTI_CodeableConcept),
servicedDate: t.string,
_servicedDate: RTTI_Element,
servicedPeriod: RTTI_Period,
locationCodeableConcept: RTTI_CodeableConcept,
locationAddress: RTTI_Address,
locationReference: RTTI_Reference,
quantity: RTTI_Quantity,
unitPrice: RTTI_Money,
factor: t.number,
_factor: RTTI_Element,
net: RTTI_Money,
bodySite: RTTI_CodeableConcept,
subSite: t.array(RTTI_CodeableConcept),
noteNumber: t.array(t.number),
_noteNumber: t.array(RTTI_Element),
adjudication: t.array(RTTI_ExplanationOfBenefit_Adjudication),
detail: t.array(RTTI_ExplanationOfBenefit_Detail1)
        });
        

        export var RTTI_ExplanationOfBenefit_AddItem:any = t.intersection([mandatory, partial]);
        

export type IExplanationOfBenefit_AddItem = t.TypeOf<typeof RTTI_ExplanationOfBenefit_AddItem>;
        
        