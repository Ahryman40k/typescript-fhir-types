
        import { Annotation } from '../Resource/Annotation';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Invoice_LineItem } from '../Resource/Invoice_LineItem';
import { Invoice_Participant } from '../Resource/Invoice_Participant';
import { Invoice_PriceComponent } from '../Resource/Invoice_PriceComponent';
import { Markdown } from '../Scalar/Markdown';
import { Meta } from '../Resource/Meta';
import { Money } from '../Resource/Money';
import { Narrative } from '../Resource/Narrative';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        export enum InvoiceStatusKind {
                draft,
issued,
balanced,
cancelled,
enteredInError
            }

        /**
         * Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. 
         */
        export class Invoice  {

            constructor() {
                
            }

            
                /**
                 * This is a Invoice resource
                 */
                ResourceType: string = 'Invoice;'
                

                /**
                 * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                 */
                Id? : Id;
                

                /**
                 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                 */
                Meta? : Meta;
                

                /**
                 * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                 */
                ImplicitRules? : Uri;
                

                /**
                 * Extensions for implicitRules
                 */
                _implicitRules? : Element;
                

                /**
                 * The base language in which the resource is written.
                 */
                Language? : Code;
                

                /**
                 * Extensions for language
                 */
                _language? : Element;
                

                /**
                 * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                 */
                Text? : Narrative;
                

                /**
                 * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                 */
                Contained? : Array<ResourceList>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                ModifierExtension? : Array<Extension>;
                

                /**
                 * Identifier of this Invoice, often used for reference in corresponcence about this invoice or for tracking of payments.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * The current state of the Invoice.
                 */
                Status? : InvoiceStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * In case of Invoice cancellation a reason must be given (entered in error, superseded by corrected invoice etc.).
                 */
                CancelledReason? : String;
                

                /**
                 * Extensions for cancelledReason
                 */
                _cancelledReason? : Element;
                

                /**
                 * Type of Invoice depending on domain, realm an usage (eg. internal/external, dental, preliminary).
                 */
                Type? : CodeableConcept;
                

                /**
                 * The individual or set of individuals receiving the goods and services billed in this invoice.
                 */
                Subject? : Reference;
                

                /**
                 * The individual or Organization responsible for balancing of this invoice.
                 */
                Recipient? : Reference;
                

                /**
                 * Date/time(s) of when this Invoice was posted.
                 */
                Date? : DateTime;
                

                /**
                 * Extensions for date
                 */
                _date? : Element;
                

                /**
                 * Indicates who or what performed or participated in the charged service.
                 */
                Participant? : Array<Invoice_Participant>;
                

                /**
                 * The organizationissuing the Invoice.
                 */
                Issuer? : Reference;
                

                /**
                 * Account which is supposed to be balanced with this Invoice.
                 */
                Account? : Reference;
                

                /**
                 * Each line item represents one charge for goods ond services rendered. Details such as date, code and amount are found in the referenced ChargeItem resource.
                 */
                LineItem? : Array<Invoice_LineItem>;
                

                /**
                 * The total amount for the Invoice may be calculated as the sum of the line items with surcharges/deductions that apply in certain conditions.  The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the total price was calculated.
                 */
                TotalPriceComponent? : Array<Invoice_PriceComponent>;
                

                /**
                 * Invoice total , taxes excluded.
                 */
                TotalNet? : Money;
                

                /**
                 * Invoice total, tax included.
                 */
                TotalGross? : Money;
                

                /**
                 * Payment details such as banking details, period of payment, deductables, methods of payment.
                 */
                PaymentTerms? : Markdown;
                

                /**
                 * Extensions for paymentTerms
                 */
                _paymentTerms? : Element;
                

                /**
                 * Comments made about the invoice by the issuer, subject or other participants.
                 */
                Note? : Array<Annotation>;
                
        }
        