
        import { Annotation } from '../Resource/Annotation';
import { ChargeItem_Performer } from '../Resource/ChargeItem_Performer';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { DateTime } from '../Scalar/DateTime';
import { Decimal } from '../Scalar/Decimal';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Money } from '../Resource/Money';
import { Narrative } from '../Resource/Narrative';
import { Period } from '../Resource/Period';
import { Quantity } from '../Resource/Quantity';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Timing } from '../Resource/Timing';
import { Uri } from '../Scalar/Uri';

        export enum ChargeItemStatusKind {
                planned,
billable,
notBillable,
aborted,
billed,
enteredInError,
unknown
            }

        /**
         * The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation. 
         */
        export class ChargeItem  {

            constructor() {
                this.code = new CodeableConcept();
this.subject = new Reference();
            }

            
                /**
                 * This is a ChargeItem resource
                 */
                resourceType: string = 'ChargeItem;'
                

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
                 * Identifiers assigned to this event performer or other systems.
                 */
                identifier? : Identifier[];
                

                /**
                 * References the source of pricing information, rules of application for the code this ChargeItem uses.
                 */
                definition? : Uri[];
                

                /**
                 * Extensions for definition
                 */
                _definition? : Element[];
                

                /**
                 * The current state of the ChargeItem.
                 */
                status? : ChargeItemStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * ChargeItems can be grouped to larger ChargeItems covering the whole set.
                 */
                partOf? : Reference[];
                

                /**
                 * A code that identifies the charge, like a billing code.
                 */
                code : CodeableConcept;
                

                /**
                 * The individual or set of individuals the action is being or was performed on.
                 */
                subject : Reference;
                

                /**
                 * The encounter or episode of care that establishes the context for this event.
                 */
                context? : Reference;
                

                /**
                 * Date/time(s) or duration when the charged service was applied.
                 */
                occurrenceDateTime? : string;
                

                /**
                 * Extensions for occurrenceDateTime
                 */
                _occurrenceDateTime? : Element;
                

                /**
                 * Date/time(s) or duration when the charged service was applied.
                 */
                occurrencePeriod? : Period;
                

                /**
                 * Date/time(s) or duration when the charged service was applied.
                 */
                occurrenceTiming? : Timing;
                

                /**
                 * Indicates who or what performed or participated in the charged service.
                 */
                performer? : ChargeItem_Performer[];
                

                /**
                 * The organization requesting the service.
                 */
                performingOrganization? : Reference;
                

                /**
                 * The organization performing the service.
                 */
                requestingOrganization? : Reference;
                

                /**
                 * The financial cost center permits the tracking of charge attribution.
                 */
                costCenter? : Reference;
                

                /**
                 * Quantity of which the charge item has been serviced.
                 */
                quantity? : Quantity;
                

                /**
                 * The anatomical location where the related service has been applied.
                 */
                bodysite? : CodeableConcept[];
                

                /**
                 * Factor overriding the factor determined by the rules associated with the code.
                 */
                factorOverride? : Decimal;
                

                /**
                 * Extensions for factorOverride
                 */
                _factorOverride? : Element;
                

                /**
                 * Total price of the charge overriding the list price associated with the code.
                 */
                priceOverride? : Money;
                

                /**
                 * If the list price or the rule based factor associated with the code is overridden, this attribute can capture a text to indicate the  reason for this action.
                 */
                overrideReason? : string;
                

                /**
                 * Extensions for overrideReason
                 */
                _overrideReason? : Element;
                

                /**
                 * The device, practitioner, etc. who entered the charge item.
                 */
                enterer? : Reference;
                

                /**
                 * Date the charge item was entered.
                 */
                enteredDate? : DateTime;
                

                /**
                 * Extensions for enteredDate
                 */
                _enteredDate? : Element;
                

                /**
                 * Describes why the event occurred in coded or textual form.
                 */
                reason? : CodeableConcept[];
                

                /**
                 * Indicated the rendered service that caused this charge.
                 */
                service? : Reference[];
                

                /**
                 * Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
                 */
                productReference? : Reference;
                

                /**
                 * Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
                 */
                productCodeableConcept? : CodeableConcept;
                

                /**
                 * Account into which this ChargeItems belongs.
                 */
                account? : Reference[];
                

                /**
                 * Comments made about the event by the performer, subject or other participants.
                 */
                note? : Annotation[];
                

                /**
                 * Further information supporting this charge.
                 */
                supportingInformation? : Reference[];
                
        }
        