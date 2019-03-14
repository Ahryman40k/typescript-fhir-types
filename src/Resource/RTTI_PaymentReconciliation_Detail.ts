
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Money} from './RTTI_Money';




        const mandatory = t.type({
           type: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
request: RTTI_Reference,
response: RTTI_Reference,
submitter: RTTI_Reference,
payee: RTTI_Reference,
date: t.string,
_date: RTTI_Element,
amount: RTTI_Money
        });
        

        export var RTTI_PaymentReconciliation_Detail:any = t.intersection([mandatory, partial]);
        

export type IPaymentReconciliation_Detail = t.TypeOf<typeof RTTI_PaymentReconciliation_Detail>;
        
        