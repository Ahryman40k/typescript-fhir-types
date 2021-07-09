import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_decimal} from '../Scalar/RTTI_decimal';
import {RTTI_integer} from '../Scalar/RTTI_integer';
import {
  RTTI_RiskEvidenceSynthesis_PrecisionEstimate,
  IRiskEvidenceSynthesis_PrecisionEstimate,
} from './RTTI_RiskEvidenceSynthesis_PrecisionEstimate';

export interface IRiskEvidenceSynthesis_RiskEstimate {
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
   * Human-readable summary of risk estimate.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * Examples include proportion and mean.
   */
  type?: ICodeableConcept;

  /**
   * The point estimate of the risk estimate.
   */
  value?: number;

  /**
   * Extensions for value
   */
  _value?: IElement;

  /**
   * Specifies the UCUM unit for the outcome.
   */
  unitOfMeasure?: ICodeableConcept;

  /**
   * The sample size for the group that was measured for this risk estimate.
   */
  denominatorCount?: number;

  /**
   * Extensions for denominatorCount
   */
  _denominatorCount?: IElement;

  /**
   * The number of group members with the outcome of interest.
   */
  numeratorCount?: number;

  /**
   * Extensions for numeratorCount
   */
  _numeratorCount?: IElement;

  /**
   * A description of the precision of the estimate for the effect.
   */
  precisionEstimate?: IRiskEvidenceSynthesis_PrecisionEstimate[];
}

export const RTTI_RiskEvidenceSynthesis_RiskEstimate: t.Type<IRiskEvidenceSynthesis_RiskEstimate> =
  t.recursion('IRiskEvidenceSynthesis_RiskEstimate', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      description: t.string,
      _description: RTTI_Element,
      type: RTTI_CodeableConcept,
      value: RTTI_decimal,
      _value: RTTI_Element,
      unitOfMeasure: RTTI_CodeableConcept,
      denominatorCount: RTTI_integer,
      _denominatorCount: RTTI_Element,
      numeratorCount: RTTI_integer,
      _numeratorCount: RTTI_Element,
      precisionEstimate: t.array(RTTI_RiskEvidenceSynthesis_PrecisionEstimate),
    }),
  );
