
        import { ClaimResponse_Adjudication } from '../Resource/ClaimResponse_Adjudication';
import { ClaimResponse_SubDetail1 } from '../Resource/ClaimResponse_SubDetail1';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Decimal } from '../Scalar/Decimal';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Money } from '../Resource/Money';
import { PositiveInt } from '../Scalar/PositiveInt';
import { Quantity } from '../Resource/Quantity';

        

        /**
         * This resource provides the adjudication details from the processing of a Claim resource. 
         */
        export class ClaimResponse_Detail1  {

            constructor() {
                
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                id? : string;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                modifierExtension? : Extension[];
                

                /**
                 * A code to indicate the Professional Service or Product supplied.
                 */
                billcode? : CodeableConcept;
                

                /**
                 * Item typification or modifiers codes, e.g. for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.
                 */
                modifier? : CodeableConcept[];
                

                /**
                 * The number of repetitions of a service or product.
                 */
                quantity? : Quantity;
                

                /**
                 * If the item is a node then this is the fee for the product or service, otherwise this is the total of the fees for the children of the group.
                 */
                unitPrice? : Money;
                

                /**
                 * A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
                 */
                factor? : Decimal;
                

                /**
                 * Extensions for factor
                 */
                _factor? : Element;
                

                /**
                 * The quantity times the unit price for an additional service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
                 */
                net? : Money;
                

                /**
                 * A list of note references to the notes provided below.
                 */
                noteNumber? : PositiveInt[];
                

                /**
                 * Extensions for noteNumber
                 */
                _noteNumber? : Element[];
                

                /**
                 * The adjudication results.
                 */
                adjudication? : ClaimResponse_Adjudication[];
                

                /**
                 * The third-tier service adjudications for payor added services.
                 */
                subDetail? : ClaimResponse_SubDetail1[];
                
        }
        