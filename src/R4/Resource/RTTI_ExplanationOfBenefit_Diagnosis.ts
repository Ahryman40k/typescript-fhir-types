import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_positiveInt} from '../Scalar/RTTI_positiveInt';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference, IReference} from './RTTI_Reference';

export interface IExplanationOfBenefit_Diagnosis {
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
   * A number to uniquely identify diagnosis entries.
   */
  sequence?: number;

  /**
   * Extensions for sequence
   */
  _sequence?: IElement;

  /**
   * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
   */
  diagnosisCodeableConcept?: ICodeableConcept;

  /**
   * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
   */
  diagnosisReference?: IReference;

  /**
   * When the condition was observed or the relative ranking.
   */
  type?: ICodeableConcept[];

  /**
   * Indication of whether the diagnosis was present on admission to a facility.
   */
  onAdmission?: ICodeableConcept;

  /**
   * A package billing code or bundle code used to group products and services to a particular health condition (such as heart attack) which is based on a predetermined grouping code system.
   */
  packageCode?: ICodeableConcept;
}

export const RTTI_ExplanationOfBenefit_Diagnosis: t.Type<IExplanationOfBenefit_Diagnosis> =
  t.recursion('IExplanationOfBenefit_Diagnosis', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      sequence: RTTI_positiveInt,
      _sequence: RTTI_Element,
      diagnosisCodeableConcept: RTTI_CodeableConcept,
      diagnosisReference: RTTI_Reference,
      type: t.array(RTTI_CodeableConcept),
      onAdmission: RTTI_CodeableConcept,
      packageCode: RTTI_CodeableConcept,
    }),
  );
