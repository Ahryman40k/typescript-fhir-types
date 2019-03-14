
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_MedicationRequest_InitialFill} from './RTTI_MedicationRequest_InitialFill';
import {RTTI_Duration} from './RTTI_Duration';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
initialFill: RTTI_MedicationRequest_InitialFill,
dispenseInterval: RTTI_Duration,
validityPeriod: RTTI_Period,
numberOfRepeatsAllowed: t.number,
_numberOfRepeatsAllowed: RTTI_Element,
quantity: RTTI_Quantity,
expectedSupplyDuration: RTTI_Duration,
performer: RTTI_Reference
        });
        

        export var RTTI_MedicationRequest_DispenseRequest:any = t.intersection([mandatory, partial]);
        

export type IMedicationRequest_DispenseRequest = t.TypeOf<typeof RTTI_MedicationRequest_DispenseRequest>;
        
        