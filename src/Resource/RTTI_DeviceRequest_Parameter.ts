
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Range} from './RTTI_Range';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
code: RTTI_CodeableConcept,
valueCodeableConcept: RTTI_CodeableConcept,
valueQuantity: RTTI_Quantity,
valueRange: RTTI_Range,
valueBoolean: t.boolean,
_valueBoolean: RTTI_Element
        });
        

        export var RTTI_DeviceRequest_Parameter:any = t.intersection([mandatory, partial]);
        

export type IDeviceRequest_Parameter = t.TypeOf<typeof RTTI_DeviceRequest_Parameter>;
        
        