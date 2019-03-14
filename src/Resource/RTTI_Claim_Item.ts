
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Address} from './RTTI_Address';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Money} from './RTTI_Money';
import {RTTI_Claim_Detail} from './RTTI_Claim_Detail';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
sequence: t.number,
_sequence: RTTI_Element,
careTeamSequence: t.array(t.number),
_careTeamSequence: t.array(RTTI_Element),
diagnosisSequence: t.array(t.number),
_diagnosisSequence: t.array(RTTI_Element),
procedureSequence: t.array(t.number),
_procedureSequence: t.array(RTTI_Element),
informationSequence: t.array(t.number),
_informationSequence: t.array(RTTI_Element),
revenue: RTTI_CodeableConcept,
category: RTTI_CodeableConcept,
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
udi: t.array(RTTI_Reference),
bodySite: RTTI_CodeableConcept,
subSite: t.array(RTTI_CodeableConcept),
encounter: t.array(RTTI_Reference),
detail: t.array(RTTI_Claim_Detail)
        });
        

        export var RTTI_Claim_Item:any = t.intersection([mandatory, partial]);
        

export type IClaim_Item = t.TypeOf<typeof RTTI_Claim_Item>;
        
        