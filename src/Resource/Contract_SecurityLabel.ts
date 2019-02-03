
        import { Coding } from '../Resource/Coding';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { UnsignedInt } from '../Scalar/UnsignedInt';

        

        /**
         * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. 
         */
        export class Contract_SecurityLabel  {

            constructor() {
                this.Classification = new Coding();
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
                 * Number used to link this term or term element to the applicable Security Label.
                 */
                Number? : Array<UnsignedInt>;
                

                /**
                 * Extensions for number
                 */
                _number? : Array<Element>;
                

                /**
                 * Security label privacy tag that species the level of confidentiality protection required for this term and/or term elements.
                 */
                Classification : Coding;
                

                /**
                 * Security label privacy tag that species the applicable privacy and security policies governing this term and/or term elements.
                 */
                Category? : Array<Coding>;
                

                /**
                 * Security label privacy tag that species the manner in which term and/or term elements are to be protected.
                 */
                Control? : Array<Coding>;
                
        }
        