
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';

import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Money} from './RTTI_Money';
import {RTTI_CoverageEligibilityRequest_Diagnosis} from './RTTI_CoverageEligibilityRequest_Diagnosis';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
supportingInformationSequence: t.array(t.number),
_supportingInformationSequence: t.array(RTTI_Element),
category: RTTI_CodeableConcept,
billcode: RTTI_CodeableConcept,
modifier: t.array(RTTI_CodeableConcept),
provider: RTTI_Reference,
quantity: RTTI_Quantity,
unitPrice: RTTI_Money,
facility: RTTI_Reference,
diagnosis: t.array(RTTI_CoverageEligibilityRequest_Diagnosis),
detail: t.array(RTTI_Reference)
        });
        

        export var RTTI_CoverageEligibilityRequest_Item:any = t.intersection([mandatory, partial]);
        

export type ICoverageEligibilityRequest_Item = t.TypeOf<typeof RTTI_CoverageEligibilityRequest_Item>;
        
        