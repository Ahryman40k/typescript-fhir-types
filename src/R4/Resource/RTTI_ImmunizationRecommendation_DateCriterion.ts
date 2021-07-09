import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_dateTime} from '../Scalar/RTTI_dateTime';
import {RTTI_Element, IElement} from './RTTI_Element';

export interface IImmunizationRecommendation_DateCriterion {
  /**
   * Date classification of recommendation.  For example, earliest date to give, latest date to give, etc.
   */
  code: ICodeableConcept;

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
   * The date whose meaning is specified by dateCriterion.code.
   */
  value?: string;

  /**
   * Extensions for value
   */
  _value?: IElement;
}

export const RTTI_ImmunizationRecommendation_DateCriterion: t.Type<IImmunizationRecommendation_DateCriterion> =
  t.recursion('IImmunizationRecommendation_DateCriterion', () =>
    t.intersection([
      t.type({
        code: RTTI_CodeableConcept,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        value: RTTI_dateTime,
        _value: RTTI_Element,
      }),
    ]),
  );
