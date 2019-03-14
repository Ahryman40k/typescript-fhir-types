
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_MeasureReport_Stratum} from './RTTI_MeasureReport_Stratum';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
code: RTTI_CodeableConcept,
stratum: t.array(RTTI_MeasureReport_Stratum)
        });
        

        export var RTTI_MeasureReport_Stratifier:any = t.intersection([mandatory, partial]);
        

export type IMeasureReport_Stratifier = t.TypeOf<typeof RTTI_MeasureReport_Stratifier>;
        
        