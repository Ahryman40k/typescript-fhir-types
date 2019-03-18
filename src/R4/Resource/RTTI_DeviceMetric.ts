
import * as t from 'io-ts';
import { RTTI_Meta, IMeta } from './RTTI_Meta';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_Narrative, INarrative } from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Identifier, IIdentifier } from './RTTI_Identifier';
import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';
import { RTTI_Reference, IReference } from './RTTI_Reference';
import { RTTI_Timing, ITiming } from './RTTI_Timing';
import { RTTI_DeviceMetric_Calibration, IDeviceMetric_Calibration } from './RTTI_DeviceMetric_Calibration';

export enum DeviceMetricOperationalStatusKind {
    on = 'on',
    off = 'off',
    standby = 'standby',
    enteredInError = 'enteredInError'
}
export enum DeviceMetricColorKind {
    black = 'black',
    red = 'red',
    green = 'green',
    yellow = 'yellow',
    blue = 'blue',
    magenta = 'magenta',
    cyan = 'cyan',
    white = 'white'
}
export enum DeviceMetricCategoryKind {
    measurement = 'measurement',
    setting = 'setting',
    calculation = 'calculation',
    unspecified = 'unspecified'
}
const DeviceMetricOperationalStatusKindKeys = t.keyof({
    [DeviceMetricOperationalStatusKind.on]: null,
    [DeviceMetricOperationalStatusKind.off]: null,
    [DeviceMetricOperationalStatusKind.standby]: null,
    [DeviceMetricOperationalStatusKind.enteredInError]: null
});
const DeviceMetricColorKindKeys = t.keyof({
    [DeviceMetricColorKind.black]: null,
    [DeviceMetricColorKind.red]: null,
    [DeviceMetricColorKind.green]: null,
    [DeviceMetricColorKind.yellow]: null,
    [DeviceMetricColorKind.blue]: null,
    [DeviceMetricColorKind.magenta]: null,
    [DeviceMetricColorKind.cyan]: null,
    [DeviceMetricColorKind.white]: null
});
const DeviceMetricCategoryKindKeys = t.keyof({
    [DeviceMetricCategoryKind.measurement]: null,
    [DeviceMetricCategoryKind.setting]: null,
    [DeviceMetricCategoryKind.calculation]: null,
    [DeviceMetricCategoryKind.unspecified]: null
});


export interface IDeviceMetric {

    /**
     * This is a DeviceMetric resource
     */
    resourceType: 'DeviceMetric'


    /**
     * Describes the type of the metric. For example: Heart Rate, PEEP Setting, etc.
     */
    type: ICodeableConcept;


    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
     */
    id?: string;


    /**
     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
     */
    meta?: IMeta;


    /**
     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;


    /**
     * Extensions for implicitRules
     */
    _implicitRules?: IElement;


    /**
     * The base language in which the resource is written.
     */
    language?: string;


    /**
     * Extensions for language
     */
    _language?: IElement;


    /**
     * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
     */
    text?: INarrative;


    /**
     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
     */
    contained?: IResourceList[];


    /**
     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: IExtension[];


    /**
     * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: IExtension[];


    /**
     * Unique instance identifiers assigned to a device by the device or gateway software, manufacturers, other organizations or owners. For example: handle ID.
     */
    identifier?: IIdentifier[];


    /**
     * Describes the unit that an observed value determined for this metric will have. For example: Percent, Seconds, etc.
     */
    unit?: ICodeableConcept;


    /**
     * Describes the link to the  Device that this DeviceMetric belongs to and that contains administrative device information such as manufacturer, serial number, etc.
     */
    source?: IReference;


    /**
     * Describes the link to the  Device that this DeviceMetric belongs to and that provide information about the location of this DeviceMetric in the containment structure of the parent Device. An example would be a Device that represents a Channel. This reference can be used by a client application to distinguish DeviceMetrics that have the same type, but should be interpreted based on their containment location.
     */
    parent?: IReference;


    /**
     * Indicates current operational state of the device. For example: On, Off, Standby, etc.
     */
    operationalStatus?: DeviceMetricOperationalStatusKind;


    /**
     * Extensions for operationalStatus
     */
    _operationalStatus?: IElement;


    /**
     * Describes the color representation for the metric. This is often used to aid clinicians to track and identify parameter types by color. In practice, consider a Patient Monitor that has ECG/HR and Pleth for example; the parameters are displayed in different characteristic colors, such as HR-blue, BP-green, and PR and SpO2- magenta.
     */
    color?: DeviceMetricColorKind;


    /**
     * Extensions for color
     */
    _color?: IElement;


    /**
     * Indicates the category of the observation generation process. A DeviceMetric can be for example a setting, measurement, or calculation.
     */
    category?: DeviceMetricCategoryKind;


    /**
     * Extensions for category
     */
    _category?: IElement;


    /**
     * Describes the measurement repetition time. This is not necessarily the same as the update period. The measurement repetition time can range from milliseconds up to hours. An example for a measurement repetition time in the range of milliseconds is the sampling rate of an ECG. An example for a measurement repetition time in the range of hours is a NIBP that is triggered automatically every hour. The update period may be different than the measurement repetition time, if the device does not update the published observed value with the same frequency as it was measured.
     */
    measurementPeriod?: ITiming;


    /**
     * Describes the calibrations that have been performed or that are required to be performed.
     */
    calibration?: IDeviceMetric_Calibration[];

}



export const RTTI_DeviceMetric: t.Type<IDeviceMetric> = t.recursion('IDeviceMetric', () =>
    t.intersection([

        t.type({
            resourceType: t.literal('DeviceMetric'),
            type: RTTI_CodeableConcept
        })
        ,

        t.partial({
            id: t.string,
            meta: RTTI_Meta,
            implicitRules: t.string,
            _implicitRules: RTTI_Element,
            language: t.string,
            _language: RTTI_Element,
            text: RTTI_Narrative,
            contained: t.array(RTTI_ResourceList),
            extension: t.array(RTTI_Extension),
            modifierExtension: t.array(RTTI_Extension),
            identifier: t.array(RTTI_Identifier),
            unit: RTTI_CodeableConcept,
            source: RTTI_Reference,
            parent: RTTI_Reference,
            operationalStatus: DeviceMetricOperationalStatusKindKeys,
            _operationalStatus: RTTI_Element,
            color: DeviceMetricColorKindKeys,
            _color: RTTI_Element,
            category: DeviceMetricCategoryKindKeys,
            _category: RTTI_Element,
            measurementPeriod: RTTI_Timing,
            calibration: t.array(RTTI_DeviceMetric_Calibration)
        })

    ])
);


