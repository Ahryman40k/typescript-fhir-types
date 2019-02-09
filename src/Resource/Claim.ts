
        import { Claim_Accident } from '../Resource/Claim_Accident';
import { Claim_CareTeam } from '../Resource/Claim_CareTeam';
import { Claim_Diagnosis } from '../Resource/Claim_Diagnosis';
import { Claim_Information } from '../Resource/Claim_Information';
import { Claim_Insurance } from '../Resource/Claim_Insurance';
import { Claim_Item } from '../Resource/Claim_Item';
import { Claim_Payee } from '../Resource/Claim_Payee';
import { Claim_Procedure } from '../Resource/Claim_Procedure';
import { Claim_Related } from '../Resource/Claim_Related';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Money } from '../Resource/Money';
import { Narrative } from '../Resource/Narrative';
import { Period } from '../Resource/Period';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        export enum ClaimUseKind {
                claim,
preauthorization,
predetermination
            }

        /**
         * A provider issued list of services and products provided, or to be provided, to a patient which is provided to an insurer for payment recovery. 
         */
        export class Claim  {

            constructor() {
                
            }

            
                /**
                 * This is a Claim resource
                 */
                resourceType: string = 'Claim;'
                

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
                 * The business identifier for the instance: claim number, pre-determination or pre-authorization number.
                 */
                identifier? : Identifier[];
                

                /**
                 * The status of the resource instance.
                 */
                status? : Code;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * The category of claim, e.g. oral, pharmacy, vision, institutional, professional.
                 */
                type? : CodeableConcept;
                

                /**
                 * A finer grained suite of claim subtype codes which may convey Inpatient vs Outpatient and/or a specialty service. In the US the CMS Bill Type.
                 */
                subType? : CodeableConcept;
                

                /**
                 * A claim, a list of completed goods and services; a preauthorization, a list or proposed goods and services; or a predetermination, a set of goods and services being considered, for which insurer adjudication is sought.
                 */
                use? : ClaimUseKind;
                

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
                 * Person who created the invoice/claim/pre-determination or pre-authorization.
                 */
                enterer? : Reference;
                

                /**
                 * The Insurer who is target of the request.
                 */
                insurer? : Reference;
                

                /**
                 * The provider which is responsible for the bill, claim pre-determination, pre-authorization.
                 */
                provider? : Reference;
                

                /**
                 * Immediate (STAT), best effort (NORMAL), deferred (DEFER).
                 */
                priority? : CodeableConcept;
                

                /**
                 * In the case of a Pre-Determination/Pre-Authorization the provider may request that funds in the amount of the expected Benefit be reserved ('Patient' or 'Provider') to pay for the Benefits determined on the subsequent claim(s). 'None' explicitly indicates no funds reserving is requested.
                 */
                fundsReserve? : CodeableConcept;
                

                /**
                 * Other claims which are related to this claim such as prior claim versions or for related services.
                 */
                related? : Claim_Related[];
                

                /**
                 * Prescription to support the dispensing of Pharmacy or Vision products.
                 */
                prescription? : Reference;
                

                /**
                 * Original prescription which has been superseded by this prescription to support the dispensing of pharmacy services, medications or products. For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefor issues a new prescription for an alternate medication which has the same therapeutic intent. The prescription from the pharmacy becomes the 'prescription' and that from the physician becomes the 'original prescription'.
                 */
                originalPrescription? : Reference;
                

                /**
                 * The party to be reimbursed for the services.
                 */
                payee? : Claim_Payee;
                

                /**
                 * The referral resource which lists the date, practitioner, reason and other supporting information.
                 */
                referral? : Reference;
                

                /**
                 * Facility where the services were provided.
                 */
                facility? : Reference;
                

                /**
                 * The members of the team who provided the overall service as well as their role and whether responsible and qualifications.
                 */
                careTeam? : Claim_CareTeam[];
                

                /**
                 * Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. Often there are multiple jurisdiction specific valuesets which are required.
                 */
                information? : Claim_Information[];
                

                /**
                 * List of patient diagnosis for which care is sought.
                 */
                diagnosis? : Claim_Diagnosis[];
                

                /**
                 * Ordered list of patient procedures performed to support the adjudication.
                 */
                procedure? : Claim_Procedure[];
                

                /**
                 * Financial instrument by which payment information for health care.
                 */
                insurance? : Claim_Insurance[];
                

                /**
                 * An accident which resulted in the need for healthcare services.
                 */
                accident? : Claim_Accident;
                

                /**
                 * First tier of goods and services.
                 */
                item? : Claim_Item[];
                

                /**
                 * The total value of the claim.
                 */
                total? : Money;
                
        }
        