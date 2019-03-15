
import * as t from 'io-ts';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_Period, IPeriod} from './RTTI_Period';
import {RTTI_CoverageEligibilityRequest_SupportingInformation, ICoverageEligibilityRequest_SupportingInformation} from './RTTI_CoverageEligibilityRequest_SupportingInformation';
import {RTTI_CoverageEligibilityRequest_Insurance, ICoverageEligibilityRequest_Insurance} from './RTTI_CoverageEligibilityRequest_Insurance';
import {RTTI_CoverageEligibilityRequest_Item, ICoverageEligibilityRequest_Item} from './RTTI_CoverageEligibilityRequest_Item';

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


            export interface ICoverageEligibilityRequest {
                
                    /**
                     * This is a CoverageEligibilityRequest resource
                     */
                    resourceType: 'CoverageEligibilityRequest'
                    
                
                    /**
                     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                     */
                    id? : string;
                    

                    /**
                     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                     */
                    meta? : IMeta;
                    

                    /**
                     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                     */
                    implicitRules? : string;
                    

                    /**
                     * Extensions for implicitRules
                     */
                    _implicitRules? : IElement;
                    

                    /**
                     * The base language in which the resource is written.
                     */
                    language? : string;
                    

                    /**
                     * Extensions for language
                     */
                    _language? : IElement;
                    

                    /**
                     * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                     */
                    text? : INarrative;
                    

                    /**
                     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                     */
                    contained? : IResourceList[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * The Response business identifier.
                     */
                    identifier? : IIdentifier[];
                    

                    /**
                     * The status of the resource instance.
                     */
                    status? : string;
                    

                    /**
                     * Extensions for status
                     */
                    _status? : IElement;
                    

                    /**
                     * Immediate (STAT), best effort (NORMAL), deferred (DEFER).
                     */
                    priority? : ICodeableConcept;
                    

                    /**
                     * Specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for th patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
                     */
                    purpose? : CoverageEligibilityRequestPurposeKind[];
                    

                    /**
                     * Extensions for purpose
                     */
                    _purpose? : IElement[];
                    

                    /**
                     * Patient Resource.
                     */
                    patient? : IReference;
                    

                    /**
                     * The date or dates when the enclosed suite of services were performed or completed.
                     */
                    servicedDate? : string;
                    

                    /**
                     * Extensions for servicedDate
                     */
                    _servicedDate? : IElement;
                    

                    /**
                     * The date or dates when the enclosed suite of services were performed or completed.
                     */
                    servicedPeriod? : IPeriod;
                    

                    /**
                     * The date when this resource was created.
                     */
                    created? : string;
                    

                    /**
                     * Extensions for created
                     */
                    _created? : IElement;
                    

                    /**
                     * Person who created the invoice/claim/pre-determination or pre-authorization.
                     */
                    enterer? : IReference;
                    

                    /**
                     * The provider who is responsible for the services rendered to the patient.
                     */
                    provider? : IReference;
                    

                    /**
                     * The Insurer who is target  of the request.
                     */
                    insurer? : IReference;
                    

                    /**
                     * Facility where the services were provided.
                     */
                    facility? : IReference;
                    

                    /**
                     * Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. Often there are mutiple jurisdiction specific valuesets which are required.
                     */
                    supportingInformation? : ICoverageEligibilityRequest_SupportingInformation[];
                    

                    /**
                     * Insurance policies which the patient has advised may be applicable for paying for health services.
                     */
                    insurance? : ICoverageEligibilityRequest_Insurance[];
                    

                    /**
                     * A list of service types or billable services for which bebefit details and/or an authorization prior to service delivery may be required by the payor.
                     */
                    item? : ICoverageEligibilityRequest_Item[];
                    
            }
        


        export const RTTI_CoverageEligibilityRequest: t.Type<ICoverageEligibilityRequest> = t.recursion( 'ICoverageEligibilityRequest', () =>
            t.intersection([
                
        t.type({
           resourceType: t.literal('CoverageEligibilityRequest')
        })
        ,
                
        t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
text: RTTI_Narrative,
contained: t.array(RTTI_ResourceList),
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
        })
        
            ])
        );
        

        