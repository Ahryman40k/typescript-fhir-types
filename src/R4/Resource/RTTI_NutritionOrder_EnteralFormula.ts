import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {
  RTTI_NutritionOrder_Administration,
  INutritionOrder_Administration,
} from './RTTI_NutritionOrder_Administration';

export interface INutritionOrder_EnteralFormula {
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
   * The type of enteral or infant formula such as an adult standard formula with fiber or a soy-based infant formula.
   */
  baseFormulaType?: ICodeableConcept;

  /**
   * The product or brand name of the enteral or infant formula product such as "ACME Adult Standard Formula".
   */
  baseFormulaProductName?: string;

  /**
   * Extensions for baseFormulaProductName
   */
  _baseFormulaProductName?: IElement;

  /**
   * Indicates the type of modular component such as protein, carbohydrate, fat or fiber to be provided in addition to or mixed with the base formula.
   */
  additiveType?: ICodeableConcept;

  /**
   * The product or brand name of the type of modular component to be added to the formula.
   */
  additiveProductName?: string;

  /**
   * Extensions for additiveProductName
   */
  _additiveProductName?: IElement;

  /**
   * The amount of energy (calories) that the formula should provide per specified volume, typically per mL or fluid oz.  For example, an infant may require a formula that provides 24 calories per fluid ounce or an adult may require an enteral formula that provides 1.5 calorie/mL.
   */
  caloricDensity?: IQuantity;

  /**
   * The route or physiological path of administration into the patient's gastrointestinal  tract for purposes of providing the formula feeding, e.g. nasogastric tube.
   */
  routeofAdministration?: ICodeableConcept;

  /**
   * Formula administration instructions as structured data.  This repeating structure allows for changing the administration rate or volume over time for both bolus and continuous feeding.  An example of this would be an instruction to increase the rate of continuous feeding every 2 hours.
   */
  administration?: INutritionOrder_Administration[];

  /**
   * The maximum total quantity of formula that may be administered to a subject over the period of time, e.g. 1440 mL over 24 hours.
   */
  maxVolumeToDeliver?: IQuantity;

  /**
   * Free text formula administration, feeding instructions or additional instructions or information.
   */
  administrationInstruction?: string;

  /**
   * Extensions for administrationInstruction
   */
  _administrationInstruction?: IElement;
}

export const RTTI_NutritionOrder_EnteralFormula: t.Type<INutritionOrder_EnteralFormula> =
  t.recursion('INutritionOrder_EnteralFormula', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      baseFormulaType: RTTI_CodeableConcept,
      baseFormulaProductName: t.string,
      _baseFormulaProductName: RTTI_Element,
      additiveType: RTTI_CodeableConcept,
      additiveProductName: t.string,
      _additiveProductName: RTTI_Element,
      caloricDensity: RTTI_Quantity,
      routeofAdministration: RTTI_CodeableConcept,
      administration: t.array(RTTI_NutritionOrder_Administration),
      maxVolumeToDeliver: RTTI_Quantity,
      administrationInstruction: t.string,
      _administrationInstruction: RTTI_Element,
    }),
  );
