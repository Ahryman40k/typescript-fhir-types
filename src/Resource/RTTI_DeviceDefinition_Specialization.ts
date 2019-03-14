
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
systemType: t.string,
_systemType: RTTI_Element,
version: t.string,
_version: RTTI_Element
        });
        

        export var RTTI_DeviceDefinition_Specialization:any = t.intersection([mandatory, partial]);
        

export type IDeviceDefinition_Specialization = t.TypeOf<typeof RTTI_DeviceDefinition_Specialization>;
        
        