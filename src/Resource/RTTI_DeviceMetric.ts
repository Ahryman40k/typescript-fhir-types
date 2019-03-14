
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Timing} from './RTTI_Timing';
import {RTTI_DeviceMetric_Calibration} from './RTTI_DeviceMetric_Calibration';

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


        const mandatory = t.type({
           resourceType: t.string,
type: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
text: RTTI_Narrative,
contained: t.array(ResourceList),
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
        });
        

        export var RTTI_DeviceMetric:any = t.intersection([mandatory, partial]);
        

export type IDeviceMetric = t.TypeOf<typeof RTTI_DeviceMetric>;
        
        