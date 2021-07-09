import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';

export interface IImmunization_ProtocolApplied {
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
   * One possible path to achieve presumed immunity against a disease - within the context of an authority.
   */
  series?: string;

  /**
   * Extensions for series
   */
  _series?: IElement;

  /**
   * Indicates the authority who published the protocol (e.g. ACIP) that is being followed.
   */
  authority?: IReference;

  /**
   * The vaccine preventable disease the dose is being administered against.
   */
  targetDisease?: ICodeableConcept[];

  /**
   * Nominal position in a series.
   */
  doseNumberPositiveInt?: number;

  /**
   * Extensions for doseNumberPositiveInt
   */
  _doseNumberPositiveInt?: IElement;

  /**
   * Nominal position in a series.
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
}

export const RTTI_Immunization_ProtocolApplied: t.Type<IImmunization_ProtocolApplied> =
  t.recursion('IImmunization_ProtocolApplied', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      series: t.string,
      _series: RTTI_Element,
      authority: RTTI_Reference,
      targetDisease: t.array(RTTI_CodeableConcept),
      doseNumberPositiveInt: t.number,
      _doseNumberPositiveInt: RTTI_Element,
      doseNumberString: t.string,
      _doseNumberString: RTTI_Element,
      seriesDosesPositiveInt: t.number,
      _seriesDosesPositiveInt: RTTI_Element,
      seriesDosesString: t.string,
      _seriesDosesString: RTTI_Element,
    }),
  );
