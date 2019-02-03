
        import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { StructureMap_Input } from '../Resource/StructureMap_Input';
import { StructureMap_Rule } from '../Resource/StructureMap_Rule';

        export enum StructureMap_GroupTypeModeKind {
                none,
types,
typeAndTypes
            }

        /**
         * A Map of relationships between 2 structures that can be used to transform data. 
         */
        export class StructureMap_Group  {

            constructor() {
                this.Input = new Array<StructureMap_Input>();
this.Rule = new Array<StructureMap_Rule>();
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
                 * A unique name for the group for the convenience of human readers.
                 */
                Name? : Id;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * Another group that this group adds rules to.
                 */
                Extends? : Id;
                

                /**
                 * Extensions for extends
                 */
                _extends? : Element;
                

                /**
                 * If this is the default rule set to apply for the source type or this combination of types.
                 */
                TypeMode? : StructureMap_GroupTypeModeKind;
                

                /**
                 * Extensions for typeMode
                 */
                _typeMode? : Element;
                

                /**
                 * Additional supporting documentation that explains the purpose of the group and the types of mappings within it.
                 */
                Documentation? : String;
                

                /**
                 * Extensions for documentation
                 */
                _documentation? : Element;
                

                /**
                 * A name assigned to an instance of data. The instance must be provided when the mapping is invoked.
                 */
                Input : Array<StructureMap_Input>;
                

                /**
                 * Transform Rule from source to target.
                 */
                Rule : Array<StructureMap_Rule>;
                
        }
        