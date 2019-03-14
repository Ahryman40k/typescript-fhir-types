
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Device_UdiCarrier} from './RTTI_Device_UdiCarrier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Device_DeviceName} from './RTTI_Device_DeviceName';
import {RTTI_Device_Specialization} from './RTTI_Device_Specialization';
import {RTTI_Device_Version} from './RTTI_Device_Version';
import {RTTI_Device_Property} from './RTTI_Device_Property';
import {RTTI_ContactPoint} from './RTTI_ContactPoint';
import {RTTI_Annotation} from './RTTI_Annotation';

export enum DeviceStatusKind {
                active = 'active',
inactive = 'inactive',
enteredInError = 'enteredInError',
unknown = 'unknown'
            }
const DeviceStatusKindKeys = t.keyof({
                [DeviceStatusKind.active]: null,
[DeviceStatusKind.inactive]: null,
[DeviceStatusKind.enteredInError]: null,
[DeviceStatusKind.unknown]: null
            });


        const mandatory = t.type({
           resourceType: t.string
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
definition: RTTI_Reference,
udiCarrier: t.array(RTTI_Device_UdiCarrier),
status: DeviceStatusKindKeys,
_status: RTTI_Element,
statusReason: t.array(RTTI_CodeableConcept),
distinctIdentificationCode: t.string,
_distinctIdentificationCode: RTTI_Element,
manufacturer: t.string,
_manufacturer: RTTI_Element,
manufactureDate: t.string,
_manufactureDate: RTTI_Element,
expirationDate: t.string,
_expirationDate: RTTI_Element,
lotNumber: t.string,
_lotNumber: RTTI_Element,
serialNumber: t.string,
_serialNumber: RTTI_Element,
deviceName: t.array(RTTI_Device_DeviceName),
modelNumber: t.string,
_modelNumber: RTTI_Element,
partNumber: t.string,
_partNumber: RTTI_Element,
type: RTTI_CodeableConcept,
specialization: t.array(RTTI_Device_Specialization),
version: t.array(RTTI_Device_Version),
property: t.array(RTTI_Device_Property),
patient: RTTI_Reference,
owner: RTTI_Reference,
contact: t.array(RTTI_ContactPoint),
location: RTTI_Reference,
url: t.string,
_url: RTTI_Element,
note: t.array(RTTI_Annotation),
safety: t.array(RTTI_CodeableConcept),
parent: RTTI_Reference
        });
        

        export var RTTI_Device:any = t.intersection([mandatory, partial]);
        

export type IDevice = t.TypeOf<typeof RTTI_Device>;
        
        