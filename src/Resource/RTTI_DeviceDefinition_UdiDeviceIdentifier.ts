
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
deviceIdentifier: t.string,
_deviceIdentifier: RTTI_Element,
issuer: t.string,
_issuer: RTTI_Element,
jurisdiction: t.string,
_jurisdiction: RTTI_Element
        });
        

        export var RTTI_DeviceDefinition_UdiDeviceIdentifier:any = t.intersection([mandatory, partial]);
        

export type IDeviceDefinition_UdiDeviceIdentifier = t.TypeOf<typeof RTTI_DeviceDefinition_UdiDeviceIdentifier>;
        
        