
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_CoverageEligibilityRequest_SupportingInformation} from './RTTI_CoverageEligibilityRequest_SupportingInformation';
import {RTTI_CoverageEligibilityRequest_Insurance} from './RTTI_CoverageEligibilityRequest_Insurance';
import {RTTI_CoverageEligibilityRequest_Item} from './RTTI_CoverageEligibilityRequest_Item';

export enum CoverageEligibilityRequestPurposeKind {
                authRequirements = 'authRequirements',
benefits = 'benefits',
discovery = 'discovery',
validation = 'validation'
            }
const CoverageEligibilityRequestPurposeKindKeys = t.keyof({
                [CoverageEligibilityRequestPurposeKind.authRequirements]: null,
[CoverageEligibilityRequestPurposeKind.benefits]: null,
[CoverageEligibilityRequestPurposeKind.discovery]: null,
[CoverageEligibilityRequestPurposeKind.validation]: null
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
priority: RTTI_CodeableConcept,
purpose: t.array(CoverageEligibilityRequestPurposeKindKeys),
_purpose: t.array(RTTI_Element),
patient: RTTI_Reference,
servicedDate: t.string,
_servicedDate: RTTI_Element,
servicedPeriod: RTTI_Period,
created: t.string,
_created: RTTI_Element,
enterer: RTTI_Reference,
provider: RTTI_Reference,
insurer: RTTI_Reference,
facility: RTTI_Reference,
supportingInformation: t.array(RTTI_CoverageEligibilityRequest_SupportingInformation),
insurance: t.array(RTTI_CoverageEligibilityRequest_Insurance),
item: t.array(RTTI_CoverageEligibilityRequest_Item)
        });
        

        export var RTTI_CoverageEligibilityRequest:any = t.intersection([mandatory, partial]);
        

export type ICoverageEligibilityRequest = t.TypeOf<typeof RTTI_CoverageEligibilityRequest>;
        
        