
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';

import {RTTI_OperationDefinition_Binding, IOperationDefinition_Binding} from './RTTI_OperationDefinition_Binding';
import {RTTI_OperationDefinition_ReferencedFrom, IOperationDefinition_ReferencedFrom} from './RTTI_OperationDefinition_ReferencedFrom';

export enum OperationDefinition_ParameterUseKind {
                in = 'in',
out = 'out'
            }
export enum OperationDefinition_ParameterSearchTypeKind {
                number = 'number',
date = 'date',
string = 'string',
token = 'token',
reference = 'reference',
composite = 'composite',
quantity = 'quantity',
uri = 'uri',
special = 'special'
            }
const OperationDefinition_ParameterUseKindKeys = t.keyof({
                [OperationDefinition_ParameterUseKind.in]: null,
[OperationDefinition_ParameterUseKind.out]: null
            });
const OperationDefinition_ParameterSearchTypeKindKeys = t.keyof({
                [OperationDefinition_ParameterSearchTypeKind.number]: null,
[OperationDefinition_ParameterSearchTypeKind.date]: null,
[OperationDefinition_ParameterSearchTypeKind.string]: null,
[OperationDefinition_ParameterSearchTypeKind.token]: null,
[OperationDefinition_ParameterSearchTypeKind.reference]: null,
[OperationDefinition_ParameterSearchTypeKind.composite]: null,
[OperationDefinition_ParameterSearchTypeKind.quantity]: null,
[OperationDefinition_ParameterSearchTypeKind.uri]: null,
[OperationDefinition_ParameterSearchTypeKind.special]: null
            });


            export interface IOperationDefinition_Parameter {
                
                
                    /**
                     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                     */
                    id? : string;
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * The name of used to identify the parameter.
                     */
                    name? : string;
                    

                    /**
                     * Extensions for name
                     */
                    _name? : IElement;
                    

                    /**
                     * Whether this is an input or an output parameter.
                     */
                    use? : OperationDefinition_ParameterUseKind;
                    

                    /**
                     * Extensions for use
                     */
                    _use? : IElement;
                    

                    /**
                     * The minimum number of times this parameter SHALL appear in the request or response.
                     */
                    min? : number;
                    

                    /**
                     * Extensions for min
                     */
                    _min? : IElement;
                    

                    /**
                     * The maximum number of times this element is permitted to appear in the request or response.
                     */
                    max? : string;
                    

                    /**
                     * Extensions for max
                     */
                    _max? : IElement;
                    

                    /**
                     * Describes the meaning or use of this parameter.
                     */
                    documentation? : string;
                    

                    /**
                     * Extensions for documentation
                     */
                    _documentation? : IElement;
                    

                    /**
                     * The type for this parameter.
                     */
                    type? : string;
                    

                    /**
                     * Extensions for type
                     */
                    _type? : IElement;
                    

                    /**
                     * Used when the type is "Reference" or "canonical", and identifies a profile structure or implementation Guide that applies to the target of the reference this parameter refers to. If any profiles are specified, then the content must conform to at least one of them. The URL can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the target resource SHALL conform to at least one profile defined in the implementation guide.
                     */
                    targetProfile? : string[];
                    

                    /**
                     * How the parameter is understood as a search parameter. This is only used if the parameter type is 'string'.
                     */
                    searchType? : OperationDefinition_ParameterSearchTypeKind;
                    

                    /**
                     * Extensions for searchType
                     */
                    _searchType? : IElement;
                    

                    /**
                     * Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
                     */
                    binding? : IOperationDefinition_Binding;
                    

                    /**
                     * Identifies other resource parameters within the operation invocation that are expected to resolve to this resource.
                     */
                    referencedFrom? : IOperationDefinition_ReferencedFrom[];
                    

                    /**
                     * The parts of a nested Parameter.
                     */
                    part? : IOperationDefinition_Parameter[];
                    
            }
        


        export const RTTI_OperationDefinition_Parameter: t.Type<IOperationDefinition_Parameter> = t.recursion( 'IOperationDefinition_Parameter', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
name: t.string,
_name: RTTI_Element,
use: OperationDefinition_ParameterUseKindKeys,
_use: RTTI_Element,
min: t.number,
_min: RTTI_Element,
max: t.string,
_max: RTTI_Element,
documentation: t.string,
_documentation: RTTI_Element,
type: t.string,
_type: RTTI_Element,
targetProfile: t.array(t.string),
searchType: OperationDefinition_ParameterSearchTypeKindKeys,
_searchType: RTTI_Element,
binding: RTTI_OperationDefinition_Binding,
referencedFrom: t.array(RTTI_OperationDefinition_ReferencedFrom),
part: t.array(RTTI_OperationDefinition_Parameter)
        })
        
        );
        

        