
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Invoice_PriceComponent } from '../Resource/Invoice_PriceComponent';
import { PositiveInt } from '../Scalar/PositiveInt';
import { Reference } from '../Resource/Reference';

        

        /**
         * Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. 
         */
        export class Invoice_LineItem  {

            constructor() {
                
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                Id? : String;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                ModifierExtension? : Array<Extension>;
                

                /**
                 * Sequence in which the items appear on the invoice.
                 */
                Sequence? : PositiveInt;
                

                /**
                 * Extensions for sequence
                 */
                _sequence? : Element;
                

                /**
                 * The ChargeItem contains information such as the billing code, date, amount etc. Of no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference.
                 */
                ChargeItemReference? : Reference;
                

                /**
                 * The ChargeItem contains information such as the billing code, date, amount etc. Of no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference.
                 */
                ChargeItemCodeableConcept? : CodeableConcept;
                

                /**
                 * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under developement. The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the prices have been calculated.
                 */
                PriceComponent? : Array<Invoice_PriceComponent>;
                
        }
        