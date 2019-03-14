
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Sequence_Roc} from './RTTI_Sequence_Roc';

export enum Sequence_QualityTypeKind {
                indel = 'indel',
snp = 'snp',
unknown = 'unknown'
            }
const Sequence_QualityTypeKindKeys = t.keyof({
                [Sequence_QualityTypeKind.indel]: null,
[Sequence_QualityTypeKind.snp]: null,
[Sequence_QualityTypeKind.unknown]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: Sequence_QualityTypeKindKeys,
_type: RTTI_Element,
standardSequence: RTTI_CodeableConcept,
start: t.number,
_start: RTTI_Element,
end: t.number,
_end: RTTI_Element,
score: RTTI_Quantity,
method: RTTI_CodeableConcept,
truthTP: t.number,
_truthTP: RTTI_Element,
queryTP: t.number,
_queryTP: RTTI_Element,
truthFN: t.number,
_truthFN: RTTI_Element,
queryFP: t.number,
_queryFP: RTTI_Element,
gtFP: t.number,
_gtFP: RTTI_Element,
precision: t.number,
_precision: RTTI_Element,
recall: t.number,
_recall: RTTI_Element,
fScore: t.number,
_fScore: RTTI_Element,
roc: RTTI_Sequence_Roc
        });
        

        export var RTTI_Sequence_Quality:any = t.intersection([mandatory, partial]);
        

export type ISequence_Quality = t.TypeOf<typeof RTTI_Sequence_Quality>;
        
        