
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Measure_Population} from './RTTI_Measure_Population';
import {RTTI_Measure_Stratifier} from './RTTI_Measure_Stratifier';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
code: RTTI_CodeableConcept,
description: t.string,
_description: RTTI_Element,
population: t.array(RTTI_Measure_Population),
stratifier: t.array(RTTI_Measure_Stratifier)
        });
        

        export var RTTI_Measure_Group:any = t.intersection([mandatory, partial]);
        

export type IMeasure_Group = t.TypeOf<typeof RTTI_Measure_Group>;
        
        