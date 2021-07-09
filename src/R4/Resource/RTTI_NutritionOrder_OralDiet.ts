import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Timing, ITiming} from './RTTI_Timing';
import {
  RTTI_NutritionOrder_Nutrient,
  INutritionOrder_Nutrient,
} from './RTTI_NutritionOrder_Nutrient';
import {
  RTTI_NutritionOrder_Texture,
  INutritionOrder_Texture,
} from './RTTI_NutritionOrder_Texture';
import {RTTI_Element, IElement} from './RTTI_Element';

export interface INutritionOrder_OralDiet {
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
   * The kind of diet or dietary restriction such as fiber restricted diet or diabetic diet.
   */
  type?: ICodeableConcept[];

  /**
   * The time period and frequency at which the diet should be given.  The diet should be given for the combination of all schedules if more than one schedule is present.
   */
  schedule?: ITiming[];

  /**
   * Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet.
   */
  nutrient?: INutritionOrder_Nutrient[];

  /**
   * Class that describes any texture modifications required for the patient to safely consume various types of solid foods.
   */
  texture?: INutritionOrder_Texture[];

  /**
   * The required consistency (e.g. honey-thick, nectar-thick, thin, thickened.) of liquids or fluids served to the patient.
   */
  fluidConsistencyType?: ICodeableConcept[];

  /**
   * Free text or additional instructions or information pertaining to the oral diet.
   */
  instruction?: string;

  /**
   * Extensions for instruction
   */
  _instruction?: IElement;
}

export const RTTI_NutritionOrder_OralDiet: t.Type<INutritionOrder_OralDiet> =
  t.recursion('INutritionOrder_OralDiet', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      type: t.array(RTTI_CodeableConcept),
      schedule: t.array(RTTI_Timing),
      nutrient: t.array(RTTI_NutritionOrder_Nutrient),
      texture: t.array(RTTI_NutritionOrder_Texture),
      fluidConsistencyType: t.array(RTTI_CodeableConcept),
      instruction: t.string,
      _instruction: RTTI_Element,
    }),
  );
