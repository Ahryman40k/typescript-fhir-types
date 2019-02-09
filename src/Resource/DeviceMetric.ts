
        import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { DeviceMetric_Calibration } from '../Resource/DeviceMetric_Calibration';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Timing } from '../Resource/Timing';
import { Uri } from '../Scalar/Uri';

        export enum DeviceMetricOperationalStatusKind {
                on,
off,
standby,
enteredInError
            }
export enum DeviceMetricColorKind {
                black,
red,
green,
yellow,
blue,
magenta,
cyan,
white
            }
export enum DeviceMetricCategoryKind {
                measurement,
setting,
calculation,
unspecified
            }

        /**
         * Describes a measurement, calculation or setting capability of a medical device. 
         */
        export class DeviceMetric  {

            constructor() {
                this.type = new CodeableConcept();
            }

            
                /**
                 * This is a DeviceMetric resource
                 */
                resourceType: string = 'DeviceMetric;'
                

                /**
                 * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                 */
                id? : Id;
                

                /**
                 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                 */
                meta? : Meta;
                

                /**
                 * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                 */
                implicitRules? : Uri;
                

                /**
                 * Extensions for implicitRules
                 */
                _implicitRules? : Element;
                

                /**
                 * The base language in which the resource is written.
                 */
                language? : Code;
                

                /**
                 * Extensions for language
                 */
                _language? : Element;
                

                /**
                 * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                 */
                text? : Narrative;
                

                /**
                 * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                 */
                contained? : ResourceList[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                modifierExtension? : Extension[];
                

                /**
                 * Unique instance identifiers assigned to a device by the device or gateway software, manufacturers, other organizations or owners. For example: handle ID.
                 */
                identifier? : Identifier[];
                

                /**
                 * Describes the type of the metric. For example: Heart Rate, PEEP Setting, etc.
                 */
                type : CodeableConcept;
                

                /**
                 * Describes the unit that an observed value determined for this metric will have. For example: Percent, Seconds, etc.
                 */
                unit? : CodeableConcept;
                

                /**
                 * Describes the link to the  Device that this DeviceMetric belongs to and that contains administrative device information such as manufacturer, serial number, etc.
                 */
                source? : Reference;
                

                /**
                 * Describes the link to the  Device that this DeviceMetric belongs to and that provide information about the location of this DeviceMetric in the containment structure of the parent Device. An example would be a Device that represents a Channel. This reference can be used by a client application to distinguish DeviceMetrics that have the same type, but should be interpreted based on their containment location.
                 */
                parent? : Reference;
                

                /**
                 * Indicates current operational state of the device. For example: On, Off, Standby, etc.
                 */
                operationalStatus? : DeviceMetricOperationalStatusKind;
                

                /**
                 * Extensions for operationalStatus
                 */
                _operationalStatus? : Element;
                

                /**
                 * Describes the color representation for the metric. This is often used to aid clinicians to track and identify parameter types by color. In practice, consider a Patient Monitor that has ECG/HR and Pleth for example; the parameters are displayed in different characteristic colors, such as HR-blue, BP-green, and PR and SpO2- magenta.
                 */
                color? : DeviceMetricColorKind;
                

                /**
                 * Extensions for color
                 */
                _color? : Element;
                

                /**
                 * Indicates the category of the observation generation process. A DeviceMetric can be for example a setting, measurement, or calculation.
                 */
                category? : DeviceMetricCategoryKind;
                

                /**
                 * Extensions for category
                 */
                _category? : Element;
                

                /**
                 * Describes the measurement repetition time. This is not necessarily the same as the update period. The measurement repetition time can range from milliseconds up to hours. An example for a measurement repetition time in the range of milliseconds is the sampling rate of an ECG. An example for a measurement repetition time in the range of hours is a NIBP that is triggered automatically every hour. The update period may be different than the measurement repetition time, if the device does not update the published observed value with the same frequency as it was measured.
                 */
                measurementPeriod? : Timing;
                

                /**
                 * Describes the calibrations that have been performed or that are required to be performed.
                 */
                calibration? : DeviceMetric_Calibration[];
                
        }
        