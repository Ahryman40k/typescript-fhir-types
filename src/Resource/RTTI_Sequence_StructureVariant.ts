
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Sequence_Outer} from './RTTI_Sequence_Outer';
import {RTTI_Sequence_Inner} from './RTTI_Sequence_Inner';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
precision: t.string,
_precision: RTTI_Element,
reportedaCGHRatio: t.number,
_reportedaCGHRatio: RTTI_Element,
length: t.number,
_length: RTTI_Element,
outer: RTTI_Sequence_Outer,
inner: RTTI_Sequence_Inner
        });
        

        export var RTTI_Sequence_StructureVariant:any = t.intersection([mandatory, partial]);
        

export type ISequence_StructureVariant = t.TypeOf<typeof RTTI_Sequence_StructureVariant>;
        
        