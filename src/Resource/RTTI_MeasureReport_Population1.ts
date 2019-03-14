
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
code: RTTI_CodeableConcept,
count: t.number,
_count: RTTI_Element,
subjectResults: RTTI_Reference
        });
        

        export var RTTI_MeasureReport_Population1:any = t.intersection([mandatory, partial]);
        

export type IMeasureReport_Population1 = t.TypeOf<typeof RTTI_MeasureReport_Population1>;
        
        