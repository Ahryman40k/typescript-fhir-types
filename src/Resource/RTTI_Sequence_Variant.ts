
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
start: t.number,
_start: RTTI_Element,
end: t.number,
_end: RTTI_Element,
observedAllele: t.string,
_observedAllele: RTTI_Element,
referenceAllele: t.string,
_referenceAllele: RTTI_Element,
cigar: t.string,
_cigar: RTTI_Element,
variantPointer: RTTI_Reference
        });
        

        export var RTTI_Sequence_Variant:any = t.intersection([mandatory, partial]);
        

export type ISequence_Variant = t.TypeOf<typeof RTTI_Sequence_Variant>;
        
        