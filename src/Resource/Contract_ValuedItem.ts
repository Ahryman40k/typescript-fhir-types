
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { DateTime } from '../Scalar/DateTime';
import { Decimal } from '../Scalar/Decimal';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Identifier } from '../Resource/Identifier';
import { Money } from '../Resource/Money';
import { Quantity } from '../Resource/Quantity';
import { Reference } from '../Resource/Reference';
import { UnsignedInt } from '../Scalar/UnsignedInt';

        

        /**
         * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. 
         */
        export class Contract_ValuedItem  {

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
                 * Specific type of Contract Valued Item that may be priced.
                 */
                EntityCodeableConcept? : CodeableConcept;
                

                /**
                 * Specific type of Contract Valued Item that may be priced.
                 */
                EntityReference? : Reference;
                

                /**
                 * Identifies a Contract Valued Item instance.
                 */
                Identifier? : Identifier;
                

                /**
                 * Indicates the time during which this Contract ValuedItem information is effective.
                 */
                EffectiveTime? : DateTime;
                

                /**
                 * Extensions for effectiveTime
                 */
                _effectiveTime? : Element;
                

                /**
                 * Specifies the units by which the Contract Valued Item is measured or counted, and quantifies the countable or measurable Contract Valued Item instances.
                 */
                Quantity? : Quantity;
                

                /**
                 * A Contract Valued Item unit valuation measure.
                 */
                UnitPrice? : Money;
                

                /**
                 * A real number that represents a multiplier used in determining the overall value of the Contract Valued Item delivered. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.
                 */
                Factor? : Decimal;
                

                /**
                 * Extensions for factor
                 */
                _factor? : Element;
                

                /**
                 * An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Valued Item delivered. The concept of Points allows for assignment of point values for a Contract Valued Item, such that a monetary amount can be assigned to each point.
                 */
                Points? : Decimal;
                

                /**
                 * Extensions for points
                 */
                _points? : Element;
                

                /**
                 * Expresses the product of the Contract Valued Item unitQuantity and the unitPriceAmt. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.
                 */
                Net? : Money;
                

                /**
                 * Terms of valuation.
                 */
                Payment? : String;
                

                /**
                 * Extensions for payment
                 */
                _payment? : Element;
                

                /**
                 * When payment is due.
                 */
                PaymentDate? : DateTime;
                

                /**
                 * Extensions for paymentDate
                 */
                _paymentDate? : Element;
                

                /**
                 * Who will make payment.
                 */
                Responsible? : Reference;
                

                /**
                 * Who will receive payment.
                 */
                Recipient? : Reference;
                

                /**
                 * Id  of the clause or question text related to the context of this valuedItem in the referenced form or QuestionnaireResponse.
                 */
                LinkId? : Array<String>;
                

                /**
                 * Extensions for linkId
                 */
                _linkId? : Array<Element>;
                

                /**
                 * A set of security labels that define which terms are controlled by this condition.
                 */
                SecurityLabelNumber? : Array<UnsignedInt>;
                

                /**
                 * Extensions for securityLabelNumber
                 */
                _securityLabelNumber? : Array<Element>;
                
        }
        