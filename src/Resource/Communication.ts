
        import { Annotation } from '../Resource/Annotation';
import { Canonical } from '../Scalar/Canonical';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Communication_Payload } from '../Resource/Communication_Payload';
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
         * An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency was notified about a reportable condition. 
         */
        export class Communication  {

            constructor() {
                
            }

            
                /**
                 * This is a Communication resource
                 */
                resourceType: string = 'Communication;'
                

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
                 * Business identifiers assigned to this communication by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
                 */
                identifier? : Identifier[];
                

                /**
                 * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Communication.
                 */
                instantiatesCanonical? : Canonical[];
                

                /**
                 * The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Communication.
                 */
                instantiatesUri? : Uri[];
                

                /**
                 * Extensions for instantiatesUri
                 */
                _instantiatesUri? : Element[];
                

                /**
                 * An order, proposal or plan fulfilled in whole or in part by this Communication.
                 */
                basedOn? : Reference[];
                

                /**
                 * Part of this action.
                 */
                partOf? : Reference[];
                

                /**
                 * Prior communication that this communication is in response to.
                 */
                inResponseTo? : Reference[];
                

                /**
                 * The status of the transmission.
                 */
                status? : Code;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * Captures the reason for the current state of the Communication.
                 */
                statusReason? : CodeableConcept;
                

                /**
                 * The type of message conveyed such as alert, notification, reminder, instruction, etc.
                 */
                category? : CodeableConcept[];
                

                /**
                 * Characterizes how quickly the planned or in progress communication must be addressed. Includes concepts such as stat, urgent, routine.
                 */
                priority? : Code;
                

                /**
                 * Extensions for priority
                 */
                _priority? : Element;
                

                /**
                 * A channel that was used for this communication (e.g. email, fax).
                 */
                medium? : CodeableConcept[];
                

                /**
                 * The patient or group that was the focus of this communication.
                 */
                subject? : Reference;
                

                /**
                 * Description of the purpose/content, similar to a subject line in an email.
                 */
                topic? : CodeableConcept;
                

                /**
                 * Other resources that pertain to this communication and to which this communication should be associated.
                 */
                about? : Reference[];
                

                /**
                 * The encounter within which the communication was sent.
                 */
                context? : Reference;
                

                /**
                 * The time when this communication was sent.
                 */
                sent? : DateTime;
                

                /**
                 * Extensions for sent
                 */
                _sent? : Element;
                

                /**
                 * The time when this communication arrived at the destination.
                 */
                received? : DateTime;
                

                /**
                 * Extensions for received
                 */
                _received? : Element;
                

                /**
                 * The entity (e.g. person, organization, clinical information system, care team or device) which was the target of the communication. If receipts need to be tracked by individual, a separate resource instance will need to be created for each recipient.  Multiple recipient communications are intended where either a receipt(s) is not tracked (e.g. a mass mail-out) or is captured in aggregate (all emails confirmed received by a particular time).
                 */
                recipient? : Reference[];
                

                /**
                 * The entity (e.g. person, organization, clinical information system, or device) which was the source of the communication.
                 */
                sender? : Reference;
                

                /**
                 * The reason or justification for the communication.
                 */
                reasonCode? : CodeableConcept[];
                

                /**
                 * Indicates another resource whose existence justifies this communication.
                 */
                reasonReference? : Reference[];
                

                /**
                 * Text, attachment(s), or resource(s) that was communicated to the recipient.
                 */
                payload? : Communication_Payload[];
                

                /**
                 * Additional notes or commentary about the communication by the sender, receiver or other interested parties.
                 */
                note? : Annotation[];
                
        }
        