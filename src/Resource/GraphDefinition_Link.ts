
        import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { GraphDefinition_Target } from '../Resource/GraphDefinition_Target';
import { Integer } from '../Scalar/Integer';

        

        /**
         * A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. 
         */
        export class GraphDefinition_Link  {

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
                 * A FHIR expression that identifies one of FHIR References to other resources.
                 */
                Path? : String;
                

                /**
                 * Extensions for path
                 */
                _path? : Element;
                

                /**
                 * Which slice (if profiled).
                 */
                SliceName? : String;
                

                /**
                 * Extensions for sliceName
                 */
                _sliceName? : Element;
                

                /**
                 * Minimum occurrences for this link.
                 */
                Min? : Integer;
                

                /**
                 * Extensions for min
                 */
                _min? : Element;
                

                /**
                 * Maximum occurrences for this link.
                 */
                Max? : String;
                

                /**
                 * Extensions for max
                 */
                _max? : Element;
                

                /**
                 * Information about why this link is of interest in this graph definition.
                 */
                Description? : String;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * Potential target for the link.
                 */
                Target? : Array<GraphDefinition_Target>;
                
        }
        