import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_id} from '../Scalar/RTTI_id';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_code} from '../Scalar/RTTI_code';

export interface IElementDefinition_Mapping {
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
   * An internal reference to the definition of a mapping.
   */
  identity?: string;

  /**
   * Extensions for identity
   */
  _identity?: IElement;

  /**
   * Identifies the computable language in which mapping.map is expressed.
   */
  language?: string;

  /**
   * Extensions for language
   */
  _language?: IElement;

  /**
   * Expresses what part of the target specification corresponds to this element.
   */
  map?: string;

  /**
   * Extensions for map
   */
  _map?: IElement;

  /**
   * Comments that provide information about the mapping or its use.
   */
  comment?: string;

  /**
   * Extensions for comment
   */
  _comment?: IElement;
}

export const RTTI_ElementDefinition_Mapping: t.Type<IElementDefinition_Mapping> =
  t.recursion('IElementDefinition_Mapping', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      identity: RTTI_id,
      _identity: RTTI_Element,
      language: RTTI_code,
      _language: RTTI_Element,
      map: t.string,
      _map: RTTI_Element,
      comment: t.string,
      _comment: RTTI_Element,
    }),
  );
