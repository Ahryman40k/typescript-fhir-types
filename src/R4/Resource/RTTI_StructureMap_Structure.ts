import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_canonical} from '../Scalar/RTTI_canonical';
import {RTTI_Element, IElement} from './RTTI_Element';
export enum StructureMap_StructureModeKind {
  _source = 'source',
  _queried = 'queried',
  _target = 'target',
  _produced = 'produced',
}
import {createEnumType} from '../../EnumType';

export interface IStructureMap_Structure {
  /**
   * The canonical reference to the structure.
   */
  url: string;

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
   * How the referenced structure is used in this mapping.
   */
  mode?: StructureMap_StructureModeKind;

  /**
   * Extensions for mode
   */
  _mode?: IElement;

  /**
   * The name used for this type in the map.
   */
  alias?: string;

  /**
   * Extensions for alias
   */
  _alias?: IElement;

  /**
   * Documentation that describes how the structure is used in the mapping.
   */
  documentation?: string;

  /**
   * Extensions for documentation
   */
  _documentation?: IElement;
}

export const RTTI_StructureMap_Structure: t.Type<IStructureMap_Structure> =
  t.recursion('IStructureMap_Structure', () =>
    t.intersection([
      t.type({
        url: RTTI_canonical,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        mode: createEnumType<StructureMap_StructureModeKind>(
          StructureMap_StructureModeKind,
          'StructureMap_StructureModeKind',
        ),
        _mode: RTTI_Element,
        alias: t.string,
        _alias: RTTI_Element,
        documentation: t.string,
        _documentation: RTTI_Element,
      }),
    ]),
  );
