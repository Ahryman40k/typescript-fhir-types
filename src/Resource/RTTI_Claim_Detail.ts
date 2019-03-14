
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Money} from './RTTI_Money';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Claim_SubDetail} from './RTTI_Claim_SubDetail';




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
subDetail: t.array(RTTI_Claim_SubDetail)
        });
        

        export var RTTI_Claim_Detail:any = t.intersection([mandatory, partial]);
        

export type IClaim_Detail = t.TypeOf<typeof RTTI_Claim_Detail>;
        
        