
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Date } from '../Scalar/Date';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Money } from '../Resource/Money';
import { Reference } from '../Resource/Reference';

        

        /**
         * This resource provides payment details and claim references supporting a bulk payment. 
         */
        export class PaymentReconciliation_Detail  {

            constructor() {
                this.type = new CodeableConcept();
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
                 * Code to indicate the nature of the payment, adjustment, funds advance, etc.
                 */
                type : CodeableConcept;
                

                /**
                 * The claim or financial resource.
                 */
                request? : Reference;
                

                /**
                 * The claim response resource.
                 */
                response? : Reference;
                

                /**
                 * The Organization which submitted the claim or financial transaction.
                 */
                submitter? : Reference;
                

                /**
                 * The organization which is receiving the payment.
                 */
                payee? : Reference;
                

                /**
                 * The date of the invoice or financial resource.
                 */
                date? : Date;
                

                /**
                 * Extensions for date
                 */
                _date? : Element;
                

                /**
                 * Amount paid for this detail.
                 */
                amount? : Money;
                
        }
        