import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_id} from '../Scalar/RTTI_id';
import {RTTI_Element, IElement} from './RTTI_Element';
import {
  RTTI_StructureMap_Parameter,
  IStructureMap_Parameter,
} from './RTTI_StructureMap_Parameter';
export enum StructureMap_TargetListModeKind {
  _first = 'first',
  _share = 'share',
  _last = 'last',
  _collate = 'collate',
}
export enum StructureMap_TargetContextTypeKind {
  _type = 'type',
  _variable = 'variable',
}
export enum StructureMap_TargetTransformKind {
  _create = 'create',
  _copy = 'copy',
  _truncate = 'truncate',
  _escape = 'escape',
  _cast = 'cast',
  _append = 'append',
  _translate = 'translate',
  _reference = 'reference',
  _dateOp = 'dateOp',
  _uuid = 'uuid',
  _pointer = 'pointer',
  _evaluate = 'evaluate',
  _cc = 'cc',
  _c = 'c',
  _qty = 'qty',
  _id = 'id',
  _cp = 'cp',
}
import {createEnumType} from '../../EnumType';

export interface IStructureMap_Target {
  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
  modifierExtension?: IExtension[];

  /**
   * Type or variable this rule applies to.
   */
  context?: string;

  /**
   * Extensions for context
   */
  _context?: IElement;

  /**
   * How to interpret the context.
   */
  contextType?: StructureMap_TargetContextTypeKind;

  /**
   * Extensions for contextType
   */
  _contextType?: IElement;

  /**
   * Field to create in the context.
   */
  element?: string;

  /**
   * Extensions for element
   */
  _element?: IElement;

  /**
   * Named context for field, if desired, and a field is specified.
   */
  variable?: string;

  /**
   * Extensions for variable
   */
  _variable?: IElement;

  /**
   * If field is a list, how to manage the list.
   */
  listMode?: StructureMap_TargetListModeKind[];

  /**
   * Extensions for listMode
   */
  _listMode?: IElement[];

  /**
   * Internal rule reference for shared list items.
   */
  listRuleId?: string;

  /**
   * Extensions for listRuleId
   */
  _listRuleId?: IElement;

  /**
   * How the data is copied / created.
   */
  transform?: StructureMap_TargetTransformKind;

  /**
   * Extensions for transform
   */
  _transform?: IElement;

  /**
   * Parameters to the transform.
   */
  parameter?: IStructureMap_Parameter[];
}

export const RTTI_StructureMap_Target: t.Type<IStructureMap_Target> =
  t.recursion('IStructureMap_Target', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      context: RTTI_id,
      _context: RTTI_Element,
      contextType: createEnumType<StructureMap_TargetContextTypeKind>(
        StructureMap_TargetContextTypeKind,
        'StructureMap_TargetContextTypeKind',
      ),
      _contextType: RTTI_Element,
      element: t.string,
      _element: RTTI_Element,
      variable: RTTI_id,
      _variable: RTTI_Element,
      listMode: t.array(
        createEnumType<StructureMap_TargetListModeKind>(
          StructureMap_TargetListModeKind,
          'StructureMap_TargetListModeKind',
        ),
      ),
      _listMode: t.array(RTTI_Element),
      listRuleId: RTTI_id,
      _listRuleId: RTTI_Element,
      transform: createEnumType<StructureMap_TargetTransformKind>(
        StructureMap_TargetTransformKind,
        'StructureMap_TargetTransformKind',
      ),
      _transform: RTTI_Element,
      parameter: t.array(RTTI_StructureMap_Parameter),
    }),
  );
