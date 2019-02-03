
        import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { StructureMap_Parameter } from '../Resource/StructureMap_Parameter';

        export enum StructureMap_TargetListModeKind {
                first,
share,
last,
collate
            }
export enum StructureMap_TargetContextTypeKind {
                type,
variable
            }
export enum StructureMap_TargetTransformKind {
                create,
copy,
truncate,
escape,
cast,
append,
translate,
reference,
dateOp,
uuid,
pointer,
evaluate,
cc,
c,
qty,
id,
cp
            }

        /**
         * A Map of relationships between 2 structures that can be used to transform data. 
         */
        export class StructureMap_Target  {

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
                 * Type or variable this rule applies to.
                 */
                Context? : Id;
                

                /**
                 * Extensions for context
                 */
                _context? : Element;
                

                /**
                 * How to interpret the context.
                 */
                ContextType? : StructureMap_TargetContextTypeKind;
                

                /**
                 * Extensions for contextType
                 */
                _contextType? : Element;
                

                /**
                 * Field to create in the context.
                 */
                Element? : String;
                

                /**
                 * Extensions for element
                 */
                _element? : Element;
                

                /**
                 * Named context for field, if desired, and a field is specified.
                 */
                Variable? : Id;
                

                /**
                 * Extensions for variable
                 */
                _variable? : Element;
                

                /**
                 * If field is a list, how to manage the list.
                 */
                ListMode? : StructureMap_TargetListModeKind[];
                

                /**
                 * Extensions for listMode
                 */
                _listMode? : Array<Element>;
                

                /**
                 * Internal rule reference for shared list items.
                 */
                ListRuleId? : Id;
                

                /**
                 * Extensions for listRuleId
                 */
                _listRuleId? : Element;
                

                /**
                 * How the data is copied / created.
                 */
                Transform? : StructureMap_TargetTransformKind;
                

                /**
                 * Extensions for transform
                 */
                _transform? : Element;
                

                /**
                 * Parameters to the transform.
                 */
                Parameter? : Array<StructureMap_Parameter>;
                
        }
        