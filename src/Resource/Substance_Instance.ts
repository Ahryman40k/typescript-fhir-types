
        import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Identifier } from '../Resource/Identifier';
import { Quantity } from '../Resource/Quantity';

        

        /**
         * A homogeneous material with a definite composition. 
         */
        export class Substance_Instance  {

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
                 * Identifier associated with the package/container (usually a label affixed directly).
                 */
                Identifier? : Identifier;
                

                /**
                 * When the substance is no longer valid to use. For some substances, a single arbitrary date is used for expiry.
                 */
                Expiry? : DateTime;
                

                /**
                 * Extensions for expiry
                 */
                _expiry? : Element;
                

                /**
                 * The amount of the substance.
                 */
                Quantity? : Quantity;
                
        }
        