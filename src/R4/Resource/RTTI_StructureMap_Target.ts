
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_StructureMap_Parameter, IStructureMap_Parameter} from './RTTI_StructureMap_Parameter';

export enum StructureMap_TargetListModeKind {
                first = 'first',
share = 'share',
last = 'last',
collate = 'collate'
            }
export enum StructureMap_TargetContextTypeKind {
                type = 'type',
variable = 'variable'
            }
export enum StructureMap_TargetTransformKind {
                create = 'create',
copy = 'copy',
truncate = 'truncate',
escape = 'escape',
cast = 'cast',
append = 'append',
translate = 'translate',
reference = 'reference',
dateOp = 'dateOp',
uuid = 'uuid',
pointer = 'pointer',
evaluate = 'evaluate',
cc = 'cc',
c = 'c',
qty = 'qty',
id = 'id',
cp = 'cp'
            }
const StructureMap_TargetListModeKindKeys = t.keyof({
                [StructureMap_TargetListModeKind.first]: null,
[StructureMap_TargetListModeKind.share]: null,
[StructureMap_TargetListModeKind.last]: null,
[StructureMap_TargetListModeKind.collate]: null
            });
const StructureMap_TargetContextTypeKindKeys = t.keyof({
                [StructureMap_TargetContextTypeKind.type]: null,
[StructureMap_TargetContextTypeKind.variable]: null
            });
const StructureMap_TargetTransformKindKeys = t.keyof({
                [StructureMap_TargetTransformKind.create]: null,
[StructureMap_TargetTransformKind.copy]: null,
[StructureMap_TargetTransformKind.truncate]: null,
[StructureMap_TargetTransformKind.escape]: null,
[StructureMap_TargetTransformKind.cast]: null,
[StructureMap_TargetTransformKind.append]: null,
[StructureMap_TargetTransformKind.translate]: null,
[StructureMap_TargetTransformKind.reference]: null,
[StructureMap_TargetTransformKind.dateOp]: null,
[StructureMap_TargetTransformKind.uuid]: null,
[StructureMap_TargetTransformKind.pointer]: null,
[StructureMap_TargetTransformKind.evaluate]: null,
[StructureMap_TargetTransformKind.cc]: null,
[StructureMap_TargetTransformKind.c]: null,
[StructureMap_TargetTransformKind.qty]: null,
[StructureMap_TargetTransformKind.id]: null,
[StructureMap_TargetTransformKind.cp]: null
            });


            export interface IStructureMap_Target {
                
                
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
                     * Type or variable this rule applies to.
                     */
                    context? : string;
                    

                    /**
                     * Extensions for context
                     */
                    _context? : IElement;
                    

                    /**
                     * How to interpret the context.
                     */
                    contextType? : StructureMap_TargetContextTypeKind;
                    

                    /**
                     * Extensions for contextType
                     */
                    _contextType? : IElement;
                    

                    /**
                     * Field to create in the context.
                     */
                    element? : string;
                    

                    /**
                     * Extensions for element
                     */
                    _element? : IElement;
                    

                    /**
                     * Named context for field, if desired, and a field is specified.
                     */
                    variable? : string;
                    

                    /**
                     * Extensions for variable
                     */
                    _variable? : IElement;
                    

                    /**
                     * If field is a list, how to manage the list.
                     */
                    listMode? : StructureMap_TargetListModeKind[];
                    

                    /**
                     * Extensions for listMode
                     */
                    _listMode? : IElement[];
                    

                    /**
                     * Internal rule reference for shared list items.
                     */
                    listRuleId? : string;
                    

                    /**
                     * Extensions for listRuleId
                     */
                    _listRuleId? : IElement;
                    

                    /**
                     * How the data is copied / created.
                     */
                    transform? : StructureMap_TargetTransformKind;
                    

                    /**
                     * Extensions for transform
                     */
                    _transform? : IElement;
                    

                    /**
                     * Parameters to the transform.
                     */
                    parameter? : IStructureMap_Parameter[];
                    
            }
        


        export const RTTI_StructureMap_Target: t.Type<IStructureMap_Target> = t.recursion( 'IStructureMap_Target', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
context: t.string,
_context: RTTI_Element,
contextType: StructureMap_TargetContextTypeKindKeys,
_contextType: RTTI_Element,
element: t.string,
_element: RTTI_Element,
variable: t.string,
_variable: RTTI_Element,
listMode: t.array(StructureMap_TargetListModeKindKeys),
_listMode: t.array(RTTI_Element),
listRuleId: t.string,
_listRuleId: RTTI_Element,
transform: StructureMap_TargetTransformKindKeys,
_transform: RTTI_Element,
parameter: t.array(RTTI_StructureMap_Parameter)
        })
        
        );
        

        