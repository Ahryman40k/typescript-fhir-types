import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_unsignedInt} from '../Scalar/RTTI_unsignedInt';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Coding, ICoding} from './RTTI_Coding';

export interface IContract_SecurityLabel {
  /**
   * Security label privacy tag that species the level of confidentiality protection required for this term and/or term elements.
   */
  classification: ICoding;

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
   * Number used to link this term or term element to the applicable Security Label.
   */
  number?: number[];

  /**
   * Extensions for number
   */
  _number?: IElement[];

  /**
   * Security label privacy tag that species the applicable privacy and security policies governing this term and/or term elements.
   */
  category?: ICoding[];

  /**
   * Security label privacy tag that species the manner in which term and/or term elements are to be protected.
   */
  control?: ICoding[];
}

export const RTTI_Contract_SecurityLabel: t.Type<IContract_SecurityLabel> =
  t.recursion('IContract_SecurityLabel', () =>
    t.intersection([
      t.type({
        classification: RTTI_Coding,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        number: t.array(RTTI_unsignedInt),
        _number: t.array(RTTI_Element),
        category: t.array(RTTI_Coding),
        control: t.array(RTTI_Coding),
      }),
    ]),
  );
