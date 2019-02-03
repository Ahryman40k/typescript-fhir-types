
        import { Canonical } from '../Scalar/Canonical';
import { Code } from '../Scalar/Code';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Integer } from '../Scalar/Integer';
import { OperationDefinition_Binding } from '../Resource/OperationDefinition_Binding';
import { OperationDefinition_ReferencedFrom } from '../Resource/OperationDefinition_ReferencedFrom';

        export enum OperationDefinition_ParameterUseKind {
                in,
out
            }
export enum OperationDefinition_ParameterSearchTypeKind {
                number,
date,
string,
token,
reference,
composite,
quantity,
uri,
special
            }

        /**
         * A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). 
         */
        export class OperationDefinition_Parameter  {

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
                 * The name of used to identify the parameter.
                 */
                Name? : Code;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * Whether this is an input or an output parameter.
                 */
                Use? : OperationDefinition_ParameterUseKind;
                

                /**
                 * Extensions for use
                 */
                _use? : Element;
                

                /**
                 * The minimum number of times this parameter SHALL appear in the request or response.
                 */
                Min? : Integer;
                

                /**
                 * Extensions for min
                 */
                _min? : Element;
                

                /**
                 * The maximum number of times this element is permitted to appear in the request or response.
                 */
                Max? : String;
                

                /**
                 * Extensions for max
                 */
                _max? : Element;
                

                /**
                 * Describes the meaning or use of this parameter.
                 */
                Documentation? : String;
                

                /**
                 * Extensions for documentation
                 */
                _documentation? : Element;
                

                /**
                 * The type for this parameter.
                 */
                Type? : Code;
                

                /**
                 * Extensions for type
                 */
                _type? : Element;
                

                /**
                 * Used when the type is "Reference" or "canonical", and identifies a profile structure or implementation Guide that applies to the target of the reference this parameter refers to. If any profiles are specified, then the content must conform to at least one of them. The URL can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the target resource SHALL conform to at least one profile defined in the implementation guide.
                 */
                TargetProfile? : Array<Canonical>;
                

                /**
                 * How the parameter is understood as a search parameter. This is only used if the parameter type is 'string'.
                 */
                SearchType? : OperationDefinition_ParameterSearchTypeKind;
                

                /**
                 * Extensions for searchType
                 */
                _searchType? : Element;
                

                /**
                 * Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
                 */
                Binding? : OperationDefinition_Binding;
                

                /**
                 * Identifies other resource parameters within the operation invocation that are expected to resolve to this resource.
                 */
                ReferencedFrom? : Array<OperationDefinition_ReferencedFrom>;
                

                /**
                 * The parts of a nested Parameter.
                 */
                Part? : Array<OperationDefinition_Parameter>;
                
        }
        