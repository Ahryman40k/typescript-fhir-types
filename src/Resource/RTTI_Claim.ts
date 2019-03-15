
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
import {RTTI_Claim_Related, IClaim_Related} from './RTTI_Claim_Related';
import {RTTI_Claim_Payee, IClaim_Payee} from './RTTI_Claim_Payee';
import {RTTI_Claim_CareTeam, IClaim_CareTeam} from './RTTI_Claim_CareTeam';
import {RTTI_Claim_Information, IClaim_Information} from './RTTI_Claim_Information';
import {RTTI_Claim_Diagnosis, IClaim_Diagnosis} from './RTTI_Claim_Diagnosis';
import {RTTI_Claim_Procedure, IClaim_Procedure} from './RTTI_Claim_Procedure';
import {RTTI_Claim_Insurance, IClaim_Insurance} from './RTTI_Claim_Insurance';
import {RTTI_Claim_Accident, IClaim_Accident} from './RTTI_Claim_Accident';
import {RTTI_Claim_Item, IClaim_Item} from './RTTI_Claim_Item';
import {RTTI_Money, IMoney} from './RTTI_Money';

export enum ClaimUseKind {
                claim = 'claim',
preauthorization = 'preauthorization',
predetermination = 'predetermination'
            }
const ClaimUseKindKeys = t.keyof({
                [ClaimUseKind.claim]: null,
[ClaimUseKind.preauthorization]: null,
[ClaimUseKind.predetermination]: null
            });


            export interface IClaim {
                
                    /**
                     * This is a Claim resource
                     */
                    resourceType: 'Claim'
                    
                
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
                     * The business identifier for the instance: claim number, pre-determination or pre-authorization number.
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
                     * The category of claim, e.g. oral, pharmacy, vision, institutional, professional.
                     */
                    type? : ICodeableConcept;
                    

                    /**
                     * A finer grained suite of claim subtype codes which may convey Inpatient vs Outpatient and/or a specialty service. In the US the CMS Bill Type.
                     */
                    subType? : ICodeableConcept;
                    

                    /**
                     * A claim, a list of completed goods and services; a preauthorization, a list or proposed goods and services; or a predetermination, a set of goods and services being considered, for which insurer adjudication is sought.
                     */
                    use? : ClaimUseKind;
                    

                    /**
                     * Extensions for use
                     */
                    _use? : IElement;
                    

                    /**
                     * Patient Resource.
                     */
                    patient? : IReference;
                    

                    /**
                     * The billable period for which charges are being submitted.
                     */
                    billablePeriod? : IPeriod;
                    

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
                     * The Insurer who is target of the request.
                     */
                    insurer? : IReference;
                    

                    /**
                     * The provider which is responsible for the bill, claim pre-determination, pre-authorization.
                     */
                    provider? : IReference;
                    

                    /**
                     * Immediate (STAT), best effort (NORMAL), deferred (DEFER).
                     */
                    priority? : ICodeableConcept;
                    

                    /**
                     * In the case of a Pre-Determination/Pre-Authorization the provider may request that funds in the amount of the expected Benefit be reserved ('Patient' or 'Provider') to pay for the Benefits determined on the subsequent claim(s). 'None' explicitly indicates no funds reserving is requested.
                     */
                    fundsReserve? : ICodeableConcept;
                    

                    /**
                     * Other claims which are related to this claim such as prior claim versions or for related services.
                     */
                    related? : IClaim_Related[];
                    

                    /**
                     * Prescription to support the dispensing of Pharmacy or Vision products.
                     */
                    prescription? : IReference;
                    

                    /**
                     * Original prescription which has been superseded by this prescription to support the dispensing of pharmacy services, medications or products. For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefor issues a new prescription for an alternate medication which has the same therapeutic intent. The prescription from the pharmacy becomes the 'prescription' and that from the physician becomes the 'original prescription'.
                     */
                    originalPrescription? : IReference;
                    

                    /**
                     * The party to be reimbursed for the services.
                     */
                    payee? : IClaim_Payee;
                    

                    /**
                     * The referral resource which lists the date, practitioner, reason and other supporting information.
                     */
                    referral? : IReference;
                    

                    /**
                     * Facility where the services were provided.
                     */
                    facility? : IReference;
                    

                    /**
                     * The members of the team who provided the overall service as well as their role and whether responsible and qualifications.
                     */
                    careTeam? : IClaim_CareTeam[];
                    

                    /**
                     * Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. Often there are multiple jurisdiction specific valuesets which are required.
                     */
                    information? : IClaim_Information[];
                    

                    /**
                     * List of patient diagnosis for which care is sought.
                     */
                    diagnosis? : IClaim_Diagnosis[];
                    

                    /**
                     * Ordered list of patient procedures performed to support the adjudication.
                     */
                    procedure? : IClaim_Procedure[];
                    

                    /**
                     * Financial instrument by which payment information for health care.
                     */
                    insurance? : IClaim_Insurance[];
                    

                    /**
                     * An accident which resulted in the need for healthcare services.
                     */
                    accident? : IClaim_Accident;
                    

                    /**
                     * First tier of goods and services.
                     */
                    item? : IClaim_Item[];
                    

                    /**
                     * The total value of the claim.
                     */
                    total? : IMoney;
                    
            }
        


        export const RTTI_Claim: t.Type<IClaim> = t.recursion( 'IClaim', () =>
            t.intersection([
                
        t.type({
           resourceType: t.literal( 'Claim')
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
type: RTTI_CodeableConcept,
subType: RTTI_CodeableConcept,
use: ClaimUseKindKeys,
_use: RTTI_Element,
patient: RTTI_Reference,
billablePeriod: RTTI_Period,
created: t.string,
_created: RTTI_Element,
enterer: RTTI_Reference,
insurer: RTTI_Reference,
provider: RTTI_Reference,
priority: RTTI_CodeableConcept,
fundsReserve: RTTI_CodeableConcept,
related: t.array(RTTI_Claim_Related),
prescription: RTTI_Reference,
originalPrescription: RTTI_Reference,
payee: RTTI_Claim_Payee,
referral: RTTI_Reference,
facility: RTTI_Reference,
careTeam: t.array(RTTI_Claim_CareTeam),
information: t.array(RTTI_Claim_Information),
diagnosis: t.array(RTTI_Claim_Diagnosis),
procedure: t.array(RTTI_Claim_Procedure),
insurance: t.array(RTTI_Claim_Insurance),
accident: RTTI_Claim_Accident,
item: t.array(RTTI_Claim_Item),
total: RTTI_Money
        })
        
            ])
        );
        

        