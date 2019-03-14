
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Sequence_ReferenceSeq} from './RTTI_Sequence_ReferenceSeq';
import {RTTI_Sequence_Variant} from './RTTI_Sequence_Variant';
import {RTTI_Sequence_Quality} from './RTTI_Sequence_Quality';
import {RTTI_Sequence_Repository} from './RTTI_Sequence_Repository';
import {RTTI_Sequence_StructureVariant} from './RTTI_Sequence_StructureVariant';

export enum SequenceTypeKind {
                aa = 'aa',
dna = 'dna',
rna = 'rna'
            }
const SequenceTypeKindKeys = t.keyof({
                [SequenceTypeKind.aa]: null,
[SequenceTypeKind.dna]: null,
[SequenceTypeKind.rna]: null
            });


        const mandatory = t.type({
           resourceType: t.string
        });
        

        const partial = t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
text: RTTI_Narrative,
contained: t.array(ResourceList),
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: t.array(RTTI_Identifier),
type: SequenceTypeKindKeys,
_type: RTTI_Element,
coordinateSystem: t.number,
_coordinateSystem: RTTI_Element,
patient: RTTI_Reference,
specimen: RTTI_Reference,
device: RTTI_Reference,
performer: RTTI_Reference,
quantity: RTTI_Quantity,
referenceSeq: RTTI_Sequence_ReferenceSeq,
variant: t.array(RTTI_Sequence_Variant),
observedSeq: t.string,
_observedSeq: RTTI_Element,
quality: t.array(RTTI_Sequence_Quality),
readCoverage: t.number,
_readCoverage: RTTI_Element,
repository: t.array(RTTI_Sequence_Repository),
pointer: t.array(RTTI_Reference),
structureVariant: t.array(RTTI_Sequence_StructureVariant)
        });
        

        export var RTTI_Sequence:any = t.intersection([mandatory, partial]);
        

export type ISequence = t.TypeOf<typeof RTTI_Sequence>;
        
        