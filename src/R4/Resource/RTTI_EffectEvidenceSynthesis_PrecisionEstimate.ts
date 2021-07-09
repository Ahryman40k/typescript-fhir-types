import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_decimal} from '../Scalar/RTTI_decimal';
import {RTTI_Element, IElement} from './RTTI_Element';

export interface IEffectEvidenceSynthesis_PrecisionEstimate {
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
   * Examples include confidence interval and interquartile range.
   */
  type?: ICodeableConcept;

  /**
   * Use 95 for a 95% confidence interval.
   */
  level?: number;

  /**
   * Extensions for level
   */
  _level?: IElement;

  /**
   * Lower bound of confidence interval.
   */
  from?: number;

  /**
   * Extensions for from
   */
  _from?: IElement;

  /**
   * Upper bound of confidence interval.
   */
  to?: number;

  /**
   * Extensions for to
   */
  _to?: IElement;
}

export const RTTI_EffectEvidenceSynthesis_PrecisionEstimate: t.Type<IEffectEvidenceSynthesis_PrecisionEstimate> =
  t.recursion('IEffectEvidenceSynthesis_PrecisionEstimate', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      type: RTTI_CodeableConcept,
      level: RTTI_decimal,
      _level: RTTI_Element,
      from: RTTI_decimal,
      _from: RTTI_Element,
      to: RTTI_decimal,
      _to: RTTI_Element,
    }),
  );
