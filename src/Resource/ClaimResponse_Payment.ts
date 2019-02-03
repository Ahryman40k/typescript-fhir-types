
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Date } from '../Scalar/Date';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Identifier } from '../Resource/Identifier';
import { Money } from '../Resource/Money';

        

        /**
         * This resource provides the adjudication details from the processing of a Claim resource. 
         */
        export class ClaimResponse_Payment  {

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
                 * Whether this represents partial or complete payment of the claim.
                 */
                Type? : CodeableConcept;
                

                /**
                 * Adjustment to the payment of this transaction which is not related to adjudication of this transaction.
                 */
                Adjustment? : Money;
                

                /**
                 * Reason for the payment adjustment.
                 */
                AdjustmentReason? : CodeableConcept;
                

                /**
                 * Estimated payment data.
                 */
                Date? : Date;
                

                /**
                 * Extensions for date
                 */
                _date? : Element;
                

                /**
                 * Payable less any payment adjustment.
                 */
                Amount? : Money;
                

                /**
                 * Payment identifier.
                 */
                Identifier? : Identifier;
                
        }
        