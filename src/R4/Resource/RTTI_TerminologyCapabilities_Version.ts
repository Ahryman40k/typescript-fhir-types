import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_code} from '../Scalar/RTTI_code';
import {
  RTTI_TerminologyCapabilities_Filter,
  ITerminologyCapabilities_Filter,
} from './RTTI_TerminologyCapabilities_Filter';

export interface ITerminologyCapabilities_Version {
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
   * For version-less code systems, there should be a single version with no identifier.
   */
  code?: string;

  /**
   * Extensions for code
   */
  _code?: IElement;

  /**
   * If this is the default version for this code system.
   */
  isDefault?: boolean;

  /**
   * Extensions for isDefault
   */
  _isDefault?: IElement;

  /**
   * If the compositional grammar defined by the code system is supported.
   */
  compositional?: boolean;

  /**
   * Extensions for compositional
   */
  _compositional?: IElement;

  /**
   * Language Displays supported.
   */
  language?: string[];

  /**
   * Extensions for language
   */
  _language?: IElement[];

  /**
   * Filter Properties supported.
   */
  filter?: ITerminologyCapabilities_Filter[];

  /**
   * Properties supported for $lookup.
   */
  property?: string[];

  /**
   * Extensions for property
   */
  _property?: IElement[];
}

export const RTTI_TerminologyCapabilities_Version: t.Type<ITerminologyCapabilities_Version> =
  t.recursion('ITerminologyCapabilities_Version', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      code: t.string,
      _code: RTTI_Element,
      isDefault: t.boolean,
      _isDefault: RTTI_Element,
      compositional: t.boolean,
      _compositional: RTTI_Element,
      language: t.array(RTTI_code),
      _language: t.array(RTTI_Element),
      filter: t.array(RTTI_TerminologyCapabilities_Filter),
      property: t.array(RTTI_code),
      _property: t.array(RTTI_Element),
    }),
  );
