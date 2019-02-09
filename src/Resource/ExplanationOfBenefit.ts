
        import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { ExplanationOfBenefit_Accident } from '../Resource/ExplanationOfBenefit_Accident';
import { ExplanationOfBenefit_AddItem } from '../Resource/ExplanationOfBenefit_AddItem';
import { ExplanationOfBenefit_BenefitBalance } from '../Resource/ExplanationOfBenefit_BenefitBalance';
import { ExplanationOfBenefit_CareTeam } from '../Resource/ExplanationOfBenefit_CareTeam';
import { ExplanationOfBenefit_Diagnosis } from '../Resource/ExplanationOfBenefit_Diagnosis';
import { ExplanationOfBenefit_Information } from '../Resource/ExplanationOfBenefit_Information';
import { ExplanationOfBenefit_Insurance } from '../Resource/ExplanationOfBenefit_Insurance';
import { ExplanationOfBenefit_Item } from '../Resource/ExplanationOfBenefit_Item';
import { ExplanationOfBenefit_Payee } from '../Resource/ExplanationOfBenefit_Payee';
import { ExplanationOfBenefit_Payment } from '../Resource/ExplanationOfBenefit_Payment';
import { ExplanationOfBenefit_Procedure } from '../Resource/ExplanationOfBenefit_Procedure';
import { ExplanationOfBenefit_ProcessNote } from '../Resource/ExplanationOfBenefit_ProcessNote';
import { ExplanationOfBenefit_Related } from '../Resource/ExplanationOfBenefit_Related';
import { ExplanationOfBenefit_Total } from '../Resource/ExplanationOfBenefit_Total';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Period } from '../Resource/Period';
import { PositiveInt } from '../Scalar/PositiveInt';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        export enum ExplanationOfBenefitStatusKind {
                active,
cancelled,
draft,
enteredInError
            }

        /**
         * This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. 
         */
        export class ExplanationOfBenefit  {

            constructor() {
                
            }

            
                /**
                 * This is a ExplanationOfBenefit resource
                 */
                resourceType: string = 'ExplanationOfBenefit;'
                

                /**
                 * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                 */
                id? : Id;
                

                /**
                 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                 */
                meta? : Meta;
                

                /**
                 * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                 */
                implicitRules? : Uri;
                

                /**
                 * Extensions for implicitRules
                 */
                _implicitRules? : Element;
                

                /**
                 * The base language in which the resource is written.
                 */
                language? : Code;
                

                /**
                 * Extensions for language
                 */
                _language? : Element;
                

                /**
                 * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                 */
                text? : Narrative;
                

                /**
                 * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                 */
                contained? : ResourceList[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                modifierExtension? : Extension[];
                

                /**
                 * The EOB Business Identifier.
                 */
                identifier? : Identifier[];
                

                /**
                 * The status of the resource instance.
                 */
                status? : ExplanationOfBenefitStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * The category of claim, e.g, oral, pharmacy, vision, institutional, professional.
                 */
                type? : CodeableConcept;
                

                /**
                 * A finer grained suite of claim subtype codes which may convey Inpatient vs Outpatient and/or a specialty service. In the US the CMS Bill Type.
                 */
                subType? : CodeableConcept;
                

                /**
                 * A claim, a list of completed goods and services; a preauthorization, a list or proposed goods and services; or a predetermination, a set of goods and services being considered, for which insurer adjudication is sought.
                 */
                use? : Code;
                

                /**
                 * Extensions for use
                 */
                _use? : Element;
                

                /**
                 * Patient Resource.
                 */
                patient? : Reference;
                

                /**
                 * The billable period for which charges are being submitted.
                 */
                billablePeriod? : Period;
                

                /**
                 * The date when this resource was created.
                 */
                created? : DateTime;
                

                /**
                 * Extensions for created
                 */
                _created? : Element;
                

                /**
                 * The person who created the explanation of benefit.
                 */
                enterer? : Reference;
                

                /**
                 * The insurer which is responsible for the explanation of benefit.
                 */
                insurer? : Reference;
                

                /**
                 * The provider which is responsible for the claim.
                 */
                provider? : Reference;
                

                /**
                 * The referral resource which lists the date, practitioner, reason and other supporting information.
                 */
                referral? : Reference;
                

                /**
                 * Facility where the services were provided.
                 */
                facility? : Reference;
                

                /**
                 * The business identifier for the instance: invoice number, claim number, pre-determination or pre-authorization number.
                 */
                claim? : Reference;
                

                /**
                 * The business identifier for the instance: invoice number, claim number, pre-determination or pre-authorization number.
                 */
                claimResponse? : Reference;
                

                /**
                 * Processing outcome errror, partial or complete processing.
                 */
                outcome? : Code;
                

                /**
                 * Extensions for outcome
                 */
                _outcome? : Element;
                

                /**
                 * A description of the status of the adjudication.
                 */
                disposition? : string;
                

                /**
                 * Extensions for disposition
                 */
                _disposition? : Element;
                

                /**
                 * Other claims which are related to this claim such as prior claim versions or for related services.
                 */
                related? : ExplanationOfBenefit_Related[];
                

                /**
                 * Prescription to support the dispensing of Pharmacy or Vision products.
                 */
                prescription? : Reference;
                

                /**
                 * Original prescription which has been superceded by this prescription to support the dispensing of pharmacy services, medications or products. For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefor issues a new precription for an alternate medication which has the same theraputic intent. The prescription from the pharmacy becomes the 'prescription' and that from the physician becomes the 'original prescription'.
                 */
                originalPrescription? : Reference;
                

                /**
                 * The party to be reimbursed for the services.
                 */
                payee? : ExplanationOfBenefit_Payee;
                

                /**
                 * Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. Often there are mutiple jurisdiction specific valuesets which are required.
                 */
                information? : ExplanationOfBenefit_Information[];
                

                /**
                 * The members of the team who provided the overall service as well as their role and whether responsible and qualifications.
                 */
                careTeam? : ExplanationOfBenefit_CareTeam[];
                

                /**
                 * Ordered list of patient diagnosis for which care is sought.
                 */
                diagnosis? : ExplanationOfBenefit_Diagnosis[];
                

                /**
                 * Ordered list of patient procedures performed to support the adjudication.
                 */
                procedure? : ExplanationOfBenefit_Procedure[];
                

                /**
                 * Precedence (primary, secondary, etc.).
                 */
                precedence? : PositiveInt;
                

                /**
                 * Extensions for precedence
                 */
                _precedence? : Element;
                

                /**
                 * Financial instrument by which payment information for health care.
                 */
                insurance? : ExplanationOfBenefit_Insurance[];
                

                /**
                 * An accident which resulted in the need for healthcare services.
                 */
                accident? : ExplanationOfBenefit_Accident;
                

                /**
                 * First-tier of goods and services.
                 */
                item? : ExplanationOfBenefit_Item[];
                

                /**
                 * The first-tier service adjudications for payor added services.
                 */
                addItem? : ExplanationOfBenefit_AddItem[];
                

                /**
                 * Totals for amounts submitted, co-pays, benefits payable etc.
                 */
                total? : ExplanationOfBenefit_Total[];
                

                /**
                 * Payment details for the claim if the claim has been paid.
                 */
                payment? : ExplanationOfBenefit_Payment;
                

                /**
                 * The form to be used for printing the content.
                 */
                form? : CodeableConcept;
                

                /**
                 * Note text.
                 */
                processNote? : ExplanationOfBenefit_ProcessNote[];
                

                /**
                 * Balance by Benefit Category.
                 */
                benefitBalance? : ExplanationOfBenefit_BenefitBalance[];
                
        }
        