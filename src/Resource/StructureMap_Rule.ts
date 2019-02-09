
        import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { StructureMap_Dependent } from '../Resource/StructureMap_Dependent';
import { StructureMap_Source } from '../Resource/StructureMap_Source';
import { StructureMap_Target } from '../Resource/StructureMap_Target';

        

        /**
         * A Map of relationships between 2 structures that can be used to transform data. 
         */
        export class StructureMap_Rule  {

            constructor() {
                this.source = new Array<StructureMap_Source>();
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
                 * Name of the rule for internal references.
                 */
                name? : Id;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * Source inputs to the mapping.
                 */
                source : StructureMap_Source[];
                

                /**
                 * Content to create because of this mapping rule.
                 */
                target? : StructureMap_Target[];
                

                /**
                 * Rules contained in this rule.
                 */
                rule? : StructureMap_Rule[];
                

                /**
                 * Which other rules to apply in the context of this rule.
                 */
                dependent? : StructureMap_Dependent[];
                

                /**
                 * Documentation for this instance of data.
                 */
                documentation? : string;
                

                /**
                 * Extensions for documentation
                 */
                _documentation? : Element;
                
        }
        