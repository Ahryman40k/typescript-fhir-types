
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_ClaimResponse_Item} from './RTTI_ClaimResponse_Item';
import {RTTI_ClaimResponse_AddItem} from './RTTI_ClaimResponse_AddItem';
import {RTTI_ClaimResponse_Error} from './RTTI_ClaimResponse_Error';
import {RTTI_ClaimResponse_Total} from './RTTI_ClaimResponse_Total';
import {RTTI_ClaimResponse_Payment} from './RTTI_ClaimResponse_Payment';
import {RTTI_Coding} from './RTTI_Coding';
import {RTTI_ClaimResponse_ProcessNote} from './RTTI_ClaimResponse_ProcessNote';
import {RTTI_ClaimResponse_Insurance} from './RTTI_ClaimResponse_Insurance';




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
type: RTTI_CodeableConcept,
subType: RTTI_CodeableConcept,
use: t.string,
_use: RTTI_Element,
patient: RTTI_Reference,
created: t.string,
_created: RTTI_Element,
insurer: RTTI_Reference,
requestProvider: RTTI_Reference,
request: RTTI_Reference,
outcome: t.string,
_outcome: RTTI_Element,
disposition: t.string,
_disposition: RTTI_Element,
preAuthRef: t.string,
_preAuthRef: RTTI_Element,
payeeType: RTTI_CodeableConcept,
item: t.array(RTTI_ClaimResponse_Item),
addItem: t.array(RTTI_ClaimResponse_AddItem),
error: t.array(RTTI_ClaimResponse_Error),
total: t.array(RTTI_ClaimResponse_Total),
payment: RTTI_ClaimResponse_Payment,
reserved: RTTI_Coding,
form: RTTI_CodeableConcept,
processNote: t.array(RTTI_ClaimResponse_ProcessNote),
communicationRequest: t.array(RTTI_Reference),
insurance: t.array(RTTI_ClaimResponse_Insurance)
        });
        

        export var RTTI_ClaimResponse:any = t.intersection([mandatory, partial]);
        

export type IClaimResponse = t.TypeOf<typeof RTTI_ClaimResponse>;
        
        