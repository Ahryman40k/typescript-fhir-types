
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity} from './RTTI_Quantity';




        const mandatory = t.type({
           type: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
valueQuanity: t.array(RTTI_Quantity),
valueCode: t.array(RTTI_CodeableConcept)
        });
        

        export var RTTI_DeviceDefinition_Property:any = t.intersection([mandatory, partial]);
        

export type IDeviceDefinition_Property = t.TypeOf<typeof RTTI_DeviceDefinition_Property>;
        
        