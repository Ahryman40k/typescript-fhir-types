import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {
  RTTI_MedicinalProductIngredient_Strength,
  IMedicinalProductIngredient_Strength,
} from './RTTI_MedicinalProductIngredient_Strength';

export interface IMedicinalProductIngredient_SpecifiedSubstance {
  /**
   * The specified substance.
   */
  code: ICodeableConcept;

  /**
   * The group of specified substance, e.g. group 1 to 4.
   */
  group: ICodeableConcept;

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
   * Confidentiality level of the specified substance as the ingredient.
   */
  confidentiality?: ICodeableConcept;

  /**
   * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
   */
  strength?: IMedicinalProductIngredient_Strength[];
}

export const RTTI_MedicinalProductIngredient_SpecifiedSubstance: t.Type<IMedicinalProductIngredient_SpecifiedSubstance> =
  t.recursion('IMedicinalProductIngredient_SpecifiedSubstance', () =>
    t.intersection([
      t.type({
        code: RTTI_CodeableConcept,
        group: RTTI_CodeableConcept,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        confidentiality: RTTI_CodeableConcept,
        strength: t.array(RTTI_MedicinalProductIngredient_Strength),
      }),
    ]),
  );
