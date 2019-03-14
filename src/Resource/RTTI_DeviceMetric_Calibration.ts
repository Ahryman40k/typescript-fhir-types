
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum DeviceMetric_CalibrationTypeKind {
                unspecified = 'unspecified',
offset = 'offset',
gain = 'gain',
twoPoint = 'twoPoint'
            }
export enum DeviceMetric_CalibrationStateKind {
                notCalibrated = 'notCalibrated',
calibrationRequired = 'calibrationRequired',
calibrated = 'calibrated',
unspecified = 'unspecified'
            }
const DeviceMetric_CalibrationTypeKindKeys = t.keyof({
                [DeviceMetric_CalibrationTypeKind.unspecified]: null,
[DeviceMetric_CalibrationTypeKind.offset]: null,
[DeviceMetric_CalibrationTypeKind.gain]: null,
[DeviceMetric_CalibrationTypeKind.twoPoint]: null
            });
const DeviceMetric_CalibrationStateKindKeys = t.keyof({
                [DeviceMetric_CalibrationStateKind.notCalibrated]: null,
[DeviceMetric_CalibrationStateKind.calibrationRequired]: null,
[DeviceMetric_CalibrationStateKind.calibrated]: null,
[DeviceMetric_CalibrationStateKind.unspecified]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: DeviceMetric_CalibrationTypeKindKeys,
_type: RTTI_Element,
state: DeviceMetric_CalibrationStateKindKeys,
_state: RTTI_Element,
time: t.string,
_time: RTTI_Element
        });
        

        export var RTTI_DeviceMetric_Calibration:any = t.intersection([mandatory, partial]);
        

export type IDeviceMetric_Calibration = t.TypeOf<typeof RTTI_DeviceMetric_Calibration>;
        
        