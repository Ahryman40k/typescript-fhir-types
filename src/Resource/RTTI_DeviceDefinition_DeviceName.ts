
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum DeviceDefinition_DeviceNameTypeKind {
                udiLabelName = 'udiLabelName',
userFriendlyName = 'userFriendlyName',
patientReportedName = 'patientReportedName',
manufacturerName = 'manufacturerName',
modelName = 'modelName',
other = 'other'
            }
const DeviceDefinition_DeviceNameTypeKindKeys = t.keyof({
                [DeviceDefinition_DeviceNameTypeKind.udiLabelName]: null,
[DeviceDefinition_DeviceNameTypeKind.userFriendlyName]: null,
[DeviceDefinition_DeviceNameTypeKind.patientReportedName]: null,
[DeviceDefinition_DeviceNameTypeKind.manufacturerName]: null,
[DeviceDefinition_DeviceNameTypeKind.modelName]: null,
[DeviceDefinition_DeviceNameTypeKind.other]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
name: t.string,
_name: RTTI_Element,
type: DeviceDefinition_DeviceNameTypeKindKeys,
_type: RTTI_Element
        });
        

        export var RTTI_DeviceDefinition_DeviceName:any = t.intersection([mandatory, partial]);
        

export type IDeviceDefinition_DeviceName = t.TypeOf<typeof RTTI_DeviceDefinition_DeviceName>;
        
        