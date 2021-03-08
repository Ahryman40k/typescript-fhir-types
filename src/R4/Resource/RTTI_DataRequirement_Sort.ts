import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
export enum DataRequirement_SortDirectionKind {
  _ascending = 'ascending',
  _descending = 'descending',
}
import {createEnumType} from '../../EnumType';

export interface IDataRequirement_Sort {
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
   * The attribute of the sort. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant.
   */
  path?: string;

  /**
   * Extensions for path
   */
  _path?: IElement;

  /**
   * The direction of the sort, ascending or descending.
   */
  direction?: DataRequirement_SortDirectionKind;

  /**
   * Extensions for direction
   */
  _direction?: IElement;
}

export const RTTI_DataRequirement_Sort: t.Type<IDataRequirement_Sort> = t.recursion(
  'IDataRequirement_Sort',
  () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      path: t.string,
      _path: RTTI_Element,
      direction: createEnumType<DataRequirement_SortDirectionKind>(
        DataRequirement_SortDirectionKind,
        'DataRequirement_SortDirectionKind',
      ),
      _direction: RTTI_Element,
    }),
);
