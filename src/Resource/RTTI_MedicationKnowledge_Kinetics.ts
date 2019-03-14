
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
areaUnderCurve: t.array(RTTI_Quantity),
lethalDose50: t.array(RTTI_Quantity),
halfLifePeriod: RTTI_Duration
        });
        

        export var RTTI_MedicationKnowledge_Kinetics:any = t.intersection([mandatory, partial]);
        

export type IMedicationKnowledge_Kinetics = t.TypeOf<typeof RTTI_MedicationKnowledge_Kinetics>;
        
        