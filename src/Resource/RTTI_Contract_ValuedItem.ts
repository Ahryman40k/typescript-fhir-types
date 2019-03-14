
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Money} from './RTTI_Money';






        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
entityCodeableConcept: RTTI_CodeableConcept,
entityReference: RTTI_Reference,
identifier: RTTI_Identifier,
effectiveTime: t.string,
_effectiveTime: RTTI_Element,
quantity: RTTI_Quantity,
unitPrice: RTTI_Money,
factor: t.number,
_factor: RTTI_Element,
points: t.number,
_points: RTTI_Element,
net: RTTI_Money,
payment: t.string,
_payment: RTTI_Element,
paymentDate: t.string,
_paymentDate: RTTI_Element,
responsible: RTTI_Reference,
recipient: RTTI_Reference,
linkId: t.array(t.string),
_linkId: t.array(RTTI_Element),
securityLabelNumber: t.array(t.number),
_securityLabelNumber: t.array(RTTI_Element)
        });
        

        export var RTTI_Contract_ValuedItem:any = t.intersection([mandatory, partial]);
        

export type IContract_ValuedItem = t.TypeOf<typeof RTTI_Contract_ValuedItem>;
        
        