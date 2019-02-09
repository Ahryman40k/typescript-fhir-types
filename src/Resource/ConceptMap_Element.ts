
        import { Code } from '../Scalar/Code';
import { ConceptMap_Target } from '../Resource/ConceptMap_Target';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';

        

        /**
         * A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. 
         */
        export class ConceptMap_Element  {

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
                 * Identity (code or path) or the element/item being mapped.
                 */
                code? : Code;
                

                /**
                 * Extensions for code
                 */
                _code? : Element;
                

                /**
                 * The display for the code. The display is only provided to help editors when editing the concept map.
                 */
                display? : string;
                

                /**
                 * Extensions for display
                 */
                _display? : Element;
                

                /**
                 * A concept from the target value set that this concept maps to.
                 */
                target? : ConceptMap_Target[];
                
        }
        