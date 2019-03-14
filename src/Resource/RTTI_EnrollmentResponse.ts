
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Reference} from './RTTI_Reference';

export enum EnrollmentResponseOutcomeKind {
                queued = 'queued',
complete = 'complete',
error = 'error',
partial = 'partial'
            }
const EnrollmentResponseOutcomeKindKeys = t.keyof({
                [EnrollmentResponseOutcomeKind.queued]: null,
[EnrollmentResponseOutcomeKind.complete]: null,
[EnrollmentResponseOutcomeKind.error]: null,
[EnrollmentResponseOutcomeKind.partial]: null
            });


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
outcome: EnrollmentResponseOutcomeKindKeys,
_outcome: RTTI_Element,
disposition: t.string,
_disposition: RTTI_Element,
created: t.string,
_created: RTTI_Element,
organization: RTTI_Reference,
requestProvider: RTTI_Reference
        });
        

        export var RTTI_EnrollmentResponse:any = t.intersection([mandatory, partial]);
        

export type IEnrollmentResponse = t.TypeOf<typeof RTTI_EnrollmentResponse>;
        
        