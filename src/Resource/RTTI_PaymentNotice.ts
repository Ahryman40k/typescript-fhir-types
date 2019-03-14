
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';




        const mandatory = t.type({
           resourceType: t.string
        });
        

        const partial = t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
text: RTTI_Narrative,
contained: t.array(ResourceList),
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: t.array(RTTI_Identifier),
status: t.string,
_status: RTTI_Element,
request: RTTI_Reference,
response: RTTI_Reference,
statusDate: t.string,
_statusDate: RTTI_Element,
created: t.string,
_created: RTTI_Element,
target: RTTI_Reference,
provider: RTTI_Reference,
paymentStatus: RTTI_CodeableConcept
        });
        

        export var RTTI_PaymentNotice:any = t.intersection([mandatory, partial]);
        

export type IPaymentNotice = t.TypeOf<typeof RTTI_PaymentNotice>;
        
        