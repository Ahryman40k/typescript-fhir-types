import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_positiveInt} from '../Scalar/RTTI_positiveInt';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Money, IMoney} from './RTTI_Money';

export interface IInsurancePlan_GeneralCost {
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
   * Type of cost.
   */
  type?: ICodeableConcept;

  /**
   * Number of participants enrolled in the plan.
   */
  groupSize?: number;

  /**
   * Extensions for groupSize
   */
  _groupSize?: IElement;

  /**
   * Value of the cost.
   */
  cost?: IMoney;

  /**
   * Additional information about the general costs associated with this plan.
   */
  comment?: string;

  /**
   * Extensions for comment
   */
  _comment?: IElement;
}

export const RTTI_InsurancePlan_GeneralCost: t.Type<IInsurancePlan_GeneralCost> =
  t.recursion('IInsurancePlan_GeneralCost', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      type: RTTI_CodeableConcept,
      groupSize: RTTI_positiveInt,
      _groupSize: RTTI_Element,
      cost: RTTI_Money,
      comment: t.string,
      _comment: RTTI_Element,
    }),
  );
