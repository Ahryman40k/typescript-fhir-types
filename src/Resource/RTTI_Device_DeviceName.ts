
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum Device_DeviceNameTypeKind {
                udiLabelName = 'udiLabelName',
userFriendlyName = 'userFriendlyName',
patientReportedName = 'patientReportedName',
manufacturerName = 'manufacturerName',
modelName = 'modelName',
other = 'other'
            }
const Device_DeviceNameTypeKindKeys = t.keyof({
                [Device_DeviceNameTypeKind.udiLabelName]: null,
[Device_DeviceNameTypeKind.userFriendlyName]: null,
[Device_DeviceNameTypeKind.patientReportedName]: null,
[Device_DeviceNameTypeKind.manufacturerName]: null,
[Device_DeviceNameTypeKind.modelName]: null,
[Device_DeviceNameTypeKind.other]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
name: t.string,
_name: RTTI_Element,
type: Device_DeviceNameTypeKindKeys,
_type: RTTI_Element
        });
        

        export var RTTI_Device_DeviceName:any = t.intersection([mandatory, partial]);
        

export type IDevice_DeviceName = t.TypeOf<typeof RTTI_Device_DeviceName>;
        
        