
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';

import {RTTI_Element} from './RTTI_Element';
;




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
score: t.array(t.number),
_score: t.array(RTTI_Element),
numTP: t.array(t.number),
_numTP: t.array(RTTI_Element),
numFP: t.array(t.number),
_numFP: t.array(RTTI_Element),
numFN: t.array(t.number),
_numFN: t.array(RTTI_Element),
precision: t.array(t.number),
_precision: t.array(RTTI_Element),
sensitivity: t.array(t.number),
_sensitivity: t.array(RTTI_Element),
fMeasure: t.array(t.number),
_fMeasure: t.array(RTTI_Element)
        });
        

        export var RTTI_Sequence_Roc:any = t.intersection([mandatory, partial]);
        

export type ISequence_Roc = t.TypeOf<typeof RTTI_Sequence_Roc>;
        
        