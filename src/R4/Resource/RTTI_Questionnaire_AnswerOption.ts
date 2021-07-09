import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Coding, ICoding} from './RTTI_Coding';
import {RTTI_Reference, IReference} from './RTTI_Reference';

export interface IQuestionnaire_AnswerOption {
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
   * A potential answer that's allowed as the answer to this question.
   */
  valueInteger?: number;

  /**
   * Extensions for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * A potential answer that's allowed as the answer to this question.
   */
  valueDate?: string;

  /**
   * Extensions for valueDate
   */
  _valueDate?: IElement;

  /**
   * A potential answer that's allowed as the answer to this question.
   */
  valueTime?: string;

  /**
   * Extensions for valueTime
   */
  _valueTime?: IElement;

  /**
   * A potential answer that's allowed as the answer to this question.
   */
  valueString?: string;

  /**
   * Extensions for valueString
   */
  _valueString?: IElement;

  /**
   * A potential answer that's allowed as the answer to this question.
   */
  valueCoding?: ICoding;

  /**
   * A potential answer that's allowed as the answer to this question.
   */
  valueReference?: IReference;

  /**
   * Indicates whether the answer value is selected when the list of possible answers is initially shown.
   */
  initialSelected?: boolean;

  /**
   * Extensions for initialSelected
   */
  _initialSelected?: IElement;
}

export const RTTI_Questionnaire_AnswerOption: t.Type<IQuestionnaire_AnswerOption> =
  t.recursion('IQuestionnaire_AnswerOption', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      valueInteger: t.number,
      _valueInteger: RTTI_Element,
      valueDate: t.string,
      _valueDate: RTTI_Element,
      valueTime: t.string,
      _valueTime: RTTI_Element,
      valueString: t.string,
      _valueString: RTTI_Element,
      valueCoding: RTTI_Coding,
      valueReference: RTTI_Reference,
      initialSelected: t.boolean,
      _initialSelected: RTTI_Element,
    }),
  );
