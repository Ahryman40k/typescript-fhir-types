import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_code} from '../Scalar/RTTI_code';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Coding, ICoding} from './RTTI_Coding';

export interface ICodeSystem_Designation {
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
   * The language this designation is defined for.
   */
  language?: string;

  /**
   * Extensions for language
   */
  _language?: IElement;

  /**
   * A code that details how this designation would be used.
   */
  use?: ICoding;

  /**
   * The text value for this designation.
   */
  value?: string;

  /**
   * Extensions for value
   */
  _value?: IElement;
}

export const RTTI_CodeSystem_Designation: t.Type<ICodeSystem_Designation> =
  t.recursion('ICodeSystem_Designation', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      language: RTTI_code,
      _language: RTTI_Element,
      use: RTTI_Coding,
      value: t.string,
      _value: RTTI_Element,
    }),
  );
