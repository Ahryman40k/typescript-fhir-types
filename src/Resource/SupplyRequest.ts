
        import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Period } from '../Resource/Period';
import { Quantity } from '../Resource/Quantity';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { SupplyRequest_Parameter } from '../Resource/SupplyRequest_Parameter';
import { Timing } from '../Resource/Timing';
import { Uri } from '../Scalar/Uri';

        export enum SupplyRequestStatusKind {
                draft,
active,
suspended,
cancelled,
completed,
enteredInError,
unknown
            }

        /**
         * A record of a request for a medication, substance or device used in the healthcare setting. 
         */
        export class SupplyRequest  {

            constructor() {
                this.quantity = new Quantity();
            }

            
                /**
                 * This is a SupplyRequest resource
                 */
                resourceType: string = 'SupplyRequest;'
                

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
                 * Unique identifier for this supply request.
                 */
                identifier? : Identifier;
                

                /**
                 * Status of the supply request.
                 */
                status? : SupplyRequestStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.
                 */
                category? : CodeableConcept;
                

                /**
                 * Indicates how quickly this SupplyRequest should be addressed with respect to other requests.
                 */
                priority? : Code;
                

                /**
                 * Extensions for priority
                 */
                _priority? : Element;
                

                /**
                 * The item that is requested to be supplied. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
                 */
                itemCodeableConcept? : CodeableConcept;
                

                /**
                 * The item that is requested to be supplied. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
                 */
                itemReference? : Reference;
                

                /**
                 * The amount that is being ordered of the indicated item.
                 */
                quantity : Quantity;
                

                /**
                 * Specific parameters for the ordered item.  For example, the size of the indicated item.
                 */
                parameter? : SupplyRequest_Parameter[];
                

                /**
                 * When the request should be fulfilled.
                 */
                occurrenceDateTime? : string;
                

                /**
                 * Extensions for occurrenceDateTime
                 */
                _occurrenceDateTime? : Element;
                

                /**
                 * When the request should be fulfilled.
                 */
                occurrencePeriod? : Period;
                

                /**
                 * When the request should be fulfilled.
                 */
                occurrenceTiming? : Timing;
                

                /**
                 * When the request was made.
                 */
                authoredOn? : DateTime;
                

                /**
                 * Extensions for authoredOn
                 */
                _authoredOn? : Element;
                

                /**
                 * The device, practitioner, etc. who initiated the request.
                 */
                requester? : Reference;
                

                /**
                 * Who is intended to fulfill the request.
                 */
                supplier? : Reference[];
                

                /**
                 * The reason why the supply item was requested.
                 */
                reasonCode? : CodeableConcept[];
                

                /**
                 * The reason why the supply item was requested.
                 */
                reasonReference? : Reference[];
                

                /**
                 * Where the supply is expected to come from.
                 */
                deliverFrom? : Reference;
                

                /**
                 * Where the supply is destined to go.
                 */
                deliverTo? : Reference;
                
        }
        