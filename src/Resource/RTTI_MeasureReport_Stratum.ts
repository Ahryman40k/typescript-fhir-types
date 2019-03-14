
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_MeasureReport_Population1} from './RTTI_MeasureReport_Population1';
import {RTTI_Quantity} from './RTTI_Quantity';




        const mandatory = t.type({
           value: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
population: t.array(RTTI_MeasureReport_Population1),
measureScore: RTTI_Quantity
        });
        

        export var RTTI_MeasureReport_Stratum:any = t.intersection([mandatory, partial]);
        

export type IMeasureReport_Stratum = t.TypeOf<typeof RTTI_MeasureReport_Stratum>;
        
        