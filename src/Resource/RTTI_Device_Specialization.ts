
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           systemType: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
version: t.string,
_version: RTTI_Element
        });
        

        export var RTTI_Device_Specialization:any = t.intersection([mandatory, partial]);
        

export type IDevice_Specialization = t.TypeOf<typeof RTTI_Device_Specialization>;
        
        