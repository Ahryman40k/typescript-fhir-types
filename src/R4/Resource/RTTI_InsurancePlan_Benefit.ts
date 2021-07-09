import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element, IElement} from './RTTI_Element';
import {
  RTTI_InsurancePlan_Limit,
  IInsurancePlan_Limit,
} from './RTTI_InsurancePlan_Limit';

export interface IInsurancePlan_Benefit {
  /**
   * Type of benefit (primary care; speciality care; inpatient; outpatient).
   */
  type: ICodeableConcept;

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
   * The referral requirements to have access/coverage for this benefit.
   */
  requirement?: string;

  /**
   * Extensions for requirement
   */
  _requirement?: IElement;

  /**
   * The specific limits on the benefit.
   */
  limit?: IInsurancePlan_Limit[];
}

export const RTTI_InsurancePlan_Benefit: t.Type<IInsurancePlan_Benefit> =
  t.recursion('IInsurancePlan_Benefit', () =>
    t.intersection([
      t.type({
        type: RTTI_CodeableConcept,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        requirement: t.string,
        _requirement: RTTI_Element,
        limit: t.array(RTTI_InsurancePlan_Limit),
      }),
    ]),
  );
