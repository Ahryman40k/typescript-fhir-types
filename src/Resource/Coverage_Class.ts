
        import { Coding } from '../Resource/Coding';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';

        

        /**
         * Financial instrument which may be used to reimburse or pay for health care products and services. 
         */
        export class Coverage_Class  {

            constructor() {
                this.Type = new Coding();
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
                 * The type of classification for which an insurer-specific class tag or number and optional name is provided, for example may be used to identify a class of coverage or employer group, Policy, Plan.
                 */
                Type : Coding;
                

                /**
                 * For example, the Group or Plan number.
                 */
                Value? : String;
                

                /**
                 * Extensions for value
                 */
                _value? : Element;
                

                /**
                 * A short description for the class.
                 */
                Name? : String;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                
        }
        