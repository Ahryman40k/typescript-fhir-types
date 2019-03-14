
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Duration} from './RTTI_Duration';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
quantity: RTTI_Quantity,
duration: RTTI_Duration
        });
        

        export var RTTI_MedicationRequest_InitialFill:any = t.intersection([mandatory, partial]);
        

export type IMedicationRequest_InitialFill = t.TypeOf<typeof RTTI_MedicationRequest_InitialFill>;
        
        