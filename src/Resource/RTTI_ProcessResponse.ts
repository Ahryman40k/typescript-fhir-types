
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_ProcessResponse_ProcessNote} from './RTTI_ProcessResponse_ProcessNote';




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
created: t.string,
_created: RTTI_Element,
organization: RTTI_Reference,
request: RTTI_Reference,
outcome: t.string,
_outcome: RTTI_Element,
disposition: t.string,
_disposition: RTTI_Element,
requestProvider: RTTI_Reference,
form: RTTI_CodeableConcept,
processNote: t.array(RTTI_ProcessResponse_ProcessNote),
error: t.array(RTTI_CodeableConcept),
communicationRequest: t.array(RTTI_Reference)
        });
        

        export var RTTI_ProcessResponse:any = t.intersection([mandatory, partial]);
        

export type IProcessResponse = t.TypeOf<typeof RTTI_ProcessResponse>;
        
        