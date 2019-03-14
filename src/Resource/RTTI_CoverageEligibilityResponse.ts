
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_CoverageEligibilityResponse_Insurance} from './RTTI_CoverageEligibilityResponse_Insurance';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_CoverageEligibilityResponse_Error} from './RTTI_CoverageEligibilityResponse_Error';

export enum CoverageEligibilityResponsePurposeKind {
                authRequirements = 'authRequirements',
benefits = 'benefits',
discovery = 'discovery',
validation = 'validation'
            }
export enum CoverageEligibilityResponseOutcomeKind {
                queued = 'queued',
complete = 'complete',
error = 'error',
partial = 'partial'
            }
const CoverageEligibilityResponsePurposeKindKeys = t.keyof({
                [CoverageEligibilityResponsePurposeKind.authRequirements]: null,
[CoverageEligibilityResponsePurposeKind.benefits]: null,
[CoverageEligibilityResponsePurposeKind.discovery]: null,
[CoverageEligibilityResponsePurposeKind.validation]: null
            });
const CoverageEligibilityResponseOutcomeKindKeys = t.keyof({
                [CoverageEligibilityResponseOutcomeKind.queued]: null,
[CoverageEligibilityResponseOutcomeKind.complete]: null,
[CoverageEligibilityResponseOutcomeKind.error]: null,
[CoverageEligibilityResponseOutcomeKind.partial]: null
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
purpose: t.array(CoverageEligibilityResponsePurposeKindKeys),
_purpose: t.array(RTTI_Element),
patient: RTTI_Reference,
servicedDate: t.string,
_servicedDate: RTTI_Element,
servicedPeriod: RTTI_Period,
created: t.string,
_created: RTTI_Element,
requestProvider: RTTI_Reference,
request: RTTI_Reference,
outcome: CoverageEligibilityResponseOutcomeKindKeys,
_outcome: RTTI_Element,
disposition: t.string,
_disposition: RTTI_Element,
insurer: RTTI_Reference,
insurance: t.array(RTTI_CoverageEligibilityResponse_Insurance),
preAuthRef: t.string,
_preAuthRef: RTTI_Element,
form: RTTI_CodeableConcept,
error: t.array(RTTI_CoverageEligibilityResponse_Error)
        });
        

        export var RTTI_CoverageEligibilityResponse:any = t.intersection([mandatory, partial]);
        

export type ICoverageEligibilityResponse = t.TypeOf<typeof RTTI_CoverageEligibilityResponse>;
        
        