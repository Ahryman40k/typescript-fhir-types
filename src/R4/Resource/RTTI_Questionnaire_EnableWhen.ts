import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Coding, ICoding} from './RTTI_Coding';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {RTTI_Reference, IReference} from './RTTI_Reference';
export enum Questionnaire_EnableWhenOperatorKind {
  _exists = 'exists',
  _equal = '=',
  _notEqual = '!=',
  _greater = '>',
  _lower = '<',
  _greaterOrEqual = '>=',
  _lowerOrEqual = '<=',
}
import {createEnumType} from '../../EnumType';

export interface IQuestionnaire_EnableWhen {
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
   * The linkId for the question whose answer (or lack of answer) governs whether this item is enabled.
   */
  question?: string;

  /**
   * Extensions for question
   */
  _question?: IElement;

  /**
   * Specifies the criteria by which the question is enabled.
   */
  operator?: Questionnaire_EnableWhenOperatorKind;

  /**
   * Extensions for operator
   */
  _operator?: IElement;

  /**
   * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerBoolean?: boolean;

  /**
   * Extensions for answerBoolean
   */
  _answerBoolean?: IElement;

  /**
   * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerDecimal?: number;

  /**
   * Extensions for answerDecimal
   */
  _answerDecimal?: IElement;

  /**
   * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerInteger?: number;

  /**
   * Extensions for answerInteger
   */
  _answerInteger?: IElement;

  /**
   * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerDate?: string;

  /**
   * Extensions for answerDate
   */
  _answerDate?: IElement;

  /**
   * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerDateTime?: string;

  /**
   * Extensions for answerDateTime
   */
  _answerDateTime?: IElement;

  /**
   * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerTime?: string;

  /**
   * Extensions for answerTime
   */
  _answerTime?: IElement;

  /**
   * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerString?: string;

  /**
   * Extensions for answerString
   */
  _answerString?: IElement;

  /**
   * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerCoding?: ICoding;

  /**
   * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerQuantity?: IQuantity;

  /**
   * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  answerReference?: IReference;
}

export const RTTI_Questionnaire_EnableWhen: t.Type<IQuestionnaire_EnableWhen> =
  t.recursion('IQuestionnaire_EnableWhen', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      question: t.string,
      _question: RTTI_Element,
      operator: createEnumType<Questionnaire_EnableWhenOperatorKind>(
        Questionnaire_EnableWhenOperatorKind,
        'Questionnaire_EnableWhenOperatorKind',
      ),
      _operator: RTTI_Element,
      answerBoolean: t.boolean,
      _answerBoolean: RTTI_Element,
      answerDecimal: t.number,
      _answerDecimal: RTTI_Element,
      answerInteger: t.number,
      _answerInteger: RTTI_Element,
      answerDate: t.string,
      _answerDate: RTTI_Element,
      answerDateTime: t.string,
      _answerDateTime: RTTI_Element,
      answerTime: t.string,
      _answerTime: RTTI_Element,
      answerString: t.string,
      _answerString: RTTI_Element,
      answerCoding: RTTI_Coding,
      answerQuantity: RTTI_Quantity,
      answerReference: RTTI_Reference,
    }),
  );
