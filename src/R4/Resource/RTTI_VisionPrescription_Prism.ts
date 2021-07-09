import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_decimal} from '../Scalar/RTTI_decimal';
import {RTTI_Element, IElement} from './RTTI_Element';
export enum VisionPrescription_PrismBaseKind {
  _up = 'up',
  _down = 'down',
  _in = 'in',
  _out = 'out',
}
import {createEnumType} from '../../EnumType';

export interface IVisionPrescription_Prism {
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
   * Amount of prism to compensate for eye alignment in fractional units.
   */
  amount?: number;

  /**
   * Extensions for amount
   */
  _amount?: IElement;

  /**
   * The relative base, or reference lens edge, for the prism.
   */
  base?: VisionPrescription_PrismBaseKind;

  /**
   * Extensions for base
   */
  _base?: IElement;
}

export const RTTI_VisionPrescription_Prism: t.Type<IVisionPrescription_Prism> =
  t.recursion('IVisionPrescription_Prism', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      amount: RTTI_decimal,
      _amount: RTTI_Element,
      base: createEnumType<VisionPrescription_PrismBaseKind>(
        VisionPrescription_PrismBaseKind,
        'VisionPrescription_PrismBaseKind',
      ),
      _base: RTTI_Element,
    }),
  );
