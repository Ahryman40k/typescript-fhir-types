import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Ratio, IRatio} from './RTTI_Ratio';
import {RTTI_Element, IElement} from './RTTI_Element';

export interface IMedicinalProductIngredient_ReferenceStrength {
  /**
   * Strength expressed in terms of a reference substance.
   */
  strength: IRatio;

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
   * Relevant reference substance.
   */
  substance?: ICodeableConcept;

  /**
   * Strength expressed in terms of a reference substance.
   */
  strengthLowLimit?: IRatio;

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
}

export const RTTI_MedicinalProductIngredient_ReferenceStrength: t.Type<IMedicinalProductIngredient_ReferenceStrength> =
  t.recursion('IMedicinalProductIngredient_ReferenceStrength', () =>
    t.intersection([
      t.type({
        strength: RTTI_Ratio,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        substance: RTTI_CodeableConcept,
        strengthLowLimit: RTTI_Ratio,
        measurementPoint: t.string,
        _measurementPoint: RTTI_Element,
        country: t.array(RTTI_CodeableConcept),
      }),
    ]),
  );
