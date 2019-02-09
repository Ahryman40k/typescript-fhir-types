
        import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Coverage_Class } from '../Resource/Coverage_Class';
import { Coverage_Copay } from '../Resource/Coverage_Copay';
import { Element } from '../Resource/Element';
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

        

        /**
         * Financial instrument which may be used to reimburse or pay for health care products and services. 
         */
        export class Coverage  {

            constructor() {
                
            }

            
                /**
                 * This is a Coverage resource
                 */
                resourceType: string = 'Coverage;'
                

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
                 * The main (and possibly only) identifier for the coverage - often referred to as a Member Id, Certificate number, Personal Health Number or Case ID. May be constructed as the concatenation of the Coverage.SubscriberID and the Coverage.dependant.
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
                 * The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health or payment by an individual or organization.
                 */
                type? : CodeableConcept;
                

                /**
                 * The party who 'owns' the insurance policy,  may be an individual, corporation or the subscriber's employer.
                 */
                policyHolder? : Reference;
                

                /**
                 * The party who has signed-up for or 'owns' the contractual relationship to the policy or to whom the benefit of the policy for services rendered to them or their family is due.
                 */
                subscriber? : Reference;
                

                /**
                 * The insurer assigned ID for the Subscriber.
                 */
                subscriberId? : string;
                

                /**
                 * Extensions for subscriberId
                 */
                _subscriberId? : Element;
                

                /**
                 * The party who benefits from the insurance coverage; the patient when services are provided.
                 */
                beneficiary? : Reference;
                

                /**
                 * A unique identifier for a dependent under the coverage.
                 */
                dependent? : string;
                

                /**
                 * Extensions for dependent
                 */
                _dependent? : Element;
                

                /**
                 * The relationship of beneficiary (patient) to the subscriber.
                 */
                relationship? : CodeableConcept;
                

                /**
                 * Time period during which the coverage is in force. A missing start date indicates the start date isn't known, a missing end date means the coverage is continuing to be in force.
                 */
                period? : Period;
                

                /**
                 * The program or plan underwriter or payor including both insurance and non-insurance agreements, such as patient-pay agreements. May provide multiple identifiers such as insurance company identifier or business identifier (BIN number).
                 */
                payor? : Reference[];
                

                /**
                 * A suite of underwrite specific classifiers, for example may be used to identify a class of coverage or employer group, Policy, Plan.
                 */
                class? : Coverage_Class[];
                

                /**
                 * The order of applicability of this coverage relative to other coverages which are currently in force. Note, there may be gaps in the numbering and this does not imply primary, secondary etc. as the specific positioning of coverages depends upon the episode of care.
                 */
                order? : PositiveInt;
                

                /**
                 * Extensions for order
                 */
                _order? : Element;
                

                /**
                 * The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' terms and conditions apply.
                 */
                network? : string;
                

                /**
                 * Extensions for network
                 */
                _network? : Element;
                

                /**
                 * A suite of underwrite specific classifiers, for example may be used to identify a class of coverage or employer group, Policy, Plan.
                 */
                copay? : Coverage_Copay[];
                

                /**
                 * The policy(s) which constitute this insurance coverage.
                 */
                contract? : Reference[];
                
        }
        