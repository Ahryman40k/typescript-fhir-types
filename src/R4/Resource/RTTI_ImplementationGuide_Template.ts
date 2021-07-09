import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_code} from '../Scalar/RTTI_code';
import {RTTI_Element, IElement} from './RTTI_Element';

export interface IImplementationGuide_Template {
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
   * Type of template specified.
   */
  code?: string;

  /**
   * Extensions for code
   */
  _code?: IElement;

  /**
   * The source location for the template.
   */
  source?: string;

  /**
   * Extensions for source
   */
  _source?: IElement;

  /**
   * The scope in which the template applies.
   */
  scope?: string;

  /**
   * Extensions for scope
   */
  _scope?: IElement;
}

export const RTTI_ImplementationGuide_Template: t.Type<IImplementationGuide_Template> =
  t.recursion('IImplementationGuide_Template', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      code: RTTI_code,
      _code: RTTI_Element,
      source: t.string,
      _source: RTTI_Element,
      scope: t.string,
      _scope: RTTI_Element,
    }),
  );
