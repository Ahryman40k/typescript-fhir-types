
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Expression} from './RTTI_Expression';




        const mandatory = t.type({
           criteria: RTTI_Expression
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
code: RTTI_CodeableConcept,
usage: t.array(RTTI_CodeableConcept),
description: t.string,
_description: RTTI_Element
        });
        

        export var RTTI_Measure_SupplementalData:any = t.intersection([mandatory, partial]);
        

export type IMeasure_SupplementalData = t.TypeOf<typeof RTTI_Measure_SupplementalData>;
        
        