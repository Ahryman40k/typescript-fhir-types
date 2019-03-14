
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Contract_SecurityLabel} from './RTTI_Contract_SecurityLabel';
import {RTTI_Contract_Offer} from './RTTI_Contract_Offer';
import {RTTI_Contract_Asset} from './RTTI_Contract_Asset';
import {RTTI_Contract_Action} from './RTTI_Contract_Action';




        const mandatory = t.type({
           offer: RTTI_Contract_Offer
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: RTTI_Identifier,
issued: t.string,
_issued: RTTI_Element,
applies: RTTI_Period,
topicCodeableConcept: RTTI_CodeableConcept,
topicReference: RTTI_Reference,
type: RTTI_CodeableConcept,
subType: RTTI_CodeableConcept,
text: t.string,
_text: RTTI_Element,
securityLabel: t.array(RTTI_Contract_SecurityLabel),
asset: t.array(RTTI_Contract_Asset),
action: t.array(RTTI_Contract_Action),
group: t.array(RTTI_Contract_Term)
        });
        

        export var RTTI_Contract_Term:any = t.intersection([mandatory, partial]);
        

export type IContract_Term = t.TypeOf<typeof RTTI_Contract_Term>;
        
        