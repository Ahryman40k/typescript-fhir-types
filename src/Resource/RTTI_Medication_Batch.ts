
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
lotNumber: t.string,
_lotNumber: RTTI_Element,
expirationDate: t.string,
_expirationDate: RTTI_Element,
serialNumber: t.string,
_serialNumber: RTTI_Element
        });
        

        export var RTTI_Medication_Batch:any = t.intersection([mandatory, partial]);
        

export type IMedication_Batch = t.TypeOf<typeof RTTI_Medication_Batch>;
        
        