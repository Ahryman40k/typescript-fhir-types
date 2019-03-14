
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: RTTI_CodeableConcept,
component: RTTI_Identifier,
value: t.string,
_value: RTTI_Element
        });
        

        export var RTTI_Device_Version:any = t.intersection([mandatory, partial]);
        

export type IDevice_Version = t.TypeOf<typeof RTTI_Device_Version>;
        
        