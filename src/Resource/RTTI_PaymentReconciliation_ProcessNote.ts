
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

export enum PaymentReconciliation_ProcessNoteTypeKind {
                display = 'display',
print = 'print',
printoper = 'printoper'
            }
const PaymentReconciliation_ProcessNoteTypeKindKeys = t.keyof({
                [PaymentReconciliation_ProcessNoteTypeKind.display]: null,
[PaymentReconciliation_ProcessNoteTypeKind.print]: null,
[PaymentReconciliation_ProcessNoteTypeKind.printoper]: null
            });


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: PaymentReconciliation_ProcessNoteTypeKindKeys,
_type: RTTI_Element,
text: t.string,
_text: RTTI_Element
        });
        

        export var RTTI_PaymentReconciliation_ProcessNote:any = t.intersection([mandatory, partial]);
        

export type IPaymentReconciliation_ProcessNote = t.TypeOf<typeof RTTI_PaymentReconciliation_ProcessNote>;
        
        