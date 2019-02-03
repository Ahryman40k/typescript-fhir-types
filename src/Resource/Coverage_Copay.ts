
        import { Coding } from '../Resource/Coding';
import { Extension } from '../Resource/Extension';
import { Quantity } from '../Resource/Quantity';

        

        /**
         * Financial instrument which may be used to reimburse or pay for health care products and services. 
         */
        export class Coverage_Copay  {

            constructor() {
                this.Value = new Quantity();
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
                 * Types of products or services such as visit, specialist visits, emergency, inpatient care, etc.
                 */
                Type? : Coding;
                

                /**
                 * The amount of patient payments for various types of services/products, expressed as a percentage of the service/product cost or a fixed amount of currency.
                 */
                Value : Quantity;
                
        }
        