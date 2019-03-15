
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
import {RTTI_ExplanationOfBenefit_Related, IExplanationOfBenefit_Related} from './RTTI_ExplanationOfBenefit_Related';
import {RTTI_ExplanationOfBenefit_Payee, IExplanationOfBenefit_Payee} from './RTTI_ExplanationOfBenefit_Payee';
import {RTTI_ExplanationOfBenefit_Information, IExplanationOfBenefit_Information} from './RTTI_ExplanationOfBenefit_Information';
import {RTTI_ExplanationOfBenefit_CareTeam, IExplanationOfBenefit_CareTeam} from './RTTI_ExplanationOfBenefit_CareTeam';
import {RTTI_ExplanationOfBenefit_Diagnosis, IExplanationOfBenefit_Diagnosis} from './RTTI_ExplanationOfBenefit_Diagnosis';
import {RTTI_ExplanationOfBenefit_Procedure, IExplanationOfBenefit_Procedure} from './RTTI_ExplanationOfBenefit_Procedure';
import {RTTI_ExplanationOfBenefit_Insurance, IExplanationOfBenefit_Insurance} from './RTTI_ExplanationOfBenefit_Insurance';
import {RTTI_ExplanationOfBenefit_Accident, IExplanationOfBenefit_Accident} from './RTTI_ExplanationOfBenefit_Accident';
import {RTTI_ExplanationOfBenefit_Item, IExplanationOfBenefit_Item} from './RTTI_ExplanationOfBenefit_Item';
import {RTTI_ExplanationOfBenefit_AddItem, IExplanationOfBenefit_AddItem} from './RTTI_ExplanationOfBenefit_AddItem';
import {RTTI_ExplanationOfBenefit_Total, IExplanationOfBenefit_Total} from './RTTI_ExplanationOfBenefit_Total';
import {RTTI_ExplanationOfBenefit_Payment, IExplanationOfBenefit_Payment} from './RTTI_ExplanationOfBenefit_Payment';
import {RTTI_ExplanationOfBenefit_ProcessNote, IExplanationOfBenefit_ProcessNote} from './RTTI_ExplanationOfBenefit_ProcessNote';
import {RTTI_ExplanationOfBenefit_BenefitBalance, IExplanationOfBenefit_BenefitBalance} from './RTTI_ExplanationOfBenefit_BenefitBalance';

export enum ExplanationOfBenefitStatusKind {
                active = 'active',
cancelled = 'cancelled',
draft = 'draft',
enteredInError = 'enteredInError'
            }
const ExplanationOfBenefitStatusKindKeys = t.keyof({
                [ExplanationOfBenefitStatusKind.active]: null,
[ExplanationOfBenefitStatusKind.cancelled]: null,
[ExplanationOfBenefitStatusKind.draft]: null,
[ExplanationOfBenefitStatusKind.enteredInError]: null
            });


            export interface IExplanationOfBenefit {
                
                    /**
                     * This is a ExplanationOfBenefit resource
                     */
                    resourceType: 'ExplanationOfBenefit';
                    
                
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
                     * The EOB Business Identifier.
                     */
                    identifier? : IIdentifier[];
                    

                    /**
                     * The status of the resource instance.
                     */
                    status? : ExplanationOfBenefitStatusKind;
                    

                    /**
                     * Extensions for status
                     */
                    _status? : IElement;
                    

                    /**
                     * The category of claim, e.g, oral, pharmacy, vision, institutional, professional.
                     */
                    type? : ICodeableConcept;
                    

                    /**
                     * A finer grained suite of claim subtype codes which may convey Inpatient vs Outpatient and/or a specialty service. In the US the CMS Bill Type.
                     */
                    subType? : ICodeableConcept;
                    

                    /**
                     * A claim, a list of completed goods and services; a preauthorization, a list or proposed goods and services; or a predetermination, a set of goods and services being considered, for which insurer adjudication is sought.
                     */
                    use? : string;
                    

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
                     * The person who created the explanation of benefit.
                     */
                    enterer? : IReference;
                    

                    /**
                     * The insurer which is responsible for the explanation of benefit.
                     */
                    insurer? : IReference;
                    

                    /**
                     * The provider which is responsible for the claim.
                     */
                    provider? : IReference;
                    

                    /**
                     * The referral resource which lists the date, practitioner, reason and other supporting information.
                     */
                    referral? : IReference;
                    

                    /**
                     * Facility where the services were provided.
                     */
                    facility? : IReference;
                    

                    /**
                     * The business identifier for the instance: invoice number, claim number, pre-determination or pre-authorization number.
                     */
                    claim? : IReference;
                    

                    /**
                     * The business identifier for the instance: invoice number, claim number, pre-determination or pre-authorization number.
                     */
                    claimResponse? : IReference;
                    

                    /**
                     * Processing outcome errror, partial or complete processing.
                     */
                    outcome? : string;
                    

                    /**
                     * Extensions for outcome
                     */
                    _outcome? : IElement;
                    

                    /**
                     * A description of the status of the adjudication.
                     */
                    disposition? : string;
                    

                    /**
                     * Extensions for disposition
                     */
                    _disposition? : IElement;
                    

                    /**
                     * Other claims which are related to this claim such as prior claim versions or for related services.
                     */
                    related? : IExplanationOfBenefit_Related[];
                    

                    /**
                     * Prescription to support the dispensing of Pharmacy or Vision products.
                     */
                    prescription? : IReference;
                    

                    /**
                     * Original prescription which has been superceded by this prescription to support the dispensing of pharmacy services, medications or products. For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefor issues a new precription for an alternate medication which has the same theraputic intent. The prescription from the pharmacy becomes the 'prescription' and that from the physician becomes the 'original prescription'.
                     */
                    originalPrescription? : IReference;
                    

                    /**
                     * The party to be reimbursed for the services.
                     */
                    payee? : IExplanationOfBenefit_Payee;
                    

                    /**
                     * Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. Often there are mutiple jurisdiction specific valuesets which are required.
                     */
                    information? : IExplanationOfBenefit_Information[];
                    

                    /**
                     * The members of the team who provided the overall service as well as their role and whether responsible and qualifications.
                     */
                    careTeam? : IExplanationOfBenefit_CareTeam[];
                    

                    /**
                     * Ordered list of patient diagnosis for which care is sought.
                     */
                    diagnosis? : IExplanationOfBenefit_Diagnosis[];
                    

                    /**
                     * Ordered list of patient procedures performed to support the adjudication.
                     */
                    procedure? : IExplanationOfBenefit_Procedure[];
                    

                    /**
                     * Precedence (primary, secondary, etc.).
                     */
                    precedence? : number;
                    

                    /**
                     * Extensions for precedence
                     */
                    _precedence? : IElement;
                    

                    /**
                     * Financial instrument by which payment information for health care.
                     */
                    insurance? : IExplanationOfBenefit_Insurance[];
                    

                    /**
                     * An accident which resulted in the need for healthcare services.
                     */
                    accident? : IExplanationOfBenefit_Accident;
                    

                    /**
                     * First-tier of goods and services.
                     */
                    item? : IExplanationOfBenefit_Item[];
                    

                    /**
                     * The first-tier service adjudications for payor added services.
                     */
                    addItem? : IExplanationOfBenefit_AddItem[];
                    

                    /**
                     * Totals for amounts submitted, co-pays, benefits payable etc.
                     */
                    total? : IExplanationOfBenefit_Total[];
                    

                    /**
                     * Payment details for the claim if the claim has been paid.
                     */
                    payment? : IExplanationOfBenefit_Payment;
                    

                    /**
                     * The form to be used for printing the content.
                     */
                    form? : ICodeableConcept;
                    

                    /**
                     * Note text.
                     */
                    processNote? : IExplanationOfBenefit_ProcessNote[];
                    

                    /**
                     * Balance by Benefit Category.
                     */
                    benefitBalance? : IExplanationOfBenefit_BenefitBalance[];
                    
            }
        


        export const RTTI_ExplanationOfBenefit: t.Type<IExplanationOfBenefit> = t.recursion( 'IExplanationOfBenefit', () =>
            t.intersection([
                
        t.type({
           resourceType: t.literal('ExplanationOfBenefit')
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
status: ExplanationOfBenefitStatusKindKeys,
_status: RTTI_Element,
type: RTTI_CodeableConcept,
subType: RTTI_CodeableConcept,
use: t.string,
_use: RTTI_Element,
patient: RTTI_Reference,
billablePeriod: RTTI_Period,
created: t.string,
_created: RTTI_Element,
enterer: RTTI_Reference,
insurer: RTTI_Reference,
provider: RTTI_Reference,
referral: RTTI_Reference,
facility: RTTI_Reference,
claim: RTTI_Reference,
claimResponse: RTTI_Reference,
outcome: t.string,
_outcome: RTTI_Element,
disposition: t.string,
_disposition: RTTI_Element,
related: t.array(RTTI_ExplanationOfBenefit_Related),
prescription: RTTI_Reference,
originalPrescription: RTTI_Reference,
payee: RTTI_ExplanationOfBenefit_Payee,
information: t.array(RTTI_ExplanationOfBenefit_Information),
careTeam: t.array(RTTI_ExplanationOfBenefit_CareTeam),
diagnosis: t.array(RTTI_ExplanationOfBenefit_Diagnosis),
procedure: t.array(RTTI_ExplanationOfBenefit_Procedure),
precedence: t.number,
_precedence: RTTI_Element,
insurance: t.array(RTTI_ExplanationOfBenefit_Insurance),
accident: RTTI_ExplanationOfBenefit_Accident,
item: t.array(RTTI_ExplanationOfBenefit_Item),
addItem: t.array(RTTI_ExplanationOfBenefit_AddItem),
total: t.array(RTTI_ExplanationOfBenefit_Total),
payment: RTTI_ExplanationOfBenefit_Payment,
form: RTTI_CodeableConcept,
processNote: t.array(RTTI_ExplanationOfBenefit_ProcessNote),
benefitBalance: t.array(RTTI_ExplanationOfBenefit_BenefitBalance)
        })
        
            ])
        );
        

        