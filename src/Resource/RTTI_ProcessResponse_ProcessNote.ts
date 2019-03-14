
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum ProcessResponse_ProcessNoteTypeKind {
                display = 'display',
print = 'print',
printoper = 'printoper'
            }
const ProcessResponse_ProcessNoteTypeKindKeys = t.keyof({
                [ProcessResponse_ProcessNoteTypeKind.display]: null,
[ProcessResponse_ProcessNoteTypeKind.print]: null,
[ProcessResponse_ProcessNoteTypeKind.printoper]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: ProcessResponse_ProcessNoteTypeKindKeys,
_type: RTTI_Element,
text: t.string,
_text: RTTI_Element
        });
        

        export var RTTI_ProcessResponse_ProcessNote:any = t.intersection([mandatory, partial]);
        

export type IProcessResponse_ProcessNote = t.TypeOf<typeof RTTI_ProcessResponse_ProcessNote>;
        
        