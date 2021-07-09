import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Attachment, IAttachment} from './RTTI_Attachment';
import {RTTI_Coding, ICoding} from './RTTI_Coding';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {RTTI_Reference, IReference} from './RTTI_Reference';

export interface IQuestionnaire_Initial {
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
   * The actual value to for an initial answer.
   */
  valueBoolean?: boolean;

  /**
   * Extensions for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * The actual value to for an initial answer.
   */
  valueDecimal?: number;

  /**
   * Extensions for valueDecimal
   */
  _valueDecimal?: IElement;

  /**
   * The actual value to for an initial answer.
   */
  valueInteger?: number;

  /**
   * Extensions for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * The actual value to for an initial answer.
   */
  valueDate?: string;

  /**
   * Extensions for valueDate
   */
  _valueDate?: IElement;

  /**
   * The actual value to for an initial answer.
   */
  valueDateTime?: string;

  /**
   * Extensions for valueDateTime
   */
  _valueDateTime?: IElement;

  /**
   * The actual value to for an initial answer.
   */
  valueTime?: string;

  /**
   * Extensions for valueTime
   */
  _valueTime?: IElement;

  /**
   * The actual value to for an initial answer.
   */
  valueString?: string;

  /**
   * Extensions for valueString
   */
  _valueString?: IElement;

  /**
   * The actual value to for an initial answer.
   */
  valueUri?: string;

  /**
   * Extensions for valueUri
   */
  _valueUri?: IElement;

  /**
   * The actual value to for an initial answer.
   */
  valueAttachment?: IAttachment;

  /**
   * The actual value to for an initial answer.
   */
  valueCoding?: ICoding;

  /**
   * The actual value to for an initial answer.
   */
  valueQuantity?: IQuantity;

  /**
   * The actual value to for an initial answer.
   */
  valueReference?: IReference;
}

export const RTTI_Questionnaire_Initial: t.Type<IQuestionnaire_Initial> =
  t.recursion('IQuestionnaire_Initial', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      valueBoolean: t.boolean,
      _valueBoolean: RTTI_Element,
      valueDecimal: t.number,
      _valueDecimal: RTTI_Element,
      valueInteger: t.number,
      _valueInteger: RTTI_Element,
      valueDate: t.string,
      _valueDate: RTTI_Element,
      valueDateTime: t.string,
      _valueDateTime: RTTI_Element,
      valueTime: t.string,
      _valueTime: RTTI_Element,
      valueString: t.string,
      _valueString: RTTI_Element,
      valueUri: t.string,
      _valueUri: RTTI_Element,
      valueAttachment: RTTI_Attachment,
      valueCoding: RTTI_Coding,
      valueQuantity: RTTI_Quantity,
      valueReference: RTTI_Reference,
    }),
  );
