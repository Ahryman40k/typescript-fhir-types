
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';

export enum ClaimResponse_ProcessNoteTypeKind {
                display = 'display',
print = 'print',
printoper = 'printoper'
            }
const ClaimResponse_ProcessNoteTypeKindKeys = t.keyof({
                [ClaimResponse_ProcessNoteTypeKind.display]: null,
[ClaimResponse_ProcessNoteTypeKind.print]: null,
[ClaimResponse_ProcessNoteTypeKind.printoper]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
number: t.number,
_number: RTTI_Element,
type: ClaimResponse_ProcessNoteTypeKindKeys,
_type: RTTI_Element,
text: t.string,
_text: RTTI_Element,
language: RTTI_CodeableConcept
        });
        

        export var RTTI_ClaimResponse_ProcessNote:any = t.intersection([mandatory, partial]);
        

export type IClaimResponse_ProcessNote = t.TypeOf<typeof RTTI_ClaimResponse_ProcessNote>;
        
        