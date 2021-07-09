import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_instant} from '../Scalar/RTTI_instant';
export enum DeviceMetric_CalibrationTypeKind {
  _unspecified = 'unspecified',
  _offset = 'offset',
  _gain = 'gain',
  _twoPoint = 'two-point',
}
export enum DeviceMetric_CalibrationStateKind {
  _notCalibrated = 'not-calibrated',
  _calibrationRequired = 'calibration-required',
  _calibrated = 'calibrated',
  _unspecified = 'unspecified',
}
import {createEnumType} from '../../EnumType';

export interface IDeviceMetric_Calibration {
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
   * Describes the type of the calibration method.
   */
  type?: DeviceMetric_CalibrationTypeKind;

  /**
   * Extensions for type
   */
  _type?: IElement;

  /**
   * Describes the state of the calibration.
   */
  state?: DeviceMetric_CalibrationStateKind;

  /**
   * Extensions for state
   */
  _state?: IElement;

  /**
   * Describes the time last calibration has been performed.
   */
  time?: string;

  /**
   * Extensions for time
   */
  _time?: IElement;
}

export const RTTI_DeviceMetric_Calibration: t.Type<IDeviceMetric_Calibration> =
  t.recursion('IDeviceMetric_Calibration', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      type: createEnumType<DeviceMetric_CalibrationTypeKind>(
        DeviceMetric_CalibrationTypeKind,
        'DeviceMetric_CalibrationTypeKind',
      ),
      _type: RTTI_Element,
      state: createEnumType<DeviceMetric_CalibrationStateKind>(
        DeviceMetric_CalibrationStateKind,
        'DeviceMetric_CalibrationStateKind',
      ),
      _state: RTTI_Element,
      time: RTTI_instant,
      _time: RTTI_Element,
    }),
  );
