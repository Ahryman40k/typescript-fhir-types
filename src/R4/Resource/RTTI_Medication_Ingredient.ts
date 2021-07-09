import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Ratio, IRatio} from './RTTI_Ratio';

export interface IMedication_Ingredient {
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
   * The actual ingredient - either a substance (simple ingredient) or another medication of a medication.
   */
  itemCodeableConcept?: ICodeableConcept;

  /**
   * The actual ingredient - either a substance (simple ingredient) or another medication of a medication.
   */
  itemReference?: IReference;

  /**
   * Indication of whether this ingredient affects the therapeutic action of the drug.
   */
  isActive?: boolean;

  /**
   * Extensions for isActive
   */
  _isActive?: IElement;

  /**
   * Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet.
   */
  strength?: IRatio;
}

export const RTTI_Medication_Ingredient: t.Type<IMedication_Ingredient> =
  t.recursion('IMedication_Ingredient', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      itemCodeableConcept: RTTI_CodeableConcept,
      itemReference: RTTI_Reference,
      isActive: t.boolean,
      _isActive: RTTI_Element,
      strength: RTTI_Ratio,
    }),
  );
