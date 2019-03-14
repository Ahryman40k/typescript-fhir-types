
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Invoice_Participant} from './RTTI_Invoice_Participant';
import {RTTI_Invoice_LineItem} from './RTTI_Invoice_LineItem';
import {RTTI_Invoice_PriceComponent} from './RTTI_Invoice_PriceComponent';
import {RTTI_Money} from './RTTI_Money';
import {RTTI_Annotation} from './RTTI_Annotation';

export enum InvoiceStatusKind {
                draft = 'draft',
issued = 'issued',
balanced = 'balanced',
cancelled = 'cancelled',
enteredInError = 'enteredInError'
            }
const InvoiceStatusKindKeys = t.keyof({
                [InvoiceStatusKind.draft]: null,
[InvoiceStatusKind.issued]: null,
[InvoiceStatusKind.balanced]: null,
[InvoiceStatusKind.cancelled]: null,
[InvoiceStatusKind.enteredInError]: null
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
status: InvoiceStatusKindKeys,
_status: RTTI_Element,
cancelledReason: t.string,
_cancelledReason: RTTI_Element,
type: RTTI_CodeableConcept,
subject: RTTI_Reference,
recipient: RTTI_Reference,
date: t.string,
_date: RTTI_Element,
participant: t.array(RTTI_Invoice_Participant),
issuer: RTTI_Reference,
account: RTTI_Reference,
lineItem: t.array(RTTI_Invoice_LineItem),
totalPriceComponent: t.array(RTTI_Invoice_PriceComponent),
totalNet: RTTI_Money,
totalGross: RTTI_Money,
paymentTerms: t.string,
_paymentTerms: RTTI_Element,
note: t.array(RTTI_Annotation)
        });
        

        export var RTTI_Invoice:any = t.intersection([mandatory, partial]);
        

export type IInvoice = t.TypeOf<typeof RTTI_Invoice>;
        
        