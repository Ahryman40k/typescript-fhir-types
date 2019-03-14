
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_MeasureReport_Population} from './RTTI_MeasureReport_Population';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_MeasureReport_Stratifier} from './RTTI_MeasureReport_Stratifier';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
code: RTTI_CodeableConcept,
population: t.array(RTTI_MeasureReport_Population),
measureScore: RTTI_Quantity,
stratifier: t.array(RTTI_MeasureReport_Stratifier)
        });
        

        export var RTTI_MeasureReport_Group:any = t.intersection([mandatory, partial]);
        

export type IMeasureReport_Group = t.TypeOf<typeof RTTI_MeasureReport_Group>;
        
        