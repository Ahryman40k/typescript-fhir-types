import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {RTTI_Range, IRange} from './RTTI_Range';
import {RTTI_Element, IElement} from './RTTI_Element';

export interface IDeviceRequest_Parameter {
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
   * A code or string that identifies the device detail being asserted.
   */
  code?: ICodeableConcept;

  /**
   * The value of the device detail.
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * The value of the device detail.
   */
  valueQuantity?: IQuantity;

  /**
   * The value of the device detail.
   */
  valueRange?: IRange;

  /**
   * The value of the device detail.
   */
  valueBoolean?: boolean;

  /**
   * Extensions for valueBoolean
   */
  _valueBoolean?: IElement;
}

export const RTTI_DeviceRequest_Parameter: t.Type<IDeviceRequest_Parameter> =
  t.recursion('IDeviceRequest_Parameter', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      code: RTTI_CodeableConcept,
      valueCodeableConcept: RTTI_CodeableConcept,
      valueQuantity: RTTI_Quantity,
      valueRange: RTTI_Range,
      valueBoolean: t.boolean,
      _valueBoolean: RTTI_Element,
    }),
  );
