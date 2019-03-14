
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Contract_Party} from './RTTI_Contract_Party';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Contract_Answer} from './RTTI_Contract_Answer';
import {RTTI_Element} from './RTTI_Element';






        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: t.array(RTTI_Identifier),
party: t.array(RTTI_Contract_Party),
topic: RTTI_Reference,
type: RTTI_CodeableConcept,
decision: RTTI_CodeableConcept,
decisionMode: t.array(RTTI_CodeableConcept),
answer: t.array(RTTI_Contract_Answer),
text: t.string,
_text: RTTI_Element,
linkId: t.array(t.string),
_linkId: t.array(RTTI_Element),
securityLabelNumber: t.array(t.number),
_securityLabelNumber: t.array(RTTI_Element)
        });
        

        export var RTTI_Contract_Offer:any = t.intersection([mandatory, partial]);
        

export type IContract_Offer = t.TypeOf<typeof RTTI_Contract_Offer>;
        
        