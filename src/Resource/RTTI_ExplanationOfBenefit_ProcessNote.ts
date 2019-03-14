
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';

export enum ExplanationOfBenefit_ProcessNoteTypeKind {
                display = 'display',
print = 'print',
printoper = 'printoper'
            }
const ExplanationOfBenefit_ProcessNoteTypeKindKeys = t.keyof({
                [ExplanationOfBenefit_ProcessNoteTypeKind.display]: null,
[ExplanationOfBenefit_ProcessNoteTypeKind.print]: null,
[ExplanationOfBenefit_ProcessNoteTypeKind.printoper]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
number: t.number,
_number: RTTI_Element,
type: ExplanationOfBenefit_ProcessNoteTypeKindKeys,
_type: RTTI_Element,
text: t.string,
_text: RTTI_Element,
language: RTTI_CodeableConcept
        });
        

        export var RTTI_ExplanationOfBenefit_ProcessNote:any = t.intersection([mandatory, partial]);
        

export type IExplanationOfBenefit_ProcessNote = t.TypeOf<typeof RTTI_ExplanationOfBenefit_ProcessNote>;
        
        