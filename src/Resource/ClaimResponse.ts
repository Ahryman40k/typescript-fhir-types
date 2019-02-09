
        import { ClaimResponse_AddItem } from '../Resource/ClaimResponse_AddItem';
import { ClaimResponse_Error } from '../Resource/ClaimResponse_Error';
import { ClaimResponse_Insurance } from '../Resource/ClaimResponse_Insurance';
import { ClaimResponse_Item } from '../Resource/ClaimResponse_Item';
import { ClaimResponse_Payment } from '../Resource/ClaimResponse_Payment';
import { ClaimResponse_ProcessNote } from '../Resource/ClaimResponse_ProcessNote';
import { ClaimResponse_Total } from '../Resource/ClaimResponse_Total';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Coding } from '../Resource/Coding';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        

        /**
         * This resource provides the adjudication details from the processing of a Claim resource. 
         */
        export class ClaimResponse  {

            constructor() {
                
            }

            
                /**
                 * This is a ClaimResponse resource
                 */
                resourceType: string = 'ClaimResponse;'
                

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
                 * The response business identifier.
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
                 * The date when this resource was created.
                 */
                created? : DateTime;
                

                /**
                 * Extensions for created
                 */
                _created? : Element;
                

                /**
                 * The Insurer who produced this adjudicated response.
                 */
                insurer? : Reference;
                

                /**
                 * The practitioner who is responsible for the services rendered to the patient.
                 */
                requestProvider? : Reference;
                

                /**
                 * Original request resource reference.
                 */
                request? : Reference;
                

                /**
                 * Transaction: error, complete, partial processing.
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
                 * A list of references from the Insurer to which these services pertain.
                 */
                preAuthRef? : string;
                

                /**
                 * Extensions for preAuthRef
                 */
                _preAuthRef? : Element;
                

                /**
                 * Party to be reimbursed: Subscriber, provider, other.
                 */
                payeeType? : CodeableConcept;
                

                /**
                 * The first-tier service adjudications for submitted services.
                 */
                item? : ClaimResponse_Item[];
                

                /**
                 * The first-tier service adjudications for payor added services.
                 */
                addItem? : ClaimResponse_AddItem[];
                

                /**
                 * Mutually exclusive with Services Provided (Item).
                 */
                error? : ClaimResponse_Error[];
                

                /**
                 * Totals for amounts submitted, co-pays, benefits payable etc.
                 */
                total? : ClaimResponse_Total[];
                

                /**
                 * Payment details for the claim if the claim has been paid.
                 */
                payment? : ClaimResponse_Payment;
                

                /**
                 * Status of funds reservation (For provider, for Patient, None).
                 */
                reserved? : Coding;
                

                /**
                 * The form to be used for printing the content.
                 */
                form? : CodeableConcept;
                

                /**
                 * Note text.
                 */
                processNote? : ClaimResponse_ProcessNote[];
                

                /**
                 * Request for additional supporting or authorizing information, such as: documents, images or resources.
                 */
                communicationRequest? : Reference[];
                

                /**
                 * Financial instrument by which payment information for health care.
                 */
                insurance? : ClaimResponse_Insurance[];
                
        }
        