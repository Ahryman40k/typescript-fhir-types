import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Ratio, IRatio} from './RTTI_Ratio';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {
  RTTI_MedicinalProductIngredient_ReferenceStrength,
  IMedicinalProductIngredient_ReferenceStrength,
} from './RTTI_MedicinalProductIngredient_ReferenceStrength';

export interface IMedicinalProductIngredient_Strength {
  /**
   * The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item.
   */
  presentation: IRatio;

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
   * A lower limit for the quantity of substance in the unit of presentation. For use when there is a range of strengths, this is the lower limit, with the presentation attribute becoming the upper limit.
   */
  presentationLowLimit?: IRatio;

  /**
   * The strength per unitary volume (or mass).
   */
  concentration?: IRatio;

  /**
   * A lower limit for the strength per unitary volume (or mass), for when there is a range. The concentration attribute then becomes the upper limit.
   */
  concentrationLowLimit?: IRatio;

  /**
   * For when strength is measured at a particular point or distance.
   */
  measurementPoint?: string;

  /**
   * Extensions for measurementPoint
   */
  _measurementPoint?: IElement;

  /**
   * The country or countries for which the strength range applies.
   */
  country?: ICodeableConcept[];

  /**
   * Strength expressed in terms of a reference substance.
   */
  referenceStrength?: IMedicinalProductIngredient_ReferenceStrength[];
}

export const RTTI_MedicinalProductIngredient_Strength: t.Type<IMedicinalProductIngredient_Strength> =
  t.recursion('IMedicinalProductIngredient_Strength', () =>
    t.intersection([
      t.type({
        presentation: RTTI_Ratio,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        presentationLowLimit: RTTI_Ratio,
        concentration: RTTI_Ratio,
        concentrationLowLimit: RTTI_Ratio,
        measurementPoint: t.string,
        _measurementPoint: RTTI_Element,
        country: t.array(RTTI_CodeableConcept),
        referenceStrength: t.array(
          RTTI_MedicinalProductIngredient_ReferenceStrength,
        ),
      }),
    ]),
  );
