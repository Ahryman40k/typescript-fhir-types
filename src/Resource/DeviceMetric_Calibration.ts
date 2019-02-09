
        import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Instant } from '../Scalar/Instant';

        export enum DeviceMetricCalibrationTypeKind {
                unspecified,
offset,
gain,
twoPoint
            }
export enum DeviceMetricCalibrationStateKind {
                notCalibrated,
calibrationRequired,
calibrated,
unspecified
            }

        /**
         * Describes a measurement, calculation or setting capability of a medical device. 
         */
        export class DeviceMetric_Calibration  {

            constructor() {
                
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                id? : string;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                modifierExtension? : Extension[];
                

                /**
                 * Describes the type of the calibration method.
                 */
                type? : DeviceMetricCalibrationTypeKind;
                

                /**
                 * Extensions for type
                 */
                _type? : Element;
                

                /**
                 * Describes the state of the calibration.
                 */
                state? : DeviceMetricCalibrationStateKind;
                

                /**
                 * Extensions for state
                 */
                _state? : Element;
                

                /**
                 * Describes the time last calibration has been performed.
                 */
                time? : Instant;
                

                /**
                 * Extensions for time
                 */
                _time? : Element;
                
        }
        