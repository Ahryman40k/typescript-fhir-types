
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Money} from './RTTI_Money';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Identifier} from './RTTI_Identifier';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: RTTI_CodeableConcept,
adjustment: RTTI_Money,
adjustmentReason: RTTI_CodeableConcept,
date: t.string,
_date: RTTI_Element,
amount: RTTI_Money,
identifier: RTTI_Identifier
        });
        

        export var RTTI_ClaimResponse_Payment:any = t.intersection([mandatory, partial]);
        

export type IClaimResponse_Payment = t.TypeOf<typeof RTTI_ClaimResponse_Payment>;
        
        