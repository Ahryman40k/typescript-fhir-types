import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Timing, ITiming} from './RTTI_Timing';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {RTTI_Ratio, IRatio} from './RTTI_Ratio';

export interface INutritionOrder_Administration {
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
   * The time period and frequency at which the enteral formula should be delivered to the patient.
   */
  schedule?: ITiming;

  /**
   * The volume of formula to provide to the patient per the specified administration schedule.
   */
  quantity?: IQuantity;

  /**
   * The rate of administration of formula via a feeding pump, e.g. 60 mL per hour, according to the specified schedule.
   */
  rateQuantity?: IQuantity;

  /**
   * The rate of administration of formula via a feeding pump, e.g. 60 mL per hour, according to the specified schedule.
   */
  rateRatio?: IRatio;
}

export const RTTI_NutritionOrder_Administration: t.Type<INutritionOrder_Administration> =
  t.recursion('INutritionOrder_Administration', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      schedule: RTTI_Timing,
      quantity: RTTI_Quantity,
      rateQuantity: RTTI_Quantity,
      rateRatio: RTTI_Ratio,
    }),
  );
