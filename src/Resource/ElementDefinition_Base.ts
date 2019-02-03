
        import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { UnsignedInt } from '../Scalar/UnsignedInt';

        

        /**
         * Captures constraints on each element within the resource, profile, or extension. 
         */
        export class ElementDefinition_Base  {

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
                 * The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [[[StructureDefinition]]] without a StructureDefinition.base.
                 */
                Path? : String;
                

                /**
                 * Extensions for path
                 */
                _path? : Element;
                

                /**
                 * Minimum cardinality of the base element identified by the path.
                 */
                Min? : UnsignedInt;
                

                /**
                 * Extensions for min
                 */
                _min? : Element;
                

                /**
                 * Maximum cardinality of the base element identified by the path.
                 */
                Max? : String;
                

                /**
                 * Extensions for max
                 */
                _max? : Element;
                
        }
        