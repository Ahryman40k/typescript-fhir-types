
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';

export enum Sequence_ReferenceSeqOrientationKind {
                sense = 'sense',
antisense = 'antisense'
            }
export enum Sequence_ReferenceSeqStrandKind {
                watson = 'watson',
crick = 'crick'
            }
const Sequence_ReferenceSeqOrientationKindKeys = t.keyof({
                [Sequence_ReferenceSeqOrientationKind.sense]: null,
[Sequence_ReferenceSeqOrientationKind.antisense]: null
            });
const Sequence_ReferenceSeqStrandKindKeys = t.keyof({
                [Sequence_ReferenceSeqStrandKind.watson]: null,
[Sequence_ReferenceSeqStrandKind.crick]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
chromosome: RTTI_CodeableConcept,
genomeBuild: t.string,
_genomeBuild: RTTI_Element,
orientation: Sequence_ReferenceSeqOrientationKindKeys,
_orientation: RTTI_Element,
referenceSeqId: RTTI_CodeableConcept,
referenceSeqPointer: RTTI_Reference,
referenceSeqString: t.string,
_referenceSeqString: RTTI_Element,
strand: Sequence_ReferenceSeqStrandKindKeys,
_strand: RTTI_Element,
windowStart: t.number,
_windowStart: RTTI_Element,
windowEnd: t.number,
_windowEnd: RTTI_Element
        });
        

        export var RTTI_Sequence_ReferenceSeq:any = t.intersection([mandatory, partial]);
        

export type ISequence_ReferenceSeq = t.TypeOf<typeof RTTI_Sequence_ReferenceSeq>;
        
        