import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_uri} from '../Scalar/RTTI_uri';
import {
  RTTI_QuestionnaireResponse_Answer,
  IQuestionnaireResponse_Answer,
} from './RTTI_QuestionnaireResponse_Answer';

export interface IQuestionnaireResponse_Item {
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
   * The item from the Questionnaire that corresponds to this item in the QuestionnaireResponse resource.
   */
  linkId?: string;

  /**
   * Extensions for linkId
   */
  _linkId?: IElement;

  /**
   * A reference to an [[[ElementDefinition]]] that provides the details for the item.
   */
  definition?: string;

  /**
   * Extensions for definition
   */
  _definition?: IElement;

  /**
   * Text that is displayed above the contents of the group or as the text of the question being answered.
   */
  text?: string;

  /**
   * Extensions for text
   */
  _text?: IElement;

  /**
   * The respondent's answer(s) to the question.
   */
  answer?: IQuestionnaireResponse_Answer[];

  /**
   * Questions or sub-groups nested beneath a question or group.
   */
  item?: IQuestionnaireResponse_Item[];
}

export const RTTI_QuestionnaireResponse_Item: t.Type<IQuestionnaireResponse_Item> =
  t.recursion('IQuestionnaireResponse_Item', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      linkId: t.string,
      _linkId: RTTI_Element,
      definition: RTTI_uri,
      _definition: RTTI_Element,
      text: t.string,
      _text: RTTI_Element,
      answer: t.array(RTTI_QuestionnaireResponse_Answer),
      item: t.array(RTTI_QuestionnaireResponse_Item),
    }),
  );
