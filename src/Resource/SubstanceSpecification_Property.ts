
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Identifier } from '../Resource/Identifier';

        

        /**
         * The detailed description of a substance, typically at a level beyond what is used for prescribing. 
         */
        export class SubstanceSpecification_Property  {

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
                 * Description todo.
                 */
                Type? : CodeableConcept;
                

                /**
                 * Description todo.
                 */
                Name? : CodeableConcept;
                

                /**
                 * A field that should be used to capture parameters that were used in the measurement of a property.
                 */
                Parameters? : String;
                

                /**
                 * Extensions for parameters
                 */
                _parameters? : Element;
                

                /**
                 * Identifier for a substance upon which a defining property depends.
                 */
                SubstanceId? : Identifier;
                

                /**
                 * Description todo.
                 */
                SubstanceName? : String;
                

                /**
                 * Extensions for substanceName
                 */
                _substanceName? : Element;
                

                /**
                 * Quantitative value for this property.
                 */
                Amount? : String;
                

                /**
                 * Extensions for amount
                 */
                _amount? : Element;
                
        }
        