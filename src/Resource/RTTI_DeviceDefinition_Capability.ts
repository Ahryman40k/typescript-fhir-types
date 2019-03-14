
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';




        const mandatory = t.type({
           type: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
description: t.array(RTTI_CodeableConcept)
        });
        

        export var RTTI_DeviceDefinition_Capability:any = t.intersection([mandatory, partial]);
        

export type IDeviceDefinition_Capability = t.TypeOf<typeof RTTI_DeviceDefinition_Capability>;
        
        