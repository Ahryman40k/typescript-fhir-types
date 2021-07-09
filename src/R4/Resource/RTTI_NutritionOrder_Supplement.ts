import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Timing, ITiming} from './RTTI_Timing';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';

export interface INutritionOrder_Supplement {
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
   * The kind of nutritional supplement product required such as a high protein or pediatric clear liquid supplement.
   */
  type?: ICodeableConcept;

  /**
   * The product or brand name of the nutritional supplement such as "Acme Protein Shake".
   */
  productName?: string;

  /**
   * Extensions for productName
   */
  _productName?: IElement;

  /**
   * The time period and frequency at which the supplement(s) should be given.  The supplement should be given for the combination of all schedules if more than one schedule is present.
   */
  schedule?: ITiming[];

  /**
   * The amount of the nutritional supplement to be given.
   */
  quantity?: IQuantity;

  /**
   * Free text or additional instructions or information pertaining to the oral supplement.
   */
  instruction?: string;

  /**
   * Extensions for instruction
   */
  _instruction?: IElement;
}

export const RTTI_NutritionOrder_Supplement: t.Type<INutritionOrder_Supplement> =
  t.recursion('INutritionOrder_Supplement', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      type: RTTI_CodeableConcept,
      productName: t.string,
      _productName: RTTI_Element,
      schedule: t.array(RTTI_Timing),
      quantity: RTTI_Quantity,
      instruction: t.string,
      _instruction: RTTI_Element,
    }),
  );
