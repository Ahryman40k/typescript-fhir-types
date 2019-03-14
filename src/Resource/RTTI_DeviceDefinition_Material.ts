
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           substance: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
alternate: t.boolean,
_alternate: RTTI_Element,
allergenicIndicator: t.boolean,
_allergenicIndicator: RTTI_Element
        });
        

        export var RTTI_DeviceDefinition_Material:any = t.intersection([mandatory, partial]);
        

export type IDeviceDefinition_Material = t.TypeOf<typeof RTTI_DeviceDefinition_Material>;
        
        