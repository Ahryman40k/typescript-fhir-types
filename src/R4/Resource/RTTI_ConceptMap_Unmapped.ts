import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_code} from '../Scalar/RTTI_code';
import {RTTI_canonical} from '../Scalar/RTTI_canonical';
export enum ConceptMap_UnmappedModeKind {
  _provided = 'provided',
  _fixed = 'fixed',
  _otherMap = 'other-map',
}
import {createEnumType} from '../../EnumType';

export interface IConceptMap_Unmapped {
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
   * Defines which action to take if there is no match for the source concept in the target system designated for the group. One of 3 actions are possible: use the unmapped code (this is useful when doing a mapping between versions, and only a few codes have changed), use a fixed code (a default code), or alternatively, a reference to a different concept map can be provided (by canonical URL).
   */
  mode?: ConceptMap_UnmappedModeKind;

  /**
   * Extensions for mode
   */
  _mode?: IElement;

  /**
   * The fixed code to use when the mode = 'fixed'  - all unmapped codes are mapped to a single fixed code.
   */
  code?: string;

  /**
   * Extensions for code
   */
  _code?: IElement;

  /**
   * The display for the code. The display is only provided to help editors when editing the concept map.
   */
  display?: string;

  /**
   * Extensions for display
   */
  _display?: IElement;

  /**
   * The canonical reference to an additional ConceptMap resource instance to use for mapping if this ConceptMap resource contains no matching mapping for the source concept.
   */
  url?: string;
}

export const RTTI_ConceptMap_Unmapped: t.Type<IConceptMap_Unmapped> =
  t.recursion('IConceptMap_Unmapped', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      mode: createEnumType<ConceptMap_UnmappedModeKind>(
        ConceptMap_UnmappedModeKind,
        'ConceptMap_UnmappedModeKind',
      ),
      _mode: RTTI_Element,
      code: RTTI_code,
      _code: RTTI_Element,
      display: t.string,
      _display: RTTI_Element,
      url: RTTI_canonical,
    }),
  );
