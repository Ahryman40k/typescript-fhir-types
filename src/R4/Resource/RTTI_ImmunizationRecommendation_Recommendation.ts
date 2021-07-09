import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {
  RTTI_ImmunizationRecommendation_DateCriterion,
  IImmunizationRecommendation_DateCriterion,
} from './RTTI_ImmunizationRecommendation_DateCriterion';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Reference, IReference} from './RTTI_Reference';

export interface IImmunizationRecommendation_Recommendation {
  /**
   * Indicates the patient status with respect to the path to immunity for the target disease.
   */
  forecastStatus: ICodeableConcept;

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
   * Vaccine(s) or vaccine group that pertain to the recommendation.
   */
  vaccineCode?: ICodeableConcept[];

  /**
   * The targeted disease for the recommendation.
   */
  targetDisease?: ICodeableConcept;

  /**
   * Vaccine(s) which should not be used to fulfill the recommendation.
   */
  contraindicatedVaccineCode?: ICodeableConcept[];

  /**
   * The reason for the assigned forecast status.
   */
  forecastReason?: ICodeableConcept[];

  /**
   * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
   */
  dateCriterion?: IImmunizationRecommendation_DateCriterion[];

  /**
   * Contains the description about the protocol under which the vaccine was administered.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * One possible path to achieve presumed immunity against a disease - within the context of an authority.
   */
  series?: string;

  /**
   * Extensions for series
   */
  _series?: IElement;

  /**
   * Nominal position of the recommended dose in a series (e.g. dose 2 is the next recommended dose).
   */
  doseNumberPositiveInt?: number;

  /**
   * Extensions for doseNumberPositiveInt
   */
  _doseNumberPositiveInt?: IElement;

  /**
   * Nominal position of the recommended dose in a series (e.g. dose 2 is the next recommended dose).
   */
  doseNumberString?: string;

  /**
   * Extensions for doseNumberString
   */
  _doseNumberString?: IElement;

  /**
   * The recommended number of doses to achieve immunity.
   */
  seriesDosesPositiveInt?: number;

  /**
   * Extensions for seriesDosesPositiveInt
   */
  _seriesDosesPositiveInt?: IElement;

  /**
   * The recommended number of doses to achieve immunity.
   */
  seriesDosesString?: string;

  /**
   * Extensions for seriesDosesString
   */
  _seriesDosesString?: IElement;

  /**
   * Immunization event history and/or evaluation that supports the status and recommendation.
   */
  supportingImmunization?: IReference[];

  /**
   * Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information.
   */
  supportingPatientInformation?: IReference[];
}

export const RTTI_ImmunizationRecommendation_Recommendation: t.Type<IImmunizationRecommendation_Recommendation> =
  t.recursion('IImmunizationRecommendation_Recommendation', () =>
    t.intersection([
      t.type({
        forecastStatus: RTTI_CodeableConcept,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        vaccineCode: t.array(RTTI_CodeableConcept),
        targetDisease: RTTI_CodeableConcept,
        contraindicatedVaccineCode: t.array(RTTI_CodeableConcept),
        forecastReason: t.array(RTTI_CodeableConcept),
        dateCriterion: t.array(RTTI_ImmunizationRecommendation_DateCriterion),
        description: t.string,
        _description: RTTI_Element,
        series: t.string,
        _series: RTTI_Element,
        doseNumberPositiveInt: t.number,
        _doseNumberPositiveInt: RTTI_Element,
        doseNumberString: t.string,
        _doseNumberString: RTTI_Element,
        seriesDosesPositiveInt: t.number,
        _seriesDosesPositiveInt: RTTI_Element,
        seriesDosesString: t.string,
        _seriesDosesString: RTTI_Element,
        supportingImmunization: t.array(RTTI_Reference),
        supportingPatientInformation: t.array(RTTI_Reference),
      }),
    ]),
  );
